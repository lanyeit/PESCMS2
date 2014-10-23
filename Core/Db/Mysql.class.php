<?php

/**
 * PESCMS run in PHP 5.3+
 *
 * Copyright (c) 2014 PESMCMS (http://www.pesmcs.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Core\Db;

use \PDO,
    Core\Func\CoreFunc as CoreFunc;

/**
 * PES Mysql类
 * @author LuoBoss
 * @version 1.0
 */
class Mysql extends Connect {

    public $getLastSql, $getLastInsert, $prefix, $param = array();
    private $tableName, $field = '*', $where = '', $join = array(), $order = '',
            $group = '', $limit = '';

    /**
     * 设置表名
     * @param str $name 表名称
     * @return \Core\Db\Mysql 返回变量
     */
    public function tableName($name) {
        $this->prefix = CoreFunc::loadConfig('DB_PREFIX');
        $this->tableName = $this->prefix . $name;
        return $this;
    }

    /**
     * 设置显示字段
     * @param str $name 字段名
     * @return \Core\Db\Mysql 返回变量
     */
    public function field($name) {
        if (empty($name)) {
            $this->field = '*';
        } else {
            $this->field = $name;
        }
        return $this;
    }

    /**
     * 设置条件
     * @param str $condition 条件
     * @return \Core\Db\Mysql 返回变量
     */
    public function where($condition) {
        if (empty($condition)) {
            $this->where = '';
        } else {
            $this->where = ' WHERE ' . $condition;
        }
        return $this;
    }

    /**
     * 设置左联表
     * @param str $condition 条件
     * @return \Core\Db\Mysql 返回变量
     */
    public function join($condition) {
        if (empty($condition)) {
            $this->join = array();
        } else {
            $this->join[] = ' LEFT JOIN ' . $condition;
        }

        return $this;
    }

    /**
     * 设置排序
     * @param str $condition 条件
     * @return \Core\Db\Mysql 返回变量
     */
    public function order($condition) {
        $this->order = ' ORDER BY ' . $condition;
        return $this;
    }

    /**
     * 设置组合
     * @param str $condition 条件
     * @return \Core\Db\Mysql 返回变量
     */
    public function group($condition) {
        $this->group = ' GROUP BY ' . $condition;
        return $this;
    }

    /**
     * 设置限制
     * @param str $condition 条件
     * @return \Core\Db\Mysql 返回变量
     */
    public function limit($condition) {
        $this->limit = ' LIMIT ' . $condition;
        return $this;
    }

    /**
     * 单条数据查找
     * @param array $param 查询参数(一维数组)
     * @param str $fieldType 字段类型
     * @return array 返回一维数组结果
     */
    public function find($param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);

        $limit = ' LIMIT 1 ';
        $this->join = empty($this->join) ? array('') : $this->join;
        $this->getLastSql = 'SELECT ' . $this->field . ' FROM ' . $this->tableName . implode('', $this->join) . $this->where . $this->group . $this->order . $limit;
        $sth = $this->PDOBindArray();
        $sth->execute();
        $result = $sth->fetch();
        $this->emptyParam();
        return $result;
    }

    /**
     * 数据查找
     * @param array $param 查询参数(一维数组)
     * @param str $fieldType 字段类型
     * @return array 返回二维数组结果
     */
    public function select($param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);
        $this->join = empty($this->join) ? array('') : $this->join;
        $this->getLastSql = 'SELECT ' . $this->field . ' FROM ' . $this->tableName . implode('', $this->join) . $this->where . $this->group . $this->order . $this->limit;
        $sth = $this->PDOBindArray();
        $sth->execute();
        $result = $sth->fetchALL();
        $this->emptyParam();
        return $result;
    }

    /**
     * 单例数据插入
     * @param array $param 插入参数(一维数组)
     * @param str $fieldType 字段类型
     * @return str 返回最后插入的ID
     */
    public function insert($param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);
        foreach ($this->param as $key => $value) {
            $field[] = "`{$key}`";
            $namedPlaceholders[] = ':' . $key;
        }
        $this->getLastSql = 'INSERT INTO ' . $this->tableName . ' (' . implode(',', $field) . ' ) VALUES (' . implode(',', $namedPlaceholders) . ' )';
        $sth = $this->PDOBindArray();
        $result = $sth->execute();
        $this->emptyParam();
        if ($result == false) {
            return false;
        } else {
            return $this->dbh->lastInsertId();
        }
    }

    /**
     * 多数据插入
     * @param array $param 插入参数(二维维数组)
     * @param str $fieldType 字段类型
     * @return array 返回最后插入的ID数组集
     */
    public function insertAll($param = '', $fieldType = '') {
        $this->dealMoreParam($param, $fieldType);
        foreach ($this->param as $row) {
            foreach ($row as $key => $value) {
                $field[$key] = "`{$key}`";
                $namedPlaceholders[$key] = ':' . $key;
            }
        }

        $this->getLastSql = 'INSERT INTO ' . $this->tableName . ' (' . implode(',', $field) . ' ) VALUES (' . implode(',', $namedPlaceholders) . ' )';
        $sth = $this->dbh->prepare($this->getLastSql);

        foreach ($this->param as $row) {
            foreach ($row as $key => $value) {
                $sth->bindValue(':' . $key, $value['value'], $value['fieldType']);
            }
            $sth->execute();
            $result[] = $this->dbh->lastInsertId();
            if ($this->dbh->lastInsertId() == false) {
                return false;
            }
        }
        $this->emptyParam();
        return $result;
    }

    /**
     * 数据保存
     * @param array $param 插入参数(一维数组)
     * @param str $fieldType 字段类型
     * @return str 返回影响行数
     */
    public function update($param = '', $fieldType = '') {
        $noset = $param['noset'];
        unset($param['noset']);
        foreach ($param as $key => $value) {
            $content[] = "`{$key}` = :{$key}";
        }

        if (!empty($noset)) {
            $param = array_merge($param, $noset);
        }

        $this->dealParam($param, $fieldType);

        $this->getLastSql = 'UPDATE ' . $this->tableName . ' SET ' . implode(',', $content) . $this->where;

        $sth = $this->PDOBindArray();
        $sth->execute();
        $result = $sth->rowCount();
        $this->emptyParam();
        if ($result >= 0) {
            return $result;
        } else {
            return false;
        }
    }

    /**
     * 删除单条数据
     * @param array $param 插入参数(一维数组)
     * @param str $fieldType 字段类型
     * @return str 返回影响行数
     */
    public function delete($param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);
        $this->getLastSql = 'DELETE FROM ' . $this->tableName . $this->where;
        $sth = $this->PDOBindArray();
        $sth->execute();
        $result = $sth->rowCount();
        $this->emptyParam();

        if ($result >= 0) {
            return $result;
        } else {
            return false;
        }
    }

    /**
     * 删除多条数据
     * @param array $param 插入参数(二维数组)
     * @param str $fieldType 字段类型
     * @return str 返回影响行数
     */
    public function deleteAll($param = '', $fieldType = '') {
        $this->dealMoreParam($param, $fieldType);
        $this->getLastSql = 'DELETE FROM ' . $this->tableName . $this->where;
        $sth = $this->dbh->prepare($this->getLastSql);
        foreach ($this->param as $row) {
            foreach ($row as $key => $value) {
                $sth->bindValue(':' . $key, $value['value'], $value['fieldType']);
            }
            $sth->execute();
            $result = $sth->rowCount();
            if ($result == 0) {
                return false;
            } else {
                return $result;
            }
        }
        $this->emptyParam();

        return $result;
    }

    /**
     * 执行查询SQL语句
     * @param str $sql SQL语句
     * @param array $param 插入参数(二维数组)
     * @param str $fieldType 字段类型
     * @return str 返回一维数组
     */
    public function fetch($sql, $param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);
        $this->getLastSql = $sql;
        $sth = $this->PDOBindArray();
        $sth->execute();
        $result = $sth->fetch();
        $this->emptyParam();
        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }

    /**
     * 执行查询SQL语句
     * @param str $sql SQL语句
     * @param array $param 插入参数(二维数组)
     * @param str $fieldType 字段类型
     * @return str 返回二维数组
     */
    public function getAll($sql, $param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);
        $this->getLastSql = $sql;
        $sth = $this->PDOBindArray();
        $sth->execute();
        $result = $sth->fetchALL();
        $this->emptyParam();
        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }

    /**
     * 执行插入/更新/删除SQL语句
     * @param str $sql SQL语句
     * @param array $param 插入参数(二维数组)
     * @param str $fieldType 字段类型
     * @return str 返回影响行数
     */
    public function query($sql, $param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);
        $this->getLastSql = $sql;
        $sth = $this->PDOBindArray();
        $sth->execute();
        $statistics = $sth->rowCount();
        $this->emptyParam();
        if (!empty($this->dbh->lastInsertId())) {
            return $this->dbh->lastInsertId();
        } elseif ($statistics != 0) {
            return $statistics;
        } else {
            return false;
        }
    }

    /**
     * 用于执行数据库操作
     * @param array $param 插入参数(二维数组)
     * @param str $fieldType 字段类型
     * @return str 返回影响行数
     */
    public function alter($sql, $param = '', $fieldType = '') {
        $this->dealParam($param, $fieldType);
        $this->getLastSql = $sql;
        $sth = $this->PDOBindArray();
        $result = $sth->execute();
        if ($result == false) {
            return false;
        } else {
            return $result;
        }
    }

    /**
     * 处理一维参数
     * @param type $param 参数
     * @param type $fieldType 字段类型
     * @return boolean 返回一个数组变量
     */
    private function dealParam($param = '', $fieldType = '') {
        //分析参数绑定
        if (is_array($param)) {
            $array = $param;
        } elseif (empty($param)) {
            return true;
        } else {
            exit('参数绑定只能为数组');
        }
        //分析字段设置
        if (is_string($fieldType)) {
            $fieldTypeArray = explode(',', $fieldType);
        } else {
            exit('字段类型只能为字符串');
        }

        if (empty($fieldType)) {
            foreach ($array as $key => $value) {
                $this->param[$key]['value'] = $value;
                $this->param[$key]['fieldType'] = 2;
            }
            return $this->param;
        }

        $arrayLength = count($array);
        if ($arrayLength != count($fieldTypeArray)) {
            exit('参数绑定与字段设置长度不一致');
        }

        $i = 0;
        foreach ($array as $key => $value) {
            $this->param[$key]['value'] = $value;
            $this->param[$key]['fieldType'] = $fieldTypeArray[$i];
            $i++;
        }
        return $this->param;
    }

    /**
     * 处理二维参数
     * @param type $param 参数
     * @param type $fieldType 字段类型
     * @return boolean 返回一个数组变量
     */
    private function dealMoreParam($param = '', $fieldType = '') {
        //分析参数绑定
        if (is_array($param)) {
            $array = $param;
        } elseif (empty($param)) {
            return true;
        } else {
            exit('参数绑定只能为数组');
        }
        //分析字段设置
        if (is_string($fieldType)) {
            $fieldTypeArray = explode(',', $fieldType);
        } else {
            exit('字段类型只能为字符串');
        }

        if (empty($fieldType)) {
            foreach ($array as $key => $value) {
                foreach ($value as $key_2 => $value_2) {
                    $this->param[$key][$key_2]['value'] = $value_2;
                    $this->param[$key][$key_2]['fieldType'] = 2;
                }
            }
            return $this->param;
        }

        $i = 0;
        foreach ($array as $key => $value) {
            foreach ($value as $key_2 => $value_2) {
                $this->param[$key][$key_2]['value'] = $value_2;
                $this->param[$key][$key_2]['fieldType'] = $fieldTypeArray[$i];
                $i++;
            }
        }
        //由于转换三维数组，顾使用$i 来做判断
        if ($i != count($fieldTypeArray)) {
            exit('参数绑定与字段设置长度不一致');
        }
        return $this->param;
    }

    /**
     * 对SQL进行预处理
     * @return type 返回PDO预处理的对象
     */
    public function PDOBindArray() {
        $sth = $this->dbh->prepare($this->getLastSql);
        if (!empty($this->param)) {
            foreach ($this->param as $key => $value) {
                $sth->bindValue(':' . $key, $value['value'], $value['fieldType']);
            }
        }
        return $sth;
    }

    /**
     * 清空绑定的参数
     */
    public function emptyParam() {
        $this->field = '*';
        $this->where = '';
        $this->join = array();
        $this->order = '';
        $this->group = '';
        $this->limit = '';
        $this->param = array();
    }

    /**
     * 执行递增
     * @param str $field 字段名称
     * @param int $num 递增数值
     * @return type 返回影响行数
     * @todo 此处存在注入风险，请勿用于用户提交数据！
     */
    public function setInc($field, $num = '1') {
        $this->getLastSql = "UPDATE {$this->tableName} SET `{$field}` = {$field} + :num {$this->where} ";
        $sth = $this->dbh->prepare($this->getLastSql);
        $sth->bindValue(':num', $num, PDO::PARAM_INT);
        $sth->execute();
        $result = $sth->rowCount();
        $this->emptyParam();
        if ($result == 0) {
            return false;
        } else {
            return $result;
        }
        return $result;
    }

    /**
     * 执行递减
     * @param str $field 字段名称
     * @param int $num 递减数值
     * @return type 返回影响行数
     * @todo 此处存在注入风险，请勿用于用户提交数据！
     */
    public function setDec($field, $num = '1') {
        $this->getLastSql = "UPDATE {$this->tableName} SET `{$field}` = {$field} - :num {$this->where} ";
        $sth = $this->dbh->prepare($this->getLastSql);
        $sth->bindValue(':num', $num, PDO::PARAM_INT);
        $sth->execute();
        $result = $sth->rowCount();
        $this->emptyParam();
        if ($result == 0) {
            return false;
        } else {
            return $result;
        }
        return $result;
    }

    /**
     * 启动事务
     */
    public function transaction() {
        return $this->dbh->beginTransaction();
    }

    /**
     * 事务回滚
     */
    public function rollBack() {
        return $this->dbh->rollBack();
    }

    /**
     * 提交事务
     */
    public function commit() {
        return $this->dbh->commit();
    }

}
