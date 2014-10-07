<?php
/**
 * Pes for PHP 5.3+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 */

namespace Model;

/**
 * 权限节点
 */
class Field extends \Core\Model\Model {
    
    /**
     * 列出对应的模型的字段
     * @param type $modelId
     */
    public static function fieldList($modelId){
        return self::db('field')->where('model_id = :model_id')->order('field_listsort asc, field_id asc')->select(array('model_id' => $modelId));
    }
    
}