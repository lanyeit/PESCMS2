<?php
/**
 * PESCMS for PHP 5.4+
 *
 * Copyright (c) 2014 PESCMS (http://www.pescms.com)
 *
 * For the full copyright and license information, please view
 * the file LICENSE.md that was distributed with this source code.
 * @core version 2.6
 * @version 1.0
 */


namespace Slice\Admin\UpdateField;

/**
 * 执行更新节点父类字段的动作
 * Class Login
 */
class UpdateNodeParentField extends \Core\Slice\Slice{

    public function before() {
    }

    /**
     * 更新节点模型字段中，父类的字段选项值
     */
    public function after() {
        $nodeList = \Model\Content::listContent(['table' => 'node', 'condition' => 'node_parent = 0']);
        $node = ['请选择' => '', '顶层节点' => '0'];
        foreach($nodeList as $value){
            $node[$value['node_title']] = $value['node_id'];
        }

        $this->db('field')->where(' field_model_id = 13 AND field_name = :field_name')->update(['field_option' => json_encode($node), 'noset' => ['field_name' => 'parent'] ]);
    }


}