<?php

return array(
    /**
     * 公用语言词
     */
    'COMMON' => array(
        'LANGUAGE' => '语言',
        'TOKEN_LOST' => '令牌丢失',
        'TOKEN_ERROR' => '令牌不正确',
        'LOGOUT' => '注销登录',
        'TITLE' => '标题',
        'ADD' => '添加',
        'EDIT' => '编辑',
        'DELETE' => '删除',
        'SORT' => '排序',
        'SORT_SUCCESS' => '排序已更新!',
        'ID' => 'ID',
        'OPTION' => '操作',
        'OK' => '确认',
        'CANCEL' => '取消',
        'SURE_DELETE' => '确认删除?',
        'DELETE_TIPS' => '删除后，数据将无法复原!',
        'RUN' => '执行中......',
        'NEWS_TIPS' => '消息提示',
        'DELETE_ID' => '请选择要删除的数据!',
        'DELETE_ERROR' => '删除失败，数据可能已删除或者不存在!',
        'DELETE_SUCCESS' => '删除成功！',
        'PLEASE_SELECT' => '请选择',
        'SUBMIT' => '提交',
        'STATUS' => '状态',
        'CURRENT_NAME' => '当前语言名称',
        'ENABLE' => '启用',
        'DISABLE' => '禁用',
        'UNKNOW' => '未知',
        'ALLOW' => '允许',
        'BAN' => '禁止',
        'NAME' => '名称',
        'DISPLAY_NAME' => '显示名称',
        'YES' => '是',
        'NO' => '否',
    ),
    
    /**
     * 首页
     */
    'INDEX' => array(
        'SITE_TITLE' => '网站后台 - PESCMS',
        'SITE_INDEX' => '网站首页',
    ),
    
    /**
     * 登录
     */
    'LOGIN' => array(
        'ACCOUNT_LOST' => '请填写帐号',
        'PASSWORD_LOST' => '请填写密码',
        'LOGIN_SUCCESS' => '登录成功!',
        'LOGIN_ERROR' => '帐号或者密码错误',
    ),
    /**
     * 菜单语言包
     */
    'MENU_LIST' => array(
        'BASE_SET' => '基础设置',
        'SYSTEM_INFO' => '系统信息',
        'SYSTEM_MEUN' => '后台菜单',
        'MODEL_MANAGE' => '模型管理',
        'MODEL_LIST' => '模型列表',
        'CLEAR_CACHE' => '清空缓存',
        'CONTENT_MANAGE' => '内容管理',
        'CATEGORYS_MANAGE' => '分类管理',
        'USER_MANAGE' => '会员管理',
        'USER_LIST' => '会员列表',
        'PERMISSIONS_NODE' => '权限节点',
        'USER_GROUP' => '用户组',
        'ADVANCED_SETTINGS' => '高级设置',
        'SYSTEM_SETTING' => '系统设置',
        'THEME_LIST' => '主题列表',
        'DATA_BACKUP' => '数据备份',
        'CHECK_UPGRADE' => '检查升级',
        'FILE_MANAGE' => '文件管理',
        'PAGE_LIST' => '单页列表',
        'ARTICLE_LIST' => '文章列表',
        'DOWNLOAD_LIST' => '下载列表',
        'SLIDESHOW_MANAGE' => '幻灯片管理',
        'UPGRADE_LIST' => '更新列表',
        'BLOG' => '博客',
        'UNKNOW_ERROR' => '未知错误',
        
    ),
    /**
     * 系统信息
     */
    'SYSTEM' => array(
        'SYSTEM_VERSION' => '软件版本',
        'VIEW_NEW_VERSION' => '查看最新版本',
        'PHP_VERSION' => 'PHP版本',
        'MYSQL_VERSION' => 'MYSQL版本',
        'SERVER_INFO' => '服务器端信息',
        'MAX_UPLOAD' => '最大上传限制',
        'MAX_EXEC_TIME' => '最大执行时间',
        'SYS_EMAIL' => '邮件支持模式',
    ),
    
    /**
     * 后台菜单
     */
    'MENU' => array(
        'LINK_PRARM' => '链接参数',
        'NOT_EXITS_MENU' => '菜单不存在',
        'MENU_NAME' => '菜单语言名称',
        'MENU_NAME_TIPS' => '此处填写语言包的键值名称',
        'MENU_TYPE' => '菜单类型',
        'TOP_MENU' => '顶层菜单',
        'MENU_URL' => '菜单链接地址',
        'MENU_URL_TIPS' => '链接地址以 组-模型-行动 形式填写',
        'LOST_MENU_ID' => '丢失菜单ID',
        'SELECT_TOP_MENU' => '请选择菜单类型',
        'ENTER_MENU_URL' => '请填写菜单链接地址',
        'ENTER_MENU_NAME' => '请填写菜单名称',
        'ADD_MENU_FAIL' => '添加菜单失败',
        'UPDATE_MENU_FAIL' => '更新菜单失败',
        'ADD_MENU_SUCCESS' => '添加菜单成功',
        'UPDATE_MENU_SUCCESS' => '更新菜单成功',
    ),
    
    /**
     * 模型管理
     */
    'MODEL' => array(
        'IS_SEARCH' => '允许搜索',
        'MODEL_NAME' => '模型名称',
        'FIELD_MANAGE' => '字段管理',
        'SELECT_MODEL_ID' => '请选择模型',
        'FIELD_TYPE' => '字段类型',
        'FIELD_ADD' => '添加字段',
        'FIELD_EDIT' => '编辑字段',
        'EXIST_FIELD' => '字段已存在',
        'NOT_EXIST_FIELD' => '不存在的字段',
        'FIELD_NAME_TIPS' => '此名称与对应模型的表单值挂钩且唯一性，添加后将无法修，请谨慎填写！',
        'FIELD_DISPLAY_NAME_TIPS' => '模型表单中的标题',
        'ENTER_FIELD_NAME' => '请填写字段名称',
        'FIELD_OPTION' => '字段选项值',
        'FIELD_OPTION_TIPS' => '此处若没有特殊说明，必须 值|名称 填写、且一行一个选项值，否则将导致数据异常! <br />注意:目前选项适用于单选，复选，下拉菜单。其余功能填写也不会产生任何实际效果。',
        'FIELD_DEFAULT' => '字段默认值',
        'FIELD_DEFAULT_TIPS' => '选填项；当表单值为空，则调用此默认值。<br />若选项值填写了内容，请在此处填写选项值其中的值作为默认值.',
        'FIELD_REQUIRE' => '是否必填选',
        'FIELD_STATUS' => '字段状态',
    ),
    
    /**
     * 字段类型
     */
    'FIELD_TYPE' => array(
        'FIELD_CATEGORTS' => '分类',
        'FIELD_TEXT' => '单行文本框',
        'FIELD_SELECT' => '下拉菜单',
        'FIELD_CHECKBOX' => '复选框',
        'FIELD_RADIO' => '单选框',
        'FIELD_TEXTAREA' => '多行文本框',
        'FIELD_THUMB' => '略缩图',
        'FIELD_EDITOR' => '编辑器',
        'FIELD_IMG' => '图组',
        'FIELD_FILE' => '上传文件',
        'FIELD_DATE' => '时间控件',
        'FIELD_UNKNOW' => '未知字段类型',
    ),
);

