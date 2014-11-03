<?php

/**
 * 各个位置的语言包。
 * 后续可能会将本包进行细化处理
 * 建议将所有非程序新增的语言信息都添加在此处
 */
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
        'LANG_KEY' => '语言键值名称',
        'LANG_KEY_TIPS' => '对应的语言键值名称，只允许大写字母和下划线',
        'CREATETIME' => '发布时间',
        'HIDDEN' => '隐藏',
        'DISPLAY' => '显示',
        'THUMB' => '缩略图',
        'UPLOAD_FAIL' => '上传失败',
        'NO_PREVIEW' => '无法预览',
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
        'DELETE_MENU_FAIL' => '删除菜单失败',
    ),
    /**
     * 模型管理
     */
    'MODEL' => array(
        'IS_SEARCH' => '允许搜索',
        'MODEL_NAME' => '模型名称',
        'FIELD_MANAGE' => '字段管理',
        'SELECT_MODEL_ID' => '请选择模型',
        'ADD_MODEL' => '添加模型',
        'EDIT_MODEL' => '编辑模型',
        'MODEL_STATUS' => '模型状态',
        'FIELD_TYPE' => '字段类型',
        'FIELD_ADD' => '添加字段',
        'FIELD_EDIT' => '编辑字段',
        'EXIST_FIELD' => '字段已存在',
        'NOT_EXIST_FIELD' => '不存在的字段',
        'NOT_EXIST_MODEL' => '不存在的模型',
        'EXIST_MODEL' => '模型已经存在',
        'MODEL_NAME_TIPS' => '模型名称,只允许英文数字下划线且添加后无法修改。请谨慎填写!',
        'MODEL_DISPLAY_NAME_TIPS' => '菜单中模型的显示名称<br />此处添加的为当前语言的显示名称',
        'FIELD_NAME_TIPS' => '此名称与对应模型的表单值挂钩且唯一性，添加后将无法修，请谨慎填写！',
        'FIELD_DISPLAY_NAME_TIPS' => '模型表单中的标题',
        'ENTER_MODEL_NAME' => '请填写模型名称',
        'ENTER_FIELD_NAME' => '请填写字段名称',
        'SELECT_MODEL_STATUS' => '请选择模型的启用状态',
        'SELECT_MODEL_SEARCH' => '请选择模型是否允许搜索',
        'ADD_MODEL_FAIL' => '添加模型失败',
        'ADD_MODEL_SUCCESS' => '添加模型成功',
        'UPDATE_MODEL_FAIL' => '更新模型失败',
        'UPDATE_MODEL_SUCCESS' => '更新模型成功',
        'CREATE_TABLE_ERROR' => '创建表出错!请联系技术人员或者寻找PESCMS官网解决.',
        'FIELD_OPTION' => '字段选项值',
        'FIELD_OPTION_TIPS' => '此处若没有特殊说明，必须 值|名称 填写、且一行一个选项值，否则将导致数据异常! <br />注意:目前选项适用于单选，复选，下拉菜单。其余功能填写也不会产生任何实际效果。',
        'FIELD_DEFAULT' => '字段默认值',
        'FIELD_DEFAULT_TIPS' => '选填项；当表单值为空，则调用此默认值。<br />若选项值填写了内容，请在此处填写选项值其中的值作为默认值.',
        'FIELD_REQUIRE' => '是否必填选',
        'FIELD_STATUS' => '字段状态',
        'ALERT_TABLE_FIELD_ERROR' => '移除字段时出错！请联系技术人员或者寻找PESCMS官网解决.',
        'LOST_FIELD_ID' => '丢失字段ID',
        'LOST_MODEL_ID' => '丢失模型ID',
        'SELECT_FIELD_TYPE' => '请选择字段模型',
        'ENTER_DISPLAY_NAME' => '请填写显示名称',
        'SELECT_REQUIRED' => '请选择是否必填',
        'SELECT_FIELD_STATUS' => '请选择字段的启用状态',
        'ADD_FIELD_SUCCESS' => '添加字段成功',
        'ADD_FIELD_FAIL' => '添加字段出错',
        'UPDATE_FIELD_SUCCESS' => '更新字段成功',
        'UPDATE_FIELD_FAIL' => '更新字段失败',
        'SPLIT_OPTION_ERROR' => '拆分选项值出错',
        'DELETE_MODEL_FIELD_FAIL' => '移除字段表中对应的模型字段失败!',
        'ALTER_TABLE_ERROR' => '移除模型表出错！请联系技术人员或者寻找PESCMS官网解决.',
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
    /**
     * 分类模型
     */
    'CATEGORY' => array(
        'EXTERNAL_LINK' => '外部链接',
        'ADD_CHILD' => '添加子类',
        'CATEGORY_NAME' => '分类名称',
        'CATEGORY_NAV' => '导航菜单',
        'CATEGORY_HTML' => '生成HTML',
        'ADD_CATEGORY' => '添加分类',
        'EDIT_CATEGORY' => '编辑分类',
        'NOT_EXIST_CATEGORY' => '不存在的分类',
        'TOP_CATEGORYS' => '顶层分类',
        'MODEL_TYPE' => '模型类型',
        'CATEGORY_NAME_TIPS' => '填写准确的分类名称，可以提升用户体验',
        'CATEGORY_ALIASES' => '分类别名',
        'CATEGORY_ALIASES_TIPS' => '分类别名只允许英文数字，生成对应的静态文件将调用此别名.',
        'CATEGORY_KEYWORD' => '分类页关键词',
        'CATEGORY_KEYWORD_TIPS' => '分类页的关键词，适用于SEO优化',
        'CATEGORY_DESCRIPTION' => '分类页描述',
        'CATEGORY_DESCRIPTION_TIPS' => '分类页的描述，适用于SEO优化',
    ),
    'UPLOAD' => array(
        'IMG_TIPS' => '上传的文件非图片',
        'EMPTY_UPLOAD' => '没数据上传',
        'EMPTY_INPUT_NAME' => '没有提交表单名称',
        'EMPTY_IMG_SIZE' => '没有提交图片的宽高参数',
        'UPLOAD_FAIL' => '上传图片失败',
    ),
);

