-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2015 年 03 月 12 日 04:16
-- 服务器版本: 5.5.16
-- PHP 版本: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `pescms`
--

-- --------------------------------------------------------

--
-- 表的结构 `pes_article`
--

CREATE TABLE IF NOT EXISTS `pes_article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_listsort` int(11) NOT NULL,
  `article_status` tinyint(4) NOT NULL,
  `article_lang` tinyint(4) NOT NULL,
  `article_url` varchar(255) NOT NULL,
  `article_createtime` int(11) NOT NULL,
  `article_title` varchar(255) NOT NULL,
  `article_thumb` varchar(255) NOT NULL,
  `article_keyword` varchar(255) NOT NULL,
  `article_description` text NOT NULL,
  `article_content` text NOT NULL,
  `article_catid` int(11) NOT NULL,
  `article_source` varchar(255) NOT NULL,
  `article_source_link` varchar(255) NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `pes_article`
--

INSERT INTO `pes_article` (`article_id`, `article_listsort`, `article_status`, `article_lang`, `article_url`, `article_createtime`, `article_title`, `article_thumb`, `article_keyword`, `article_description`, `article_content`, `article_catid`, `article_source`, `article_source_link`) VALUES
(1, 0, 1, 0, '/Dynamic/news/1.html', 1391036400, 'PES团队祝各位朋友马年快乐', '', '新年快乐', '', '<p>\r\n	今天是除夕夜，2014年马年即将到来，借佳节将临的大好日子，PES团队向各位朋友拜年。祝各位马年快乐，马上有钱，马上有车，马上有房子，马上有对象！\r\n</p>\r\n<p>\r\n	<img src="/Component/editor/kindeditor/attached/image/20140203/20140203095001_46147.jpg" alt="" />\r\n</p>', 9, '', ''),
(2, 0, 1, 0, '/Dynamic/Announcement/2.html', 1392048000, 'PESCMS更新说明', '', 'PESCMS更新说明', '由于系统的更新可能会比较频繁，所以今后PESCMS程序有新的更新补丁放出时，若本次更新为非核心改动，官方不会放出最新版的整合程序。为此让你带来不便，敬请谅解。', '<p style="text-indent:2em;">\r\n	感谢您对PESCMS的支持，没有您的支持，PESCMS很难持续获得动力持续地发展和维护下去。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	由于系统的更新可能会比较频繁，所以今后PESCMS程序有新的更新补丁放出时，若本次更新为非核心改动，官方不会放出最新版的整合程序。为此让你带来不便，敬请谅解。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	<span style="color:#009900;">友情提示：如果你真的需要完整的官方程序，可以到</span><a href="https://github.com/lazyphp/pescms" target="_blank"><span style="color:#337FE5;">GITHUB下载</span></a><img src="http://www.pescms.com/Component/editor/kindeditor/plugins/emoticons/images/0.gif" border="0" alt="" /><span style="color:#009900;">。在这里可以获取最新的整合程序。</span> \r\n</p>', 10, '', ''),
(3, 0, 1, 0, '/Dynamic/Announcement/3.html', 1392652800, 'PESCMS安装说明', '', '', '', '<p>\r\n	由于PESCMS早期在win下开发，因此在linux环境下可能会存在一定的BUG。例如，目前的安装功能存在一个比较严重的BUG。官方目前也在作调整中。\r\n</p>\r\n<p>\r\n	目前官方建议安装不成功的用户手动安装PESCMS。具体方法为：\r\n</p>\r\n<p>\r\n	1.将 Install/Db/pes.sql 手动导入数据库\r\n</p>\r\n<p>\r\n	2.修改表 pes_option 中的siteurl 和sitetitle 的value值。\r\n</p>\r\n<p>\r\n	3.修改表 pes_user 中的account 为自己的账号, password为 md5(md5(你的密码));\r\n</p>\r\n<p>\r\n	4.修改 Config/config.php 添加对应的数据库账号和密码\r\n</p>', 10, '', ''),
(4, 0, 1, 0, '/Dynamic/news/4.html', 1399132800, '五一快乐', '', '', '五一快乐', '<p>\r\n	五一假期一瞬间就过去了，都忘记发节日公告了。\r\n</p>\r\n<p>\r\n	尽管是迟来的公告，但至少算一点心意：祝大家节后大涨工资，工作顺顺利利。\r\n</p>\r\n<p>\r\n	此外，官网最近没什么重大更新。一些已知BUG已经修复，但一些新功能和技术债务还没完成开发，小伙伴们还再忍耐一下（我知道没多少人会看，哈哈）。\r\n</p>\r\n<p>\r\n	PS：我在想，程序里面要不要搞点彩蛋呢？\r\n</p>', 9, '', ''),
(5, 0, 1, 0, '/Dynamic/news/5.html', 1400601600, 'pescms新版说明及开发回顾', '', 'pescms新版预览,uetjs', '', '<p>\r\n	最近官方都甚少动态，项目貌似是被放弃了的样子。本着对自己的孩子负责任的态度，还是要抽空来写一下状况的。\r\n</p>\r\n<p>\r\n	官方的开发从没停止，最多就是开发人员偷懒泡妞去了。想了解最新动态的可以访问 <a href="http://git.oschina.net/fallBirds/pescms" target="_blank">GIT</a>获取项目的动态。\r\n</p>\r\n<p>\r\n	1.官方目前主要在开发一套适用于本系列项目的管理系统。\r\n</p>\r\n<p>\r\n	Q：为什么不用网上的？\r\n</p>\r\n<p>\r\n	A：PESCMS本身就可以扩展出一套完整的方案。\r\n</p>\r\n<p>\r\n	2.近几个月主要忙于项目的修复上，以及思考项目的未来走势。\r\n</p>\r\n<ol>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">新版改善了 错误机制，可以自由定制错误页面。</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">修复一推已知和新发现的BUG。<br />\r\n</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">调整系统底层，系统更加轻便。</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">新版最大特色就是后台引入了</span><a href="http://uetjs.ucentu.com/" target="_blank" style="line-height:1.5;font-size:10pt;">uetjs</a><span style="line-height:1.5;font-size:10pt;">。这是一个伟大的尝试！目前也仅局限于后台使用，路还长着咧。</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">新版还将会加入CMS的页面静态化功能！</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">新版会尽量加强后台的操纵体验。</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">还有更多的等待你去发掘。</span> \r\n	</li>\r\n</ol>\r\n<p>\r\n	3.本来计划开发一款开源商城系统，但在维护PESCMS时，发现不少问题，目前被搁置中。\r\n</p>\r\n<p>\r\n	4.用户最关心的开发文档。嗯，这个其实我很想去编写的。只是实在太懒了！鞭策不了自己去写。哎～真是对不起自己啊！！不过放心，文档肯定会争取完成的！！\r\n</p>\r\n<p>\r\n	好了，说明和回顾就写这么多吧。\r\n</p>', 9, '', ''),
(6, 0, 1, 0, '/Dynamic/Announcement/6.html', 1403366400, 'PESCMS官方开发文档', '', 'PESCMS文档,开发文档,官方文档', 'PESCMS官方开发文档', '<p>\r\n	千呼万唤始出来，PESCMS官方开发文档终于编写完毕了！本文档为离线PDF格式，在线版文档有时间会继续更新。\r\n</p>\r\n<p>\r\n	本次发布的文档涵盖了PESCMS基本的开发和应用，适合有一定PHP基础的用户阅读使用。\r\n</p>\r\n<p>\r\n	下载地址：<a href="http://www.pescms.com/upload/file/2014-06-22/doc.pdf" target="_blank">点击下载</a> \r\n</p>\r\n<p>\r\n	文档编写可能有点不全面，请在本页中留言。\r\n</p>', 10, '', '');

-- --------------------------------------------------------

--
-- 表的结构 `pes_beauty`
--

CREATE TABLE IF NOT EXISTS `pes_beauty` (
  `beauty_id` int(11) NOT NULL AUTO_INCREMENT,
  `beauty_anchor` varchar(128) NOT NULL,
  `beauty_listsort` int(11) NOT NULL,
  `beauty_status` tinyint(4) NOT NULL,
  `beauty_lang` tinyint(4) NOT NULL,
  `beauty_url` varchar(255) NOT NULL,
  `beauty_createtime` int(11) NOT NULL,
  `beauty_title` varchar(255) NOT NULL,
  `beauty_thumb` varchar(255) NOT NULL,
  `beauty_imgs` text NOT NULL,
  `beauty_view` int(255) NOT NULL,
  PRIMARY KEY (`beauty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `pes_category`
--

CREATE TABLE IF NOT EXISTS `pes_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(128) NOT NULL,
  `category_aliases` varchar(255) NOT NULL COMMENT '别名',
  `model_id` int(11) NOT NULL,
  `category_parent` int(11) NOT NULL,
  `category_child` text NOT NULL,
  `category_keyword` varchar(255) NOT NULL,
  `category_description` text NOT NULL,
  `category_thumb` varchar(255) NOT NULL,
  `category_url` varchar(255) NOT NULL,
  `category_nav` tinyint(4) NOT NULL DEFAULT '1' COMMENT '导航',
  `category_html` tinyint(1) NOT NULL COMMENT '是否生成HTML',
  `category_theme` varchar(128) NOT NULL COMMENT '模板名称',
  `category_lang` varchar(50) NOT NULL COMMENT '语言',
  `category_listsort` int(11) NOT NULL,
  PRIMARY KEY (`category_id`),
  KEY `category_parent` (`category_parent`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=41 ;

--
-- 转存表中的数据 `pes_category`
--

INSERT INTO `pes_category` (`category_id`, `category_name`, `category_aliases`, `model_id`, `category_parent`, `category_child`, `category_keyword`, `category_description`, `category_thumb`, `category_url`, `category_nav`, `category_html`, `category_theme`, `category_lang`, `category_listsort`) VALUES
(1, '关于PESCMS', 'About', 1, 0, '1,8,11', '关于PESCMS,PESCMS的说明,PESCMS的诞生', 'PESCMS是一款开源免费的CMS系统！', '', '/Page/view/id/1.html', 1, 1, '', '0', 1),
(2, '下载', 'Download', 3, 0, '2,6,7', '下载PESCMS,PESCMS下载地址', '', '', '/Download/index.html', 1, 1, '', '0', 2),
(3, '动态', 'Dynamic', 2, 0, '3,9,10', 'PESCMS动态,PESCMS新闻', '', '', '/Dynamic/index.html', 1, 1, '', '0', 3),
(4, '文档', 'Doc', -1, 0, '4,26,27,29,30,31,32,33,34,35,36,37,38,39', '', '', '', 'http://doc.cms.com/', 1, 0, '', '0', 4),
(5, '讨论', 'bbs', -1, 0, '', '', '', '', 'www.baidu.com', 0, 0, '', '0', 6),
(6, '程序下载', 'Program', 3, 2, '6', '下载PESCMS,PESCMS下载地址', '', '', '/Download/Program/index.html', 0, 1, '', '0', 0),
(7, '补丁下载', 'patch', 3, 2, '7', 'PESCMS补丁类表,PESCMS更新文件', '', '', '/Download/patch/index.html', 0, 1, '', '0', 0),
(8, '服务支持', 'Service', 2, 1, '8', 'PES服务支持,PESCMS支持', '', '', '/Article/list/id/8.html', 0, 1, '', '0', 0),
(9, 'PES新闻', 'news', 2, 3, '9', 'PES新闻', '', '', '/Dynamic/news/index.html', 0, 1, '', '0', 0),
(10, 'PES公告', 'Announcement', 2, 3, '10', 'PES公告', '', '', '/Dynamic/Announcement/index.html', 0, 1, '', '0', 0),
(11, '友情链接', 'link', 1, 1, '11', '', '', '', '/Page/view/id/11.html', 0, 0, '', '0', 0),
(12, 'PESCMS特点', 'Feature', -1, 0, '12,13,14,15', 'PESCMS特点,PESCMS优点,PESCMS长处,PESCMS特色', '', '', '/Feature/index.html', 0, 0, '', '0', 99),
(13, '安全', 'Security', 1, 12, '13', 'PESCMS安全,CMS安全,php注入漏洞', '', '', '/Feature/Security/index.html', 0, 1, '', '0', 0),
(14, '易用', 'Easy to use', 1, 12, '14', '容易开发的CMS,易上手的CMS,好维护的CMS', '', '', '/Feature/Easy to use/index.html', 0, 1, '', '0', 0),
(15, '免费', 'Free', 1, 12, '15', '开源的CMS,真正开源的CMS,免费的CMS,没版权的CMS', '', '', '/Feature/Free/index.html', 0, 1, '', '0', 0),
(16, '官方博客', 'Blog', -1, 0, '', '', '', '', 'http://blog.pescms.com/', 1, 0, '', '0', 5),
(17, 'blog', 'blog', 5, 0, '17,18,19,20,21,22,23,40', '', '', '', '/Blog/list/id/17.html', 0, 0, '', '0', 10),
(18, '日常动态', 'Day Action', 5, 17, '18', 'PES日常动态', 'PES日常动态', '', '/Blog/list/id/18.html', 0, 0, '', '0', 0),
(19, 'PHP', 'PHP', 5, 17, '19', '', '', '', '/Blog-list-id-19', 0, 0, '', '0', 0),
(20, 'JavaScript', 'JavaScript', 5, 17, '20', '', '', '', '/Blog-list-id-20', 0, 0, '', '0', 0),
(21, '关于本博', 'About_blog', 1, 17, '21', '', '', '', '/Page-view-id-21', 0, 0, '', '0', 99),
(22, 'linux', 'linux', 5, 17, '22', '', '', '', '/Blog-list-id-22', 0, 0, '', '0', 0),
(23, 'Mysql', 'Mysql', 5, 17, '23', '', '', '', '/Blog-list-id-23', 0, 0, '', '0', 0),
(26, '前言', 'Foreword', 1, 4, '26', '', '', '', '/Page/view/id/26.html', 1, 0, '', '0', 0),
(27, '系统入门', 'Base', 9, 4, '27', '', '', '', '/Doc/list/id/27.html', 1, 0, '', '0', 10),
(29, '主题开发', 'Theme', 9, 4, '29', '', '', '', '/Doc/list/id/29.html', 1, 0, '', '0', 20),
(30, '数据库操作', 'DbAction', 9, 4, '30', '', '数据库操作', '', '/Doc/list/id/30.html', 1, 0, '', '0', 30),
(31, '控制器', 'Controller', 9, 4, '31', '', '', '', '/Doc/list/id/31.html', 1, 0, '', '0', 40),
(32, '模型', 'Model', 9, 4, '32', '', '', '', '/Doc/list/id/32.html', 1, 0, '', '0', 50),
(33, '扩展库', 'Expand', 9, 4, '33', '', '', '', '/Doc/list/id/33.html', 1, 0, '', '0', 60),
(34, '缓存', 'Cache', 9, 4, '34', '', '', '', '/Doc/list/id/34.html', 1, 0, '', '0', 70),
(35, '组件', 'Package', 9, 4, '35', '', '', '', '/Doc/list/id/35.html', 1, 0, '', '0', 80),
(36, '后台功能', 'Manage', 9, 4, '36', '', '', '', '/Doc/list/id/36.html', 1, 0, '', '0', 90),
(37, 'PES框架核心', 'Core', 9, 4, '37', '', 'PES框架核心', '', '/Doc/list/id/37.html', 1, 0, '', '0', 100),
(38, 'PESCMS二次开发', 'Development', 9, 4, '38', '', '', '', '/Doc/list/id/38.html', 1, 0, '', '0', 110),
(39, '常见问题', 'question', 9, 4, '39', '', '', '', '/Doc/list/id/39.html', 1, 0, '', '0', 120),
(40, '游记', 'TravelNote', 5, 17, '40', '', '', '', '/Blog/list/id/40.html', 1, 0, '', '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `pes_contact`
--

CREATE TABLE IF NOT EXISTS `pes_contact` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_listsort` int(11) NOT NULL,
  `contact_status` tinyint(4) NOT NULL,
  `contact_lang` tinyint(4) NOT NULL,
  `contact_url` varchar(255) NOT NULL,
  `contact_createtime` int(11) NOT NULL,
  `contact_title` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_mail` varchar(255) NOT NULL,
  `contact_content` text NOT NULL,
  `contact_from` varchar(255) NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `pes_contact`
--

INSERT INTO `pes_contact` (`contact_id`, `contact_listsort`, `contact_status`, `contact_lang`, `contact_url`, `contact_createtime`, `contact_title`, `contact_name`, `contact_mail`, `contact_content`, `contact_from`) VALUES
(2, 0, 0, 0, '', 0, '反馈信息', '肉丝', 'oschina@net.com', '招男女公关，情感陪护，月入过万不是梦', '肉丝网');

-- --------------------------------------------------------

--
-- 表的结构 `pes_cookie`
--

CREATE TABLE IF NOT EXISTS `pes_cookie` (
  `cookie_id` int(11) NOT NULL AUTO_INCREMENT,
  `cookie` varchar(255) NOT NULL,
  `uid` int(11) NOT NULL,
  `createtime` int(11) NOT NULL,
  PRIMARY KEY (`cookie_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `pes_doc`
--

CREATE TABLE IF NOT EXISTS `pes_doc` (
  `doc_id` int(11) NOT NULL AUTO_INCREMENT,
  `doc_listsort` int(11) NOT NULL,
  `doc_status` tinyint(4) NOT NULL,
  `doc_lang` tinyint(4) NOT NULL,
  `doc_url` varchar(255) NOT NULL,
  `doc_createtime` int(11) NOT NULL,
  `doc_catid` int(11) NOT NULL,
  `doc_title` varchar(255) NOT NULL,
  `doc_keyword` varchar(255) NOT NULL,
  `doc_description` text NOT NULL,
  `doc_content` text NOT NULL,
  PRIMARY KEY (`doc_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `pes_doc`
--

INSERT INTO `pes_doc` (`doc_id`, `doc_listsort`, `doc_status`, `doc_lang`, `doc_url`, `doc_createtime`, `doc_catid`, `doc_title`, `doc_keyword`, `doc_description`, `doc_content`) VALUES
(1, 0, 1, 0, '/Doc/view/id/1.html', 1420118100, 29, '主题目录结构', '', '', '&lt;p&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;开发PESCMS主题，需要先了解一下程序设定的主题目录结构。在详细的说明之前，我需要优先强调的是：在实际开发中，不同的用户有不同的需求，因此本文未必适用所有用户群体！所以我们需要学习的是PESCMS对于主题设定的思想而非固定的操作过程。&lt;/span&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;white-space: normal;color:#00b050&quot;&gt;主题目录结构的核心思想&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCMS主题目录结构的核心主要围绕后台的模型设置。即网站设置多少个的前台模型，主题目录就应该存在 前台模型名称 X 2 个模板文件。&lt;br/&gt;下面我们用示例说明：&lt;br/&gt;现有一个名叫 Test的模型，那么主题目录下必须拥有两个以Test命名的模板文件：Test_list.php / Test_view.php 。第一个为Test模型的列表模板，第二个为Test模型的详细内容模板。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;PESCMS官方模板结构&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;&lt;img src=&quot;/upload/20150103/54a6d2aca8d0f.png&quot; _src=&quot;/upload/20150103/54a6d2aca8d0f.png&quot;/&gt;&lt;/p&gt;&lt;p&gt;根据上图，可知设计一款适用PESCMS程序的主题模板，存在5个必要文件。下面来介绍5个必要文件的作用。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;候补模板&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;之前介绍了PESCMS主题的核心思想是围绕后台模型设置，那么候补模板相对来说就是缺省值的意思。我们继续以例子来说明：&lt;br/&gt;现在后台添加了一个Test模型。&lt;br/&gt;依据主题核心思想，主题应该存在Test_list.php / Test_view.php 两个文件。若上述两个文件不存在，程序将会调用候补模板（Content_list.php / Content_view.php）。最后若候补模板也不存在，程序将抛出一个错误提示框。&lt;br/&gt;&lt;span style=&quot;color:#ffc000&quot;&gt;设计提示：候补模板通常是设计成通用式模板。&lt;/span&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;首页主题模板&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;字面已经表明了用处，用户访问 www.pescms.com首先看到的模板。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;单页主题模板&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;单页主题模板比较独特，只拥有一个模板文件：Page_view.php。&lt;br/&gt;什么是单页？单页即直接打开的是详细页，没有列表页的模型。&lt;br/&gt;单页通常用于做 ‘关于我们’，‘联系我们’之类的内容展示页面。而且单页是与分类直接挂钩的，可以从导航栏（分类）中直接获取访问单页的URL。而普通的模型，从导航栏（分类）访问的是列表页，最后从列表页中进入详细页。&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color:#ffc000&quot;&gt;设计提示：单页也可以做成列表页，但通常我们是不推荐这样做的。&lt;/span&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;搜索列表模板&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;网站内容多了，网站需要提供搜索入口给用户，相信这一点大家应该都没异议了。&lt;br/&gt;&lt;span style=&quot;color:#ffc000&quot;&gt;设计提示：其实搜索列表模板非必须的。但为了用户体验，我们还是将他列为必须的模板。&lt;/span&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;404模板&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;404模板不是必须的，主要用在当访客访问了不存在的页面时，程序告知用户该信息不存在的模板页。如果主题模板没有404.php模板文件，程序会调用PESCMS默认的404页面。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;公用模板&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;写程序就必须避免重复的出现（公用原则：重复出现三次以上），因此学会制作公用模板非常重要。&lt;br/&gt;对于一个网站，有两部分以上部件是属于重复出现的代码：页眉，左右侧栏，页脚。&lt;br/&gt;对于上述重复的功能代码，我们通常会将他封装成header.php , sidebar.php （left_sidebar.php, right_sidebar） , footer.php。&lt;br/&gt;PESCMS对于页眉页脚提供了两种调用方法：&lt;br/&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;页眉调用方法: &amp;lt;?php $this-&amp;gt;header(&amp;#39;页眉名称&amp;#39;); ?&amp;gt;&lt;/pre&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;页脚调用方法: &amp;lt;?php $this-&amp;gt;header(&amp;#39;页脚名称&amp;#39;); ?&amp;gt;&lt;/pre&gt;&lt;p&gt;注意：上述两个方法中，如果不填写页眉/页脚（&lt;span style=&quot;color:#ff0000&quot;&gt;不带.php后缀&lt;/span&gt;）名称，方法默认调用 header.php / footer.php 模板。&lt;/p&gt;&lt;p&gt;如果调用的为其他的公用模板，那么需要使用php的加载函数: &lt;a href=&quot;http://php.net/manual/zh/function.include.php&quot; target=&quot;_blank&quot;&gt;include&lt;/a&gt; / &lt;a href=&quot;http://php.net/manual/zh/function.require.php&quot; target=&quot;_blank&quot;&gt;require&lt;/a&gt; 。&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;侧栏调用：&amp;lt;?php include &amp;#39;sidebar.php&amp;#39;;?&amp;gt;&lt;/pre&gt;&lt;p&gt;&lt;span style=&quot;color:#ffc000&quot;&gt;设计提示：本节讲解的都是通用式代码，您可能需要掌握一点PHP技巧。&lt;/span&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;补充说明&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;若您打算将主题发布给其他人使用，我建议你在主题添加LICENSE.txt、README.md、screenshot.png三个文件。&lt;br/&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;LICENSE.txt：主题的版权协议&lt;br/&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;README.md：主题的说明，具体参数如下&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:xml;toolbar:false&quot;&gt;title:PESCMS #主题名称\r\ndescription:PES团队制作的精品主题之一 #主题描述\r\nauthor:lazyphp #作者\r\nversion:1.0 #版本号\r\nlicense:GNU #所用的协议\r\nurl:http://www.pescms.com #作者网站&lt;/pre&gt;&lt;p&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;screenshot.png: 主题的截图&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;'),
(2, 0, 1, 0, '/Doc/view/id/2.html', 1420267260, 29, '模板变量', '', '', '&lt;p&gt;PESCMS对于主题开发，提供了全局变量和模板的专属变量。合理使用全局变量和模板专属变量，可以轻松定制出您所需要的模板。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;全局变量&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;全局变量的&lt;span style=&quot;white-space: normal;&quot;&gt;具体实现原理可以参考 \\App\\Home\\Common 源码。PESCMS主要定义了以下名称变量：&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php \r\n$siteurl #网站的URL地址\r\n\r\n$sitetitle  #网站名称\r\n\r\n$seo_keyword  #网站页面缺省值关键词\r\n\r\n$seo_description  #网站页面缺省值描述\r\n\r\n$logo  #网站LOGO\r\n\r\n$sitestatus  #网站状态 1|开启 0|关闭\r\n\r\n$footerCode #页脚JS代码； 通常用于存放统计代码\r\n\r\n$closeReason #网站关闭原因说明\r\n\r\n$theme  #当前模板的路径。变量输出将是 http://www.pescms.com/Theme/Home/PESCMS/\r\n\r\n$catid  #当前页面的分类ID 。\r\n\r\n$cat #当前页面分类信息，调试出来的数组内容如下（实际结果可能与文档有差异，请以实际调试结果为准）:\r\nArray\r\n(\r\n    [category_id] =&amp;gt; 29\r\n    [category_name] =&amp;gt; 主题开发\r\n    [category_aliases] =&amp;gt; Theme\r\n    [model_id] =&amp;gt; 9\r\n    [category_parent] =&amp;gt; 4\r\n    [category_child] =&amp;gt; 29\r\n    [category_keyword] =&amp;gt; \r\n    [category_description] =&amp;gt; \r\n    [category_thumb] =&amp;gt; \r\n    [category_url] =&amp;gt; /Doc/list/id/29.html\r\n    [category_nav] =&amp;gt; 1\r\n    [category_html] =&amp;gt; 0\r\n    [category_theme] =&amp;gt; \r\n    [category_lang] =&amp;gt; 0\r\n    [category_listsort] =&amp;gt; 0\r\n)\r\n\r\n$categorys #输出网站整个分类表的信息，内容为二维数组。每个数组的键值为该分类的ID。示例结果如下：\r\nArray\r\n(\r\n    [6] =&amp;gt; Array\r\n        (\r\n            [category_id] =&amp;gt; 6\r\n            [category_name] =&amp;gt; 程序下载\r\n            [category_aliases] =&amp;gt; Program\r\n            [model_id] =&amp;gt; 3\r\n            [category_parent] =&amp;gt; 2\r\n            [category_child] =&amp;gt; 6\r\n            [category_keyword] =&amp;gt; 下载PESCMS,PESCMS下载地址\r\n            [category_description] =&amp;gt; \r\n            [category_thumb] =&amp;gt; \r\n            [category_url] =&amp;gt; /Download/Program/index.html\r\n            [category_nav] =&amp;gt; 0\r\n            [category_html] =&amp;gt; 1\r\n            [category_theme] =&amp;gt; \r\n            [category_lang] =&amp;gt; 0\r\n            [category_listsort] =&amp;gt; 0\r\n            [model_name] =&amp;gt; Download\r\n            [lang_key] =&amp;gt; DOWNLOAD_LIST\r\n        )\r\n..其他分类数组...\r\n)&lt;/pre&gt;&lt;p&gt;除了上述全局变量，还有一个 $system变量。该变量是通过后台 - 高级设置 - 系统设置 - 扩展变量 进行设置。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/upload/20150103/54a79abcb5e8c.png&quot; _src=&quot;/upload/20150103/54a79abcb5e8c.png&quot; style=&quot;width: 719px; height: 171px;&quot;/&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;$system #扩展变量，依据后台设置，输出对应的变量。效果如下:\r\nArray\r\n(\r\n    [copyright] =&amp;gt; 版权所有©2013-2014 PESCMS开发团队\r\n)&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;列表页变量 - 模板专属变量&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;$list  #列表内容二维数组\r\n$page  #输出列表分页功能&lt;/pre&gt;&lt;p&gt;$list 变量用 for, foreach, while语法结构进行输出，具体请参考PHP官网或者PESCMS官方主题的示例说明。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;详细页变量 - 模板专属变量&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;详细页的变量主要依据当前模型表的字段名称来决定可以调用哪些变量。如PESCMS默认存在的文章模型 -&amp;nbsp;Article&lt;br/&gt;我们通过后台 - 模型管理 - 模型列表 - 文章列表 - 字段管理 查找Article模型 的字段名称。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/upload/20150103/54a7a6487fd8c.png&quot; _src=&quot;/upload/20150103/54a7a6487fd8c.png&quot; style=&quot;width: 874px; height: 479px;&quot;/&gt;&lt;/p&gt;&lt;p&gt;从上图，可以知道Article模型至少存在11个字段变量可供详细页调用。而详细页的字段变量以 $模型名称_字段名称 命名。如我想在模板调用Article模型的内容字段，那么模板我就应该这样编写：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?= $article_content;?&amp;gt;&lt;/pre&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;'),
(3, 0, 1, 0, '/Doc/view/id/3.html', 1420288620, 29, '模板常用方法', '', '', '&lt;p&gt;PESCMS模板内置了不少常用的方法，基本涵盖了大部分的需求。若常用的方法不能满足您的需求，PESCMS为您提供了非常便捷的扩展方法。当然了，此属于高级操作方法，本节不作详细说明。&lt;br/&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;标签库&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCMS拥有一套非常合适前端使用的标签库，标签库位于：\\Expand\\Label。在前端模板文件中，使用方法如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $label-&amp;gt;方法(); ?&amp;gt;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;url方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;url($controller, $param, $filterHtmlSuffix)\r\n【方法说明】生成统一的URL链接。网站的URL链接请使用本方法生成，不使用本方法生成的URL地址，后台高级设置将无法对这些URL进行控制。\r\n\r\n【必填】参数一：控制器的GMA值。如 的单页模型：Page-view, 文章模型（列表）： Article-list\r\n【选填|提交必须为数组】参数二：URL中非控制器外的值。如 ID为1 的某页面： array( &amp;#39;id&amp;#39; =&amp;gt; &amp;#39;1&amp;#39; ) 。\r\n【选填】参数三：是否强制过滤HTML后缀 | 由于ajax GET请求中，若不过滤HTML，将会引起404的问题 。如果您用于JS的ajax，那么请将本参数设置为 TRUE。默认值为 FALSE\r\n\r\n【完整示例一】ID值为6的单页模型：&amp;lt;?=url(&amp;#39;Page-view&amp;#39;, array(&amp;#39;id&amp;#39; =&amp;gt; &amp;#39;6&amp;#39;)); ?&amp;gt;\r\n\r\n【完整示例二】PID值为2，CATID值为71的 产品模型（列表）： &amp;lt;?=url(&amp;#39;Product-list&amp;#39;, array(&amp;#39;pid&amp;#39; =&amp;gt; &amp;#39;2&amp;#39;, &amp;#39;catid&amp;#39; =&amp;gt; &amp;#39;71&amp;#39;)); ?&amp;gt;\r\n\r\n【完整示例三】ajax获取某个控制器的方法： &amp;lt;?=url(&amp;#39;Body-contentList&amp;#39;, array(), TRUE); ?&amp;gt;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;token方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;token()\r\n【方法说明】生成用于表单验证的令牌值。\r\n\r\n【完整示例】&amp;lt;?= $label-&amp;gt;token(); ?&amp;gt; 输出字符串&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;findGroup方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;findGroup($groupID)\r\n【方法说明】依据提交的用户组ID，查找该组的信息\r\n\r\n【必填】参数一：用户组ID\r\n\r\n【完整示例】= &amp;lt;?= $label-&amp;gt;findGroup(&amp;#39;1&amp;#39;) ;?&amp;gt; 成功则返回一个存放用户组信息的一维数组。&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;getCate方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;getCate($category_parent, $category_nav)\r\n【方法说明】依据提交的分类父类ID，获取其子类。\r\n\r\n【必填】参数一：分类父类ID | 本方法主要依据提供父类ID获取下一级的子类分类信息\r\n【选填】参数二：分类是否为导航\r\n\r\n【完整示例】输出网站的导航栏菜单：\r\n&amp;lt;?php foreach ($label-&amp;gt;getCate(&amp;#39;0&amp;#39;, TRUE) as $key =&amp;gt; $value) : ?&amp;gt; \r\n    &amp;lt;a href=&amp;quot;&amp;lt;?= $value[&amp;#39;category_url&amp;#39;]; ?&amp;gt;&amp;quot;&amp;gt;&amp;lt;li class=&amp;quot;&amp;lt;?php if ($catid == $value[&amp;#39;category_id&amp;#39;] || $cat[&amp;#39;category_parent&amp;#39;] == $value[&amp;#39;category_id&amp;#39;]): ?&amp;gt;nav_on&amp;lt;?php endif; ?&amp;gt;&amp;quot;&amp;gt;&amp;lt;?= $value[&amp;#39;category_name&amp;#39;]; ?&amp;gt;&amp;lt;/li&amp;gt;&amp;lt;/a&amp;gt; \r\n&amp;lt;?php endforeach; ?&amp;gt;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;page方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;page($id)\r\n【方法说明】依据ID获取单页内容\r\n\r\n【必填】参数一：单页ID\r\n\r\n【完整示例】= &amp;lt;?= $label-&amp;gt;page(&amp;#39;1&amp;#39;) ;?&amp;gt; 成功则返回一个存放该单页ID信息的一维数组。&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;slideShow方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;slideShow($slideshow_type_id, $limit)\r\n【方法说明】依据提交的幻灯片类型，输出对应的图片列表\r\n\r\n【必填】参数一：幻灯片类型ID\r\n【选填】参数二：输出条数 | 默认是 99条\r\n\r\n【完整示例】= &amp;lt;?= $label-&amp;gt;slideShow(&amp;#39;1&amp;#39;, &amp;#39;5&amp;#39;) ;?&amp;gt; 查找幻灯片类型为1的图片列表，并且只输出5条。成功则返回一个图片集的二维数组&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;listContent方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;listContent($table, $param, $where, $order, $limit)\r\n【方法说明】依据提交过来的表名，筛选提交获取内容。本方法为动态查询，若需要进行条件筛选时，请对对应的条件筛选参数进行预编译！否则将对网站产生注入的漏洞！\r\n\r\n【必填】参数一：内容表名\r\n【选填|提交的必须为数组】参数二：PDO预编译绑定的值\r\n【选填】参数三：查找条件\r\n【选填】参数四：排序\r\n【选填】参数五：输出限制\r\n\r\n【完整示例】&amp;lt;?php $columnList = $label-&amp;gt;listContent(&amp;quot;doc&amp;quot;, array(&amp;#39;doc_catid&amp;#39; =&amp;gt; $value[&amp;#39;category_id&amp;#39;]), &amp;#39; doc_catid = :doc_catid &amp;#39;, &amp;#39;doc_listsort asc, doc_id asc&amp;#39;); ?&amp;gt;\r\n本方法执行时，生成以下的SQL语句：SELECT * FROM pes_doc WHERE category_id = :doc_catid ORDER BY doc_listsort asc, doc_id asc\r\n当执行成功后，将返回一个存放对应数据的二维数组&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;strCut方法&lt;/span&gt;&lt;/h3&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;strCut($sourcestr, $cutlength, $suffix)\r\n【方法说明】对字符串进行长度截断\r\n\r\n【必填】参数一：需要截断的字符串\r\n【必填】参数二：截断的长度\r\n【选填】参数三：截断字符尾显示的信息 | 默认缺省值为 &amp;#39;...&amp;#39;\r\n\r\n【完整示例】一个长度为800的字符串，截断为100. &amp;lt;?= $label-&amp;gt;strCut($str, &amp;#39;100&amp;#39;); ?&amp;gt;&lt;/pre&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;'),
(4, 0, 1, 0, '/Doc/view/id/4.html', 1420296420, 31, 'RESTful', '', '', '&lt;p&gt;PESCMS 从2.0版开始使用了RESTful风格，URL地址更加简洁，控制器的功能布局更加直观。通过本节，您将可以快速掌握PESCMS对于RESTful的设计思想。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;GPPD&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCMS在RESTful风格上，拥有4个状态：GET, POST, PUT, DELETE。简称：GPPD。&lt;br/&gt;GET：用于读取数据，输出数据&lt;br/&gt;POST：用于插入数据&lt;br/&gt;PUT：用于更新数据&lt;br/&gt;DELETE：用于删除数据&lt;br/&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;设计规范&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;在日常的开发过程中，请遵照4个状态进行设置对应的访问控制器。设置对应的状态控制器，可以节省方法定位的时间和细化流程。下面列出PESCMS的开发命名规则（文档示例假定控制器存放于 /App/Home/ &amp;nbsp;目录下）：&lt;br/&gt;如获取产品列表/信息，编辑产品，搜索产品（发起GET状态），控制器&lt;span style=&quot;white-space: normal;&quot;&gt;访问地址&lt;/span&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;则为&lt;/span&gt;： /Home/Product/index 、/Home/Product/action、 /Home/&lt;span style=&quot;white-space: normal;&quot;&gt;Product/&lt;/span&gt;listAction 或者 /Home/Product/searchAction. &amp;nbsp; 具体实现代码如下:&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;文件 /App/Home/GET/Product.class.php\r\n&amp;lt;?php\r\nnamespace App\\Home\\GET\r\nclass Product extends \\Core\\Controller\\Controller {\r\n\r\n    /**\r\n     * index方法可以用于列表，或者其他信息\r\n     */\r\n    public function index(){\r\n        /**\r\n         * 具体列表的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * listAction方法可以用于列表，或者其他信息\r\n     */\r\n    public function listAction(){\r\n        /**\r\n         * 具体列表的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * action 通常用于 添加或者编辑\r\n     */\r\n    public function action(){\r\n        /**\r\n         * 具体添加/编辑的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * searchAction 通常用于搜索功能\r\n     */\r\n    public function searchAction(){\r\n        /**\r\n         * 具体添加/编辑的实现代码\r\n         */\r\n    }\r\n    \r\n}&lt;/pre&gt;&lt;p&gt;提交添加新产品请求（&lt;span style=&quot;white-space: normal;&quot;&gt;发起&lt;/span&gt;POST状态），控制器&lt;span style=&quot;white-space: normal;&quot;&gt;访问地址&lt;/span&gt;则为: /Home/Product/action。具体实现代码如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;文件 /App/Home/POST/Product.class.php\r\n&amp;lt;?php\r\nnamespace App\\Home\\POST\r\nclass Product extends \\Core\\Controller\\Controller {\r\n\r\n    /**\r\n     * action 添加新产品信息\r\n     */\r\n    public function action(){\r\n        /**\r\n         * 具体添加/编辑的实现代码\r\n         */\r\n    }\r\n\r\n}&lt;/pre&gt;&lt;p&gt;提交更新产品的请求（&lt;span style=&quot;white-space: normal;&quot;&gt;发起&lt;/span&gt;PUT状态），控制器&lt;span style=&quot;white-space: normal;&quot;&gt;访问地址&lt;/span&gt;则为: /Home/Product/action。具体实现代码如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;文件 /App/Home/PUT/Product.class.php\r\n&amp;lt;?php\r\nnamespace App\\Home\\PUT\r\nclass Product extends \\Core\\Controller\\Controller {\r\n\r\n    /**\r\n     * action 更新指定产品信息\r\n     */\r\n    public function action(){\r\n        /**\r\n         * 具体添加/编辑的实现代码\r\n         */\r\n    }\r\n\r\n}&lt;/pre&gt;&lt;p&gt;提交删除产品的请求（&lt;span style=&quot;white-space: normal;&quot;&gt;发起&lt;/span&gt;DELETE状态），控制器访问地址则为：/Home/Product/action。具体实现代码如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;文件 /App/Home/DELETE/Product.class.php\r\n&amp;lt;?php\r\nnamespace App\\Home\\DELETE\r\nclass Product extends \\Core\\Controller\\Controller {\r\n\r\n    /**\r\n     * action 删除指定产品\r\n     */\r\n    public function action(){\r\n        /**\r\n         * 具体添加/编辑的实现代码\r\n         */\r\n    }\r\n\r\n}&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;新旧对比&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;在了解完PESCMS 2.X的&lt;span style=&quot;white-space: normal;&quot;&gt;RESTful设计风格，我相信大家肯定有一个疑问：PESCMS新版做得这么零散做甚？&lt;br/&gt;我相信，作为一名及格的开发者，必然经常为变量，方法命名而感到头疼。该现象在PESCMS 1.X版本开发过程中遇到不少。下面以PESCMS 1.X旧版的示例说明：&lt;br/&gt;依旧是产品的增删查改&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;文件 /App/Home/Product.class.php\r\n&amp;lt;?php\r\nnamespace App\\Home\r\nclass Product extends \\Core\\Controller\\Controller {\r\n\r\n    /**\r\n     * index 该方法可能用于列表，或者产品分类页\r\n     */\r\n    public function index(){\r\n        /**\r\n         * 具体的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * _list 产品列表\r\n     */\r\n    public function _list(){\r\n        /**\r\n         * 具体产品列表的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * add 添加新产品\r\n     */\r\n    public function add(){\r\n        /**\r\n         * 具体添加的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * insert 处理插入新产品的请求\r\n     */\r\n    public function insert(){\r\n        /**\r\n         * 具体处理插入新产品的请求的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * edit 编辑指定产品\r\n     */\r\n    public function edit(){\r\n        /**\r\n         * 具体编辑的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * update 处理更新产品的请求\r\n     */\r\n    public function update(){\r\n        /**\r\n         * 具体处理更新产品的请求的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * delete 删除指定产品\r\n     */\r\n    public function delete(){\r\n        /**\r\n         * 具体删除的实现代码\r\n         */\r\n    }\r\n    \r\n    /**\r\n     * search 搜索产品\r\n     */\r\n    public function search(){\r\n        /**\r\n         * 具体搜索的实现代码\r\n         */\r\n    }\r\n\r\n}&lt;/pre&gt;&lt;p&gt;上述的业务逻辑还算普通，但当业务量复杂了，上面的写法将容易出现命名困难的事情。而且各个状态请求均在一个控制器文件里面，定位代码比较耗时。&lt;br/&gt;切换到PESCMS 2.X版本后，具体的设计风格如下（本风格仅为PESCMS设计风格）：&lt;br/&gt;默认中,GET中的 index, xxxList, xxxAction, xxxSearch 为列表功能.&lt;br/&gt;其余三个方法Action,或xxxAction&lt;br/&gt;注：&lt;span style=&quot;color:#ff0000&quot;&gt;xxx 为行为的名称&lt;/span&gt;。&lt;br/&gt;如，菜单功能中的列表(GET)可为:index, menuList, menuSearch；&lt;br/&gt;插入更新删除则: menuAction&lt;br/&gt;通过RESTful的风格，我们统一了部分控制器请求的URL和节省了珍贵的命名。在新人加入项目时，也可能通过请求初步定位出控制器的范围，岂不快哉？&lt;/p&gt;'),
(5, 0, 1, 0, '/Doc/view/id/5.html', 1420644900, 30, 'PDO', '', '', '&lt;p&gt;作为一款新生的程序，PESCMS没有历史的包袱。因此PESCMS在数据库链接方式中选用PHP官方未来唯一指定的PDO驱动。详情可以参考PHP官网：&lt;a href=&quot;http://php.net/manual/zh/intro.pdo.php&quot; target=&quot;_blank&quot;&gt;http://php.net/manual/zh/intro.pdo.php&lt;/a&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color:#ff0000&quot;&gt;&lt;strong&gt;再优秀，更安全的防护措施永远抵不过猪一样的队友。&lt;/strong&gt;&lt;/span&gt;尽管PDO的出现，让广大PHPer结束多年来的SQL拼接写法。就目前的行业情景，仍旧有不少公司的PHP程序运行着古老的写法。除开上述的时代背景，换作今天国内还有一大批新生的PHPer甚少了解PDO。&lt;/p&gt;&lt;p&gt;在此，PESCMS官方提醒广大使用者：&lt;strong&gt;&lt;span style=&quot;color:#00b0f0&quot;&gt;若想以本程序为蓝本，构建相应的系统，请认真阅读本章！&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;'),
(6, 0, 1, 0, '/Doc/view/id/6.html', 1421155380, 30, '增删查改', '', '', '&lt;p&gt;对PDO有初步认识后，我们来快速认识PESCMS的增删查改方法。需要注意的时，PESCMS对PDO封装了不少常用方法，非常方便开发者使用。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;链接表&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;讲解增删查改方法前，先浅释PESCMS是如何链接数据库的。由于设计上的关系，控制器与模型在链接数据库上存在一点差异。&lt;/p&gt;&lt;p&gt;在控制器上，需要声明一个调用指定数据库表的方法如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;tableName&amp;#39;) //仅为示例，不能正常执行的&lt;/pre&gt;&lt;p&gt;在模型上，需要声明一个调用指定数据库表的方法如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php self::db(&amp;#39;tableName&amp;#39;) //仅为示例，不能正常执行的&lt;/pre&gt;&lt;p&gt;上述两个方法中，都告诉程序我现在首要调用的表为tableName。同时需要注意的时，&lt;span style=&quot;color:#ff0000&quot;&gt;本方法会读取配置文件中DB_PREFIX的配置，补上表前缀，即最终结果为： pes_tableName&lt;/span&gt;&lt;/p&gt;&lt;p&gt;可能会有人问，如果我要联表，该怎样操作呢？这个问题，我们在这里暂不讨论，留给后面的章节解答。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;表前缀&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;考虑到程序的后续迁移，PESCMS为开发者编写SQL语句方法上提供了表前缀的调用方法。具体如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\n//控制器下如下写法调用\r\n$this-&amp;gt;prefix ; //输出 pes_\r\n\r\n//模型中如下写法调用\r\nself:$prefix ; //输出 pes_\r\n\r\n//在控制器中的原生SQL写法实体\r\n$sql = &amp;quot;SELECT * FROM {$this-&amp;gt;prefix}user&amp;quot;; //生成：SELECT * FROM pes_user&lt;/pre&gt;&lt;p&gt;PESCMS在此温馨提示：项目复杂的时候，按照上述做法时，可以避免日后更换表前缀引起SQL语句修改带来的烦恼。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;查找&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;查找方面，PESCMS为开发者提供了4个方法。分别为：find()， select()，&amp;nbsp;fetch()，&amp;nbsp;getAll()。前两个属于连贯操作方式，后两个为原生SQL方式。本小节主要以前两个方法解说。&lt;/p&gt;&lt;p&gt;我们要获取UID为1的用户，用find()方法（控制器上执行）&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;where(&amp;quot; user_id = &amp;#39;1&amp;#39; &amp;quot;)-&amp;gt;find();\r\n//执行生成SQL语句为: SELECT * FROM pes_user WHERE user_id = &amp;#39;1&amp;#39; LIMIT 1;\r\n//返回结果为一个一维数组:\r\nArray\r\n(\r\n    [user_id] =&amp;gt; 1\r\n    [user_name] =&amp;gt; 测试用户\r\n    [user_passwd] =&amp;gt; 12fgu812daf12\r\n)&lt;/pre&gt;&lt;p&gt;现在我们要获取ID少于5的文章ID，用select()方法（控制器上执行）&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;article&amp;#39;)-&amp;gt;where(&amp;quot; article_id &amp;lt; &amp;#39;5&amp;#39; &amp;quot;)-&amp;gt;select();\r\n//执行生成SQL语句为: SELECT * FROM pes_article WHERE article_id &amp;lt; 5;\r\n//返回结果为一个二维数组:\r\nArray\r\n(\r\n    [1] =&amp;gt; Array\r\n        (\r\n            [article_id] =&amp;gt; 1\r\n            [article_title] =&amp;gt; 我是第一篇文章\r\n        )\r\n\r\n    [2] =&amp;gt; Array\r\n        (\r\n            [article_id] =&amp;gt; 3\r\n            [article_title] =&amp;gt; 我是第三篇文章\r\n        )\r\n)&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;增加&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;增加即插入，PESCMS为开发者提供了非常简单明了的方法进行数据插入：insert() 。insert 方法主要通过数组进行插入动作，并且通过数组形式，插入的语句都确保了不会产生注入！&lt;/p&gt;&lt;p&gt;现在我们要发表一篇名为《PESCMS是一款很棒的开源程序！》 ；作者为：PESCMS；发布日期为：2015-1-13。 具体的代码如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\n$data = array( &amp;#39;article_title&amp;#39; =&amp;gt; &amp;quot;PESCMS是一款很棒的开源程序！&amp;quot;, &amp;#39;article_author&amp;#39; =&amp;gt; &amp;#39;PESCMS&amp;#39;, &amp;#39;article_addtime&amp;#39; =&amp;gt; &amp;#39;2015-1-13&amp;#39;); //插入的数据数组，键值部分为 插入表的字段名称。\r\n\r\n$this-&amp;gt;db(&amp;#39;article&amp;#39;)-&amp;gt;insert($data); //执行插入动作，成功返回最后插入的自增ID 。失败返回false\r\n//生成的SQL语句：\r\n//INSERT INTO pes_article (`article_title`, `article_author`, `article_addtime`) VALUES (&amp;#39;PESCMS是一款很棒的开源程序！&amp;#39;, &amp;#39;PESCMS&amp;#39;, &amp;#39;2015-1-13&amp;#39;);&lt;/pre&gt;&lt;p&gt;通过insert()方法，插入的数组必须为一维数组，且数组的每一个键值为插入数据表的字段名称，不能有错！&lt;br/&gt;上述的语句执行成功后，将返回最后插入的自增ID。若需要获取最后插入的自增ID值，可以使用$lastInsertId变量，具体代码如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php echo $this-&amp;gt;lastInsertId; //输出最后一次执行inser()方法的自增ID&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;更改&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;内容需要进行更新，PESCMS提供了update()方法。update()也是通过数组形式进行，不过需要注意的时，&lt;span style=&quot;color:#ff0000&quot;&gt;update()方法需要用到一个二维数组形式进行更新。且本节必须认真阅读理解，否则你很容易掉坑里面！&lt;/span&gt;&lt;br/&gt;现在我们需要将用户组ID为2且用户ID大于200的用户调整为用户组ID为3。具体的代码如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\n$data = array(\r\n              &amp;#39;group_id&amp;#39; =&amp;gt; &amp;#39;3&amp;#39; //更新字段的值，即将符合条件的用户的用户组调整ID为3.\r\n              &amp;#39;noset&amp;#39; =&amp;gt; array( //noset数组表示本数组内的任何数据都不参与更新行为\r\n                               &amp;#39;condition_group_id&amp;#39; =&amp;gt; &amp;#39;2&amp;#39;, //用户组筛选条件\r\n                               &amp;#39;user_id&amp;#39; =&amp;gt; &amp;#39;200&amp;#39; //用户ID筛选条件\r\n                               )\r\n               );\r\n$this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;where(&amp;#39;user_id &amp;gt; :user_id AND group_id = :condition_group_id&amp;#39;)-&amp;gt;update($data);//执行成功将返回影响行数，失败则返回false\r\n//生成的SQL语句：\r\n//UPDATE pes_user SET group_id = 3 WHERE user_id &amp;gt; &amp;#39;200&amp;#39; AND group_id = &amp;#39;2&amp;#39;;&lt;/pre&gt;&lt;p&gt;上述示例中，位于一维数组内的内容，即 &amp;#39;group_id&amp;#39; =&amp;gt; &amp;#39;3&amp;#39; ，该键值表示对应的待更新表字段，内容为更新的内容。而noset旗下的数组，键值为筛选条件绑定的预处理参数，内容为绑定参数的值。这部分必须谨记，否则更新语句将无法正常运作！&lt;br/&gt;为何要做得这么麻烦呢？由于PDO预处理绑定的参数名称只能一个对一个，且为了更新语句的快捷，便引入一个二维数组noset进行封装不参与内容更新的绑定参数！具体的原因，请参看PDO预处理一章。&lt;br/&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;删除&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;删除和查找写法相差不大，PESCMS为开发者提供delete()方法。&lt;br/&gt;现在我们要删除文章ID少于20的文章。具体的代码如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\n$this-&amp;gt;db(&amp;#39;article&amp;#39;)-&amp;gt;where(&amp;quot; article_id &amp;lt; &amp;#39;20&amp;#39; &amp;quot;)-&amp;gt;delete();//执行成功返回影响行数，失败返回false。\r\n//生成的SQL语句:\r\n//DELETE FROM pes_article WHERE article_id &amp;lt; &amp;#39;20&amp;#39;;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;原生SQL&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;除了我们提供的方法外，相信必然有不能满足所有开发者的地方！为此，PESCMS提供了原生SQL的执行方法！第二小节查找中，有两个方法我们没介绍的：fetch() 和getAll() 。现在我们来逐个介绍，依旧用查找小节中的示例说明。&lt;br/&gt;我们要获取UID为1的用户，用&lt;span style=&quot;white-space: normal;&quot;&gt;fetch&lt;/span&gt;()方法&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db()-&amp;gt;fetch(&amp;#39;SELECT * FROM pes_user WHERE user_id = &amp;quot;1&amp;quot; &amp;#39;);//由于是原生SQL写法，表名可以不用声明的\r\n//执行成功返回结果为一个一维数组:\r\nArray\r\n(\r\n    [user_id] =&amp;gt; 1\r\n    [user_name] =&amp;gt; 测试用户\r\n    [user_passwd] =&amp;gt; 12fgu812daf12\r\n)&lt;/pre&gt;&lt;p&gt;现在我们要获取ID少于5的文章ID，用&lt;span style=&quot;white-space: normal;&quot;&gt;getAll&lt;/span&gt;()方法&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db()-&amp;gt;select(&amp;#39;SELECT * FROM pes_article WHERE article_id &amp;lt; &amp;quot;5&amp;quot; &amp;#39;);//由于是原生SQL写法，表名可以不用声明的\r\n//执行成功返回结果为一个二维数组:\r\nArray\r\n(\r\n    [1] =&amp;gt; Array\r\n        (\r\n            [article_id] =&amp;gt; 1\r\n            [article_title] =&amp;gt; 我是第一篇文章\r\n        )\r\n\r\n    [2] =&amp;gt; Array\r\n        (\r\n            [article_id] =&amp;gt; 3\r\n            [article_title] =&amp;gt; 我是第三篇文章\r\n        )\r\n)&lt;/pre&gt;&lt;p&gt;咦，好像只有查找的原生写法啊，要是插入/更新/删除如何操作呀？放心，PESCMS都有提供！为了不至于让&lt;span style=&quot;white-space: normal;&quot;&gt;插入/更新/删除与查找混在一起，我们提供了query()方法！&lt;br/&gt;现在我们要更新用户ID为1的密码。具体实现代码如下：&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\n$this-&amp;gt;db()-&amp;gt;query(&amp;#39;UPDATE pes_user SET user_passwd = &amp;quot;bdjhgf12yu3&amp;quot; WHERE user_id = &amp;quot;2&amp;quot;&amp;#39;)//执行成功，将返回最后插入的自增ID或者影响行数&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;总结&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;本章主要讲解了PESCMS关于增删查改的调用方法，查找可以使用find(),select(),fetch(),getAll()。插入使用insert(),更新使用update(),删除使用delete()。而原生的插入更新删除统一使用query()；&lt;/p&gt;'),
(7, 0, 1, 0, '/Doc/view/id/7.html', 1421284980, 30, 'ORM操作', '', '', '&lt;p&gt;上一章我们学习了PESCMS的增删查改的方法，本章我们来学习PESCMS的ORM操作。PESCMS提供了简单的ORM操作，让编写SQL语句简单化，释放开发者双手，让我们有更多时间陪男/女友。简单之余，我们需要深刻了解ORM操作的适用范畴，面对复杂的项目，我建议还是用原生SQL语句为好。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;field&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;首先我们来学习ORM的字段查找方法。以select方法，输出会员的ID，电子邮箱：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;field(&amp;#39;user_id, user_mail&amp;#39;)-&amp;gt;select();\r\n//生成： SELECT user_id, user_mail FROM pes_user;&lt;/pre&gt;&lt;p&gt;调用field方法，若不填写数据，缺省值为 *，即输出所有字段。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;where&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;现在我们需要获取分类ID为1的文章，依旧是以select方法，同时结果只输出文章标题，文章日期：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;article&amp;#39;)-&amp;gt;field(&amp;#39;article_title, article_createtime&amp;#39;)-&amp;gt;where(&amp;#39;article_catid = 1&amp;#39;)-&amp;gt;select();\r\n//生成： SELECT article_title, article_createtime FROM pes_article WHERE article_catid = 1;&lt;/pre&gt;&lt;p&gt;在这里，我们将刚才学习的两个方法都结合一起使用了。是不是觉得SQL语句编写起来变得简单多了？后面我们保持这个姿势！&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;join&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;网站存放的数据都在不同表上，我们需要将他们聚合起来就需要链表了。&lt;span style=&quot;white-space: normal;&quot;&gt;PESCMS提供了JOIN联表方法。我们继续结合刚才学的方法，这次我们用select()方法获取文章表的所有信息和文章的对应的分类名称，同时只显示文章标题，文章分类名称&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;article AS a&amp;#39;)-&amp;gt;field(&amp;#39;a.article_title, c.category_name&amp;#39;)-&amp;gt;join(&amp;quot;{$this-&amp;gt;prefix}category AS c ON c.category_id = a.article_catid&amp;quot;)-&amp;gt;select();\r\n//生成：SELECT a.article_title, c.category_name FROM pes_article LEFT JOIN pes_category AS c ON c.category_id = a.article_catid ;&lt;/pre&gt;&lt;p&gt;需要注意的是：&lt;strong&gt;&lt;span style=&quot;color:#ff0000&quot;&gt;PESCMS提供的JOIN方法仅支持 左联表（LEFT JOIN）！&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;实际开发过程，我们并不只关联一两个表，可能有多个表。没关系，只需要调用多个join()方法则可。具体方法如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;table&amp;#39;)-&amp;gt;join(&amp;#39;xxx&amp;#39;)-&amp;gt;join(&amp;#39;yyy&amp;#39;)-&amp;gt;join(&amp;#39;zzz&amp;#39;)-&amp;gt;select();\r\n//生成： \r\nSELECT * FROM table\r\nLEFT JOIN xxx ...\r\nLEFT JOIN yyy ...\r\nLEFT JOIN ZZZ ...&lt;/pre&gt;&lt;p&gt;非常方便对吧？一下子我们就将几个表都左联起来了！最后，PESCMS还是要强调一下：复杂的多表查询时，我们建议使用原生SQL写法。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;order&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;我们需要对获取的数据进行排序，使用order()方法：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;order(&amp;#39;user_id desc&amp;#39;)-&amp;gt;select();\r\n//生成:SELECT * FROM pes_user ORDER BY user_id desc;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;group&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;对获取的数据进行分组合并，使用group()方法:&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;group(&amp;#39;user_id&amp;#39;)-&amp;gt;select();\r\n//生成:SELECT * FROM pes_user GROUP BY user_id;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;limit&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;限制输出的条目数量，使用limit()方法，通常limit()方法与分页一起使用:&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $this-&amp;gt;db(&amp;#39;article&amp;#39;)-&amp;gt;limit(&amp;#39;0, 10&amp;#39;)-&amp;gt;select();\r\n//生成：SELECT * FROM pes_article LIMIT 0, 10;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;总结&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;本章我们学习了PESCMS提供的ORM方法，非常方便快捷！上述的方法中，执行顺序是不分先后的。即在$this-&amp;gt;db() 和 增删查改方法之间是不分先后顺序的。ORM固然方便，在复杂的项目中，我们还是推荐以原生SQL写法为准。&lt;/p&gt;');
INSERT INTO `pes_doc` (`doc_id`, `doc_listsort`, `doc_status`, `doc_lang`, `doc_url`, `doc_createtime`, `doc_catid`, `doc_title`, `doc_keyword`, `doc_description`, `doc_content`) VALUES
(8, 0, 1, 0, '/Doc/view/id/8.html', 1421510220, 30, '预处理和安全', '', '', '&lt;p&gt;经过前几章的学习，相信大家已经掌握了如何在PESCMS中进行数据库调用。本章我们来了解PESCMS的预处理方式和安全的防范。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;预处理概念&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;相信还有一些同学还不知预处理为何物：以往编写PHP的SQL代码中，我们必须对用户提交过来的数据进行转义。团队的人员经常会发生变动，难免出现忘记转义数据的地方，为软件留下了巨大的安全隐患。&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php $sql = &amp;quot;SELECT * FROM pes_user WHERE user_id = &amp;#39;&amp;quot;.addslashes($_GET[&amp;#39;id&amp;#39;]).&amp;quot;&amp;#39; &amp;quot;;&lt;/pre&gt;&lt;p&gt;上述语句中，若忘记使用addslashes转义，安全漏洞就产生了。其次，不同项目/框架（指基于PHP5.2为主的旧产物）有不同的安全风格。他们可能封装了一些安全过滤方法，但团度中存在有一些人不调用这些方法。从而引起重复过滤或者直接调用数据的问题！&lt;br/&gt;而换到预处理上，我们不再需要封装任何安全转义（不考虑XSS攻击）方法，&lt;span style=&quot;color:#ff0000&quot;&gt;&lt;strong&gt;仅仅需要灌输团队用户：提交的数据请使用预处理则可。&lt;/strong&gt;&lt;/span&gt;更重要的时，掌握预处理的思想，几乎可以轻松通吃目前市面所有流行的框架。&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php \r\n//ORM形式\r\n$this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;where(&amp;#39;user_id = :user_id&amp;#39;)-&amp;gt;find(array(&amp;#39;user_id&amp;#39; =&amp;gt; $_GET[&amp;#39;id&amp;#39;]));\r\n\r\n//原生SQL形式\r\n$this-&amp;gt;fetch(&amp;quot;SELECT * FROM {$this-&amp;gt;prefix}user WHERE user_id = :user_id &amp;quot;, array(&amp;#39;user_id&amp;#39; =&amp;gt; $_GET[&amp;#39;id&amp;#39;]));&lt;/pre&gt;&lt;p&gt;上面两个语句中均使用了预处理。将用户提交的数据($_GET[&amp;#39;id&amp;#39;])通过一个名为:user_id的占位符进行绑定。最后将对应的占位符和数值通过数组打包提交，非常方便快捷。&lt;br/&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;占位符&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;预处理的核心就是占位符。SQL语句中，每一个占位符都是唯一的，不能同名！一个占位符绑定一个值！占位符的名称可以用任何名称定义，看你喜欢。当然，我们还是建议使用有意义的占位符进行表示。&lt;/p&gt;&lt;pre class=&quot;brush:sql;toolbar:false&quot;&gt;UPDATE table SET user_id = :id WHERE user_id = :id;&lt;/pre&gt;&lt;p&gt;上述语句在将可能无法正常工作（开启了模拟预处理上述语句则正常）。由于预处理的占位符是唯一的！因此，程序执行时，将会生成这样的SQL语句&lt;/p&gt;&lt;pre class=&quot;brush:sql;toolbar:false&quot;&gt;UPDATE table SET user_id = &amp;#39;1&amp;#39; WHERE user_id = ;&lt;/pre&gt;&lt;p&gt;明显是一个无法执行的SQL语句了。我们需要调整为如何的：&lt;/p&gt;&lt;pre class=&quot;brush:sql;toolbar:false&quot;&gt;UPDATE table SET user_id = :update_id WHERE user_id = :id;\r\n#生成\r\nUPDATE table SET user_id = &amp;#39;1&amp;#39; WHERE user_id = &amp;#39;1&amp;#39; ;#本语句仅为示例，刚学习预处理时我们会犯调用同名占位符的错误。&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;占位符数值提交&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;了解占位符的特性后，我们来学习如何提交占位符的数值。首先，PESCMS提供的ORM增删查改方法：find()、select()&lt;span style=&quot;white-space: normal;&quot;&gt;、insert()&lt;span style=&quot;white-space: normal;&quot;&gt;、update()&lt;span style=&quot;white-space: normal;&quot;&gt;、delete() 第一个参数为占位符的数值数组。而原生SQL方法&amp;nbsp;&lt;span style=&quot;white-space: normal;&quot;&gt;fetch()&lt;/span&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;、getAll()、query() 第一个参数为SQL语句，第二个参数为占位符的&lt;span style=&quot;white-space: normal;&quot;&gt;数值&lt;/span&gt;数组。&lt;br/&gt;什么是数值数组呢？下面我们通过实例掌握，业务环境：&lt;br/&gt;现在某用户需要查找订单号 889432019 的订单，既然是查找单条数据，我们用find方法&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;$param = array(\r\n               &amp;#39;order_id&amp;#39; =&amp;gt; $_GET[&amp;#39;order_id&amp;#39;],  //数组键值 order_id 为占位符的名称, 数组内容为 用户提交过来的值\r\n               &amp;#39;user_id&amp;#39; =&amp;gt; $_SESSION[&amp;#39;user_id&amp;#39;]\r\n              );\r\n$this-&amp;gt;db(&amp;#39;order&amp;#39;)-&amp;gt;where(&amp;#39;order_id = :order_id AND user_id = :user_id &amp;#39;)-&amp;gt;find($param\r\n);&lt;/pre&gt;&lt;p&gt;是不是很简单呢？我们只需要把占位符和数值放在对应的数组则可以完成了预处理的流程了！尽管看起来比拼接SQL写法多了一些操作，但却为我们的程序提供了坚实的护盾，何乐而不为呢？&lt;br/&gt;如果您还没搞明白，可以点击下面三个链接地址，有详细关于参数预处理的说明，而PESCMS只是在这基础上对这些操作进行一个精简整合！&lt;br/&gt;&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;a href=&quot;http://php.net/manual/zh/pdostatement.execute.php&quot; target=&quot;_blank&quot;&gt;http://php.net/manual/zh/pdostatement.execute.php&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;http://php.net/manual/zh/pdostatement.bindparam.php&quot; target=&quot;_blank&quot;&gt;http://php.net/manual/zh/pdostatement.bindparam.php&lt;/a&gt;&lt;/li&gt;&lt;li&gt;&lt;a href=&quot;http://php.net/manual/zh/pdostatement.bindvalue.php&quot; target=&quot;_blank&quot;&gt;http://php.net/manual/zh/pdostatement.bindvalue.php&lt;/a&gt;&lt;/li&gt;&lt;/ol&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;update方法的占位符&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;为什么要单独地对update方法进行说明呢？因为update在占位符处理上有一点特殊。若您使用原生的SQL方式进行数据更新，那么本小节您可以不阅读。&lt;br/&gt;现在有一业务需求，用户更新自己的邮件地址，按照之前掌握的预处理写法，得出如下代码（&lt;span style=&quot;color:#ff0000&quot;&gt;&lt;strong&gt;注意，此处为错误的示例&lt;/strong&gt;&lt;/span&gt;）：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;$param = array(\r\n               &amp;#39;user_id&amp;#39; =&amp;gt; $_SESSION[&amp;#39;user_id&amp;#39;],\r\n               &amp;#39;user_mail&amp;#39; =&amp;gt; $_POST[&amp;#39;user_mail&amp;#39;]\r\n              );\r\n$this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;where(&amp;#39;user_id = :user_id&amp;#39;)-&amp;gt;update($prarm);&lt;/pre&gt;&lt;p&gt;恩，按照写法，程序执行应该生成如下的SQL语句：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;UPDATE pes_user SET user_mail = &amp;#39;demonstrate@pescms.com&amp;#39; WHERE user_id = &amp;#39;1&amp;#39;;&lt;/pre&gt;&lt;p&gt;非常可惜的是，程序并没有按照我们预想地生成上述语句，而是生成了如下语句：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;UPDATE pes_user SET user_mail = &amp;#39;demonstrate@pescms.com&amp;#39;, user_id = &amp;#39;1&amp;#39; WHERE user_id = ;&lt;/pre&gt;&lt;p&gt;为什么会产生这个问题呢？是由于预处理的数组中，我们没有告知update方法 哪些数据是用于SET，哪些数据不用于SET。最后依据占位符只能绑定一个的原则，生成了一个无法运行的SQL语句！&lt;br/&gt;对于这个问题，PESCMS为update方法的预处理数组提供&lt;strong&gt;&lt;span style=&quot;color:#ff0000&quot;&gt;noset&lt;/span&gt;&lt;/strong&gt;标记！noset标记作用是告诉update方法，以下的数据不用于SET操作。我们现在使用noset对刚才的程序进行轻微的调整：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;$param = array(\r\n               &amp;#39;user_mail&amp;#39; =&amp;gt; $_POST[&amp;#39;user_mail&amp;#39;],\r\n               &amp;#39;noset&amp;#39; =&amp;gt; array( //将不用于SET操作的数值放置于noset键值下的数组。\r\n                                &amp;#39;user_id&amp;#39; =&amp;gt; $_SESSION[&amp;#39;user_id&amp;#39;]\r\n                               )\r\n              );\r\n$this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;where(&amp;#39;user_id = :user_id&amp;#39;)-&amp;gt;update($prarm);&lt;/pre&gt;&lt;p&gt;哇！noset的出现非常合时，整个程序结构基本没有调整，仅仅对预处理的数组在进行一次声明则可以了！最终程序生成的SQL语句：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;UPDATE pes_user SET user_mail = &amp;#39;demonstrate@pescms.com&amp;#39; WHERE user_id = &amp;#39;1&amp;#39;;&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;总结&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;本章我们学习了PESCMS关于预处理的方法，在使用中，我们必须谨记PDO占位符的原则：一条SQL语句中，占位符名称只能存在唯一一个！基于本原则之上，结合PESCMS封装的方法，非常方便大家的使用！&lt;span style=&quot;color:#0070c0&quot;&gt;&lt;strong&gt;安全无小事，今后预处理！&lt;/strong&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;'),
(9, 0, 1, 0, '/Doc/view/id/9.html', 1422178560, 30, '事务操作', '', '', '&lt;p&gt;作为一款新生的程序，支持事务是必然的事情。尽管PESCMS属于一款内容管理程序，但我们认为事务支持不应该按照程序类型区分。因此PESCMS的数据库表大多以InnoDB引擎为主。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;开启事务&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;要开启事务非常简单，只需在SQL语句执行之前声明如下代码则可：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;//在控制器内，声明开启事务方法如下\r\n$this-&amp;gt;db()-&amp;gt;transaction();\r\n\r\n//在模型内，声明开启事务方法如下\r\nself::db()-&amp;gt;transaction();&lt;/pre&gt;&lt;p&gt;PS:后面的示例都以在控制器内调用说明&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;回滚事务&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;当操作数据库操作失败时，需要回滚，那么执行如下代码：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;$this-&amp;gt;db()-&amp;gt;rollBack();&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;提交事务&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;程序对数据库操作执行完毕且没有任何错误时，需要对事务进行提交，那么执行如下代码：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;$this-&amp;gt;db()-&amp;gt;commit()&lt;/pre&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;注意事项&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;至此我们已经掌握了PESCMS事务操作的方法。有几点需要注意的是的：&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;p&gt;开启事务后，若不进行提交(commit)，数据将不会入库。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;执行DROP TABLE 或 CREATE TABLE 语句时，将自动进行一个隐式地事务提交，因此开启事务请不要与上述方法一起执行。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;具体详情请参考PHP关于POD的事务一章：&lt;a href=&quot;http://php.net/manual/zh/pdo.begintransaction.php&quot; target=&quot;_blank&quot;&gt;http://php.net/manual/zh/pdo.begintransaction.php&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;'),
(10, 0, 1, 0, '/Doc/view/id/10.html', 1422186720, 30, '数据库调试', '', '', '&lt;p&gt;现在我们已经掌握了PESCMS对于数据库操作的所有方法。万事俱备，只欠东风。开发过程，编写的SQL不会所有语句都可以正常运作，因此我们需要数据库的调试技巧。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;开启调试模式&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;要调试SQL，我们需要开启程序的debug模式。打开程序根目录，找到index.php文件，在文件内修改如下代码：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;define(&amp;#39;DEBUG&amp;#39;, false);\r\n改为\r\ndefine(&amp;#39;DEBUG&amp;#39;, true);&lt;/pre&gt;&lt;p&gt;若index.php不存在则在&amp;nbsp;require &amp;#39;./Core/index.php&amp;#39;; &amp;nbsp;之前添加上述代码。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;自动输出SQL&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;在开启debug模式后，当程序执行SQL出现异常或者某些致命错误，进入报错页后，在错误页面下方将会显示最后执行的SQL语句。如下图所示。&lt;/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;&lt;img src=&quot;/upload/20150125/54c4f53e3b165.png&quot; _src=&quot;/upload/20150125/54c4f53e3b165.png&quot; style=&quot;width: 645px; height: 383px;&quot;/&gt;&lt;/p&gt;&lt;p style=&quot;text-align: left;&quot;&gt;注：如果你设置了自己的错误页面，若没有保留对应的输出信息，将无法显示最后执行的SQL语句。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;手动输出SQL&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCSM为了方便开发者对执行的SQL语句调试，提供了手动调试方法，getLastSql。具体如下：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\n$this-&amp;gt;db(&amp;#39;user&amp;#39;)-&amp;gt;where(&amp;#39;user_id = :user_id&amp;#39;)-&amp;gt;find(array(&amp;#39;user_id&amp;#39; =&amp;gt; &amp;#39;1&amp;#39;));\r\necho $this-&amp;gt;db()-&amp;gt;getLastSql;\r\n//SELECT * FROM pes_user WHERE user_id = 1 LIMIT 1;&lt;/pre&gt;&lt;p&gt;getLastSql仅用于获取程序最后一次执行的SQL语句，同时，getLastSql输出的SQL语句会将预处理的占位符替换为对应的值，若输出的SQL语句还存在占位符，表示本SQL语句在占位符上使用存在问题。&lt;/p&gt;'),
(11, 0, 1, 0, '/Doc/view/id/11.html', 1422195720, 27, '程序安装', '', '', '&lt;p&gt;欢迎您使用PESCMS，从本章开始，我们将一点一点地为您讲解PESCMS每一个开发技巧。我们相信PESCMS将会成为您在web中的好工具！&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;系统要求&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;安装PESCMS对于您的运行环境有一定要求，具体如下：&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;p&gt;PHP版本必须 大于 5.3.3 。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;PHP必须支持pdo,pdo_mysql,gd扩展。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;MYSQL 版本必须大于等于5.1。&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;以下要求为非必需，但官方推荐您支持&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;p&gt;HTTP服务器支持URL重写规则，用于隐藏index.php&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;PHP支持curl,Fileinfo扩展&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;'),
(12, 0, 1, 0, '/Doc/view/id/12.html', 1422196680, 27, '配置文件', '', '', '&lt;p&gt;PESCMS安装完成后，程序生成一个配置文件用于保存一些必要信息，文件存放与 Config/config.php。若您想自定义程序，可以参考本章的说明进行修改。&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\n\r\nreturn array(\r\n\r\n    &amp;#39;DB_TYPE&amp;#39; =&amp;gt; &amp;#39;mysql&amp;#39;, //PESCMS运行在MYSQL上。若需要运行于其他数据库，请在此处填写该数据库的名称，同时需要安装/编写 对应的数据库执行类。\r\n\r\n    &amp;#39;DB_HOST&amp;#39; =&amp;gt; &amp;#39;localhost&amp;#39;, //数据库的连接地址。通常为localhost\r\n\r\n    &amp;#39;DB_NAME&amp;#39; =&amp;gt; &amp;#39;pescms&amp;#39;, //安装PESMCS的数据库名称\r\n\r\n    &amp;#39;DB_USER&amp;#39; =&amp;gt; &amp;#39;root&amp;#39;, //连接数据的帐号\r\n\r\n    &amp;#39;DB_PWD&amp;#39; =&amp;gt; &amp;#39;123456&amp;#39;, //连接数据库的帐号密码\r\n\r\n    &amp;#39;DB_PORT&amp;#39; =&amp;gt; &amp;#39;3306&amp;#39;, //连接数据库的端口\r\n\r\n    &amp;#39;DB_PREFIX&amp;#39; =&amp;gt; &amp;#39;pes_&amp;#39;, //每一个数据库表的前缀\r\n\r\n    &amp;#39;PRIVATE_KEY&amp;#39; =&amp;gt; &amp;#39;5fVyrPpTqapZKPhhrt6v&amp;#39;, //程序密钥，用于密码加盐等地方。安装程序会自动生成。\r\n\r\n    &amp;#39;USER_KEY&amp;#39; =&amp;gt; &amp;#39;USRhKMAJiNuub9DJ5jue&amp;#39;, //用户帐号密钥，用于密码加盐等地方。安装程序会自动生成。\r\n\r\n    &amp;#39;LANGUAGE&amp;#39; =&amp;gt; &amp;#39;zh&amp;#39;, //程序的默认语言\r\n\r\n    &amp;#39;ERROR_MES&amp;#39; =&amp;gt; &amp;#39;ON&amp;#39;, //是否开启错误信息 | 必须大写 ON | OFF\r\n\r\n    &amp;#39;ERROR_RANK&amp;#39; =&amp;gt; &amp;#39;16&amp;#39;, //需要显示的错误等级\r\n\r\n    &amp;#39;ERROR_PROMPT&amp;#39; =&amp;gt; &amp;#39;/Core/Theme/error.php&amp;#39;, //脚本运行错误提示页面。\r\n\r\n    &amp;#39;APP_GROUP_LIST&amp;#39; =&amp;gt; &amp;#39;Home,Admin&amp;#39;, //项目分组设定\r\n\r\n    &amp;#39;DEFAULT_GROUP&amp;#39; =&amp;gt; &amp;#39;Home&amp;#39;, //默认分组\r\n\r\n    &amp;#39;FILE_CACHE_PATH&amp;#39; =&amp;gt; &amp;#39;./Temp&amp;#39;, //文件缓存路径\r\n\r\n    &amp;#39;FILE_CACHE_TIME&amp;#39; =&amp;gt; &amp;#39;1800&amp;#39;, //缓存时间(秒)\r\n\r\n    &amp;#39;LOG_PATH&amp;#39; =&amp;gt; &amp;#39;/log&amp;#39;, //日志目录 | 默认为根目录log\r\n\r\n    &amp;#39;LOG_DELETE&amp;#39; =&amp;gt; &amp;#39;7&amp;#39;, //日志删除隔间时间\r\n\r\n    #&amp;#39;ADMIN_MES_PROMPT&amp;#39; =&amp;gt; &amp;#39;&amp;#39;, //Admin组的自定义提示页 ，默认是注释的，调用系统默认的提示页\r\n\r\n    #&amp;#39;HOME_MES_PROMPT&amp;#39; =&amp;gt; &amp;#39;&amp;#39;, //Home组的自定义提示页，默认是注释的，调用系统默认的提示页\r\n\r\n    &amp;#39;UPLOAD_PATH&amp;#39; =&amp;gt; &amp;#39;/upload&amp;#39;, //上传文件存放的目录\r\n);&lt;/pre&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;'),
(13, 0, 1, 0, '/Doc/view/id/13.html', 1422640680, 31, '访问和创建控制器', '', '', '&lt;p&gt;上一章我们介绍了RESTful，本章开始我们来实战使用RESTful。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;访问控制器&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCMS在访问控制器上提供了三种方法。在学习三种访问方法之前，需了解PESCMS的结构。&lt;br/&gt;PESCMS的结构是依据：项目组名称、控制器名称、控制器方法 构造而成的，缺一不可。如下控制器代码：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;&amp;lt;?php\r\nnamespace App\\Home\\GET;\r\n\r\nclass Index extends \\App\\Home\\Common {\r\n\r\n    public function index() {\r\n        echo &amp;#39;我是控制器下Index下的方法index&amp;#39;;\r\n    }\r\n\r\n}&lt;/pre&gt;&lt;p&gt;依据命名空间，可以知道上述代码的控制器所属项目组为：Home，控制器名称为：Index，方法名称为：index 。要访问本控制器，可以通过下面三种URL模型：&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;p&gt;传统模型：G&amp;amp;M&amp;amp;A&lt;br/&gt;传统模式即最原始的URL地址，访客可以获取参数名称，参数值。依据上面的控制器代码，访问的URL地址为: http://域名/index.php?g=Home&amp;amp;m=Index&amp;amp;a=index&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;横杠模式：G-M-A&lt;br/&gt;横杠模式属于美化URL的模式，它隐藏了gma参数名称，每一个横杠表示一个参数分隔符。前两个为GMA的缺省值。访问的URL地址为：http//域名/index.php/Home-Index-index&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;斜杠模式：G/M/A&lt;br/&gt;斜杠模式和横杠模式一样，主要区别在于斜杠分割符。访问的URL地址为：http://域名/index.php/Home/Index/index&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;上述三种访问方法中，均可通过PESCMS后台 -- 高级设置 -- URL格式 自行设置，非常方便用户自定义URL模型！&lt;br/&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;提交参数&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;掌握了访问控制器方法，我们仅仅知道如何访问而已。实际开发中，我们的程序需要接收用户提交的数据（GET/POST）。对于POST，我相信会PHP的都知道，POST提交的内容不会显示在URL之中。在控制器上我们用$_POST则可进行接收和处理。而GET提交，除了可以和POST一样通过表单提交外，还可以直接在URL填写对应的参数提交。那么问题来了，PESCMS提供了三种URL访问方式，我们在使用GET提交时必须注意以下事项：&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;p&gt;对于使用传统模式，参数提交只需要按照HTTP的规则则可了。如，现在用户查看自己某一张订单的详情，URL地址为：&lt;br/&gt;http://域名/index.php?g=Home&amp;amp;m=Order&amp;amp;a=view&amp;amp;order_id=5201314&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;使用横杠/斜杠模式，我们需要注意的是，前两个分隔符的参数分别为缺省值的GMA。后面的存在其他参数提交，那么需要以如下形式编写： 参数名称 分隔符 参数值。如，现在要获取订单号大于10，少于50且状态为支付的订单列表。URL地址为（使用斜杠模式）：&lt;br/&gt;http://域名/index.php/Home/Order/list/great/10/less/50/status/1 在控制器中打印$_GET变量，将输出如下数组。&lt;br/&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;Array\r\n(\r\n    [great] =&amp;gt; 10 # /great/10\r\n    [less] =&amp;gt; 50 # /less/50\r\n    [status] =&amp;gt; 1 # /status/1\r\n)&lt;/pre&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;在使用非传统模式下，在分隔符的作用下，我们需要注意提交的参数名称，参数值中是否存在分隔符。若存在，我们需要更换一个参数名称，或者将参数值进行诸如BASE64封装。否则因为分隔符的存在，干扰了程序的正常解析。&lt;br/&gt;如下需求，现在需要获取2015-01-01 到 2015-01-31 的订单列表。按照正常的设计，我们首先设想的URL会是：&lt;br/&gt;http://域名/index.php/Home/Order/list/begin/2015-01-01/end/2015-01-31 ，在控制器中打印$_GET变量，结果非设想的样子。&lt;br/&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;Array\r\n(\r\n    [begin] =&amp;gt; 2015\r\n    [end] =&amp;gt; 2015\r\n    [01] =&amp;gt; 31 # 键值名称重复，内容覆写为 31\r\n)&lt;/pre&gt;&lt;p&gt;哇，上面的明显不是我想要的。既然是时间，我们将它转换为时间戳则可。最终的URL为：&lt;br/&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;http://域名/index.php/Home/Order/list/begin/1420041600/end/1422719999 ，在控制器打印$_GET变量.&lt;br/&gt;&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;Array\r\n(\r\n    [begin] =&amp;gt; 1420041600 # 获得的为时间戳，我们只需要用strtotime函数转为正常的日期则可了。\r\n    [end] =&amp;gt; 1422719999 \r\n)&lt;/pre&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;现在的结果就是我们想要的结果了！&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;小结一下，传统模式我们不需要作任何处理，按照往常的方式则可了。而横杠/斜杠模式我们需要对参数名称，参数值进行留意，避免干扰程序解析，也许这是所谓的等价交换吧。:)&lt;br/&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;控制器的RESTful&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCMS在RESTful风格上有4个状态，由于RESTful非标准，且PHP并没有$_PUT和$_DELETE方法，我们无法直接访问PUT和DELETE提交的内容。在这方面PESCMS通过URL指定参数或者表单隐藏域来实现对应的访问请求。&lt;br/&gt;首先，查找资料通常用GET的形式，而插入新的数据，我们用POST。上述两个方法，GET可以直接用URL，或者和POST一样使用表单进行提交，上述两点相信大家无异议。&lt;br/&gt;现在我们需要设置某用户的密码，之前RESTful一章已经提及到，更新选用PUT。我们该如何告诉PESCMS现在要使用PUT提交呢？&lt;br/&gt;&lt;/p&gt;&lt;ol&gt;&lt;li&gt;使用URL形式提交；控制器内获取参数只能使用&lt;span style=&quot;white-space: normal; color: rgb(227, 108, 9);&quot;&gt;$_GET&lt;/span&gt;获取。&lt;br/&gt;&lt;/li&gt;&lt;li&gt;使用表单结合隐藏域提交；控制器内，依据表单的method声明决定使用&lt;span style=&quot;white-space: normal; color: rgb(227, 108, 9);&quot;&gt;$_GET&lt;/span&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;还是&lt;/span&gt;&lt;span style=&quot;white-space: normal; color: rgb(227, 108, 9);&quot;&gt;$_POST&lt;/span&gt;获取数据。&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;阅读完上面一大推废话，接下来说重点的：PESCMS对于GPPT请求，首先读取系统的保留参数名称method是否为空，程序通过&lt;span style=&quot;color:#e36c09&quot;&gt;$_REQUEST&lt;/span&gt;[&lt;span style=&quot;color:#ffc000&quot;&gt;&amp;#39;method&amp;#39;&lt;/span&gt;]变量通吃&lt;span style=&quot;color:#e36c09&quot;&gt;$_GET&lt;/span&gt;和&lt;span style=&quot;color:#e36c09&quot;&gt;$_POST&lt;/span&gt;。当上述方法为空时，则通过&lt;span style=&quot;color:#e36c09&quot;&gt;$_SERVER&lt;/span&gt;[&lt;span style=&quot;color:#ffc000&quot;&gt;&amp;#39;REQUEST_METHOD&amp;#39;&lt;/span&gt;]获取请求类型。以上方法都无法获取正确的请求状态，系统将执行缺省值请求为：GET。&lt;br/&gt;回到刚才更新的例子中，若通过URL的方法更新，则访问的地址为：&lt;br/&gt;http://域名/index.php/Home/User/setPasswd/method/PUT/uid/1/passwd/123456 。控制器中，打印&lt;span style=&quot;color:#e36c09&quot;&gt;$_GET&lt;/span&gt;变量，结果将如下&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;Array\r\n(\r\n    [method] =&amp;gt; PUT\r\n    [uid] =&amp;gt; 1\r\n    [passwd] =&amp;gt; 123456\r\n)&lt;/pre&gt;&lt;p&gt;其次是表单形式提交，在表单提交中，接收端将依据表单的&lt;span style=&quot;white-space: normal;&quot;&gt;method声明决定使用&lt;span style=&quot;white-space: normal; color: rgb(227, 108, 9);&quot;&gt;$_GET&lt;/span&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;还是&lt;/span&gt;&lt;span style=&quot;white-space: normal; color: rgb(227, 108, 9);&quot;&gt;$_POST&lt;/span&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;。&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;pre class=&quot;brush:html;toolbar:false&quot;&gt;&amp;lt;form action=&amp;quot;/index.php/Home/User/setPasswd&amp;quot; method=&amp;quot;POST&amp;quot;&amp;gt; &amp;lt;!--此处声明POST，后端必须使用$_POST接收表单的数据--&amp;gt;\r\n\r\n    &amp;lt;input type=&amp;quot;hidden&amp;quot; name=&amp;quot;method&amp;quot; value=&amp;quot;PUT&amp;quot;&amp;gt; &amp;lt;!--隐藏域method声明了PUT请求--&amp;gt;\r\n\r\n    &amp;lt;input type=&amp;quot;hidden&amp;quot; name=&amp;quot;uid&amp;quot; value=&amp;quot;1&amp;quot;&amp;gt;\r\n\r\n    &amp;lt;input type=&amp;quot;password&amp;quot; name=&amp;quot;passwd&amp;quot; value=&amp;quot;&amp;quot;&amp;gt;\r\n\r\n&amp;lt;/form&amp;gt;&lt;/pre&gt;&lt;p&gt;根据上述的表单提交，在控制器中使用&lt;span style=&quot;color:#e36c09&quot;&gt;$_POST&lt;/span&gt;，输入如下内容：&lt;/p&gt;&lt;pre class=&quot;brush:php;toolbar:false&quot;&gt;Array\r\n(\r\n    [method] =&amp;gt; PUT\r\n    [uid] =&amp;gt; 1\r\n    [passwd] =&amp;gt; 123456\r\n)&lt;/pre&gt;&lt;p&gt;最后小结，PESCMS中保留了一个名为method的参数，该参数告诉程序以何种请求&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;创建控制器&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;的&lt;/p&gt;');

-- --------------------------------------------------------

--
-- 表的结构 `pes_download`
--

CREATE TABLE IF NOT EXISTS `pes_download` (
  `download_id` int(11) NOT NULL AUTO_INCREMENT,
  `download_listsort` int(11) NOT NULL,
  `download_status` tinyint(4) NOT NULL,
  `download_lang` tinyint(4) NOT NULL,
  `download_url` varchar(255) NOT NULL,
  `download_createtime` int(11) NOT NULL,
  `download_catid` int(11) NOT NULL,
  `download_title` varchar(255) NOT NULL,
  `download_thumb` varchar(255) NOT NULL,
  `download_keyword` varchar(255) NOT NULL,
  `download_description` text NOT NULL,
  `download_file` text NOT NULL,
  `download_content` text NOT NULL,
  `download_version` varchar(255) NOT NULL,
  PRIMARY KEY (`download_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `pes_download`
--

INSERT INTO `pes_download` (`download_id`, `download_listsort`, `download_status`, `download_lang`, `download_url`, `download_createtime`, `download_catid`, `download_title`, `download_thumb`, `download_keyword`, `download_description`, `download_file`, `download_content`, `download_version`) VALUES
(1, 0, 1, 0, '/Download/Program/1.html', 1391356800, 6, 'PESCMS V1.20140203beta', '', 'PESCMS V1.20140203beta', '', '/upload/file/2014-02-07/52f4f1825cf48.zip', '<p>\r\n	PESCMS当前版本为测试版，CMS的基本功能都已经开发完毕，可以用于正常的网站使用。后续的升级不会有太大的跨度，所以不必担心程序后续更新会影响您目前网站稳定性。另外欢迎各位向官方提供反馈，帮助PESCMS更好地成长。\r\n</p>\r\n<p>\r\n	<span style="color:#E53333;">如果您对功能不健全的程序感到不安全，请不要将本程序上传到服务器。</span> \r\n</p>\r\n<h4>\r\n	<span style="line-height:2;color:#009900;">已开发完毕的功能：</span> \r\n</h4>\r\n<ul>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;">前台各项调用功能</span> \r\n	</li>\r\n	<li>\r\n		后台内容管理各项功能\r\n	</li>\r\n	<li>\r\n		会员的资料，权限基本管理\r\n	</li>\r\n	<li>\r\n		网站的基本设置\r\n	</li>\r\n</ul>\r\n<h4>\r\n	<span style="line-height:2;font-size:10pt;color:#009900;">待完善及开发的功能：</span> \r\n</h4>\r\n<ul>\r\n	<li>\r\n		<span style="font-size:10pt;line-height:1.5;">完善网站的设置功能</span> \r\n	</li>\r\n	<li>\r\n		完善主题/插件功能\r\n	</li>\r\n	<li>\r\n		完善程序的升级功能\r\n	</li>\r\n	<li>\r\n		完善网站备份功能\r\n	</li>\r\n	<li>\r\n		完善网站自定义URL功能\r\n	</li>\r\n	<li>\r\n		完善文件管理功能\r\n	</li>\r\n	<li>\r\n		补充模型管理中的编辑功能\r\n	</li>\r\n	<li>\r\n		优化分类管理的代码（目前当分类数据大时，会有明显的卡顿）\r\n	</li>\r\n	<li>\r\n		完善网站缓存的更新方式\r\n	</li>\r\n	<li>\r\n		完善社交设置\r\n	</li>\r\n	<li>\r\n		BUG修复\r\n	</li>\r\n</ul>\r\n<p>\r\n	<br />\r\n</p>', ''),
(2, 0, 1, 0, '/Download/patch/2.html', 1391961600, 7, '升级程序PESCMS V1.20140209beta', '', 'PESCMS V1.20140209beta', '升级包PESCMS V1.20140209beta', '', '<p>\r\n	<span style="line-height:1.5;font-size:10pt;">升级程序PESCMS V1.20140209beta更新内容如下</span> \r\n</p>\r\n<blockquote style="margin:0 0 0 40px;border:none;padding:0px;">\r\n	<p>\r\n		+完成系统更新功能\r\n	</p>\r\n	<p>\r\n		<span style="font-size:10pt;line-height:1.5;">+添加上传多图片/文件格式设置</span> \r\n	</p>\r\n	<p>\r\n		±修复一个多图片/文件编辑时，无法删除、报警告的问题\r\n	</p>\r\n</blockquote>\r\n<p>\r\n	如果您之前已经安装体验了PESCMS V1.20140203beta，可以将本补丁覆盖程序的代码（记得执行备份）。需要注意的是：由于本补丁遗漏一条SQL的执行，顾请您手动补充，代码如下：\r\n</p>\r\n<pre class="brush:">--\r\n-- 本次插入操作ID必须为13!\r\n--\r\nINSERT INTO `pes`.`pes_option` (`id`, `option_name`, `name`, `value`, `option_range`) VALUES (''13'', ''version'', ''系统版本'', ''PESCMS V1.20140203beta'', '''');</pre>\r\n<p>\r\n	升级补丁下载地址如下：\r\n</p>\r\n<p>\r\n	<span style="color:#E53333;">文件补丁:<strong><a href="/upload/file/2014-02-10/52f7bddf1f0ec.zip" target="_blank"><span style="color:#003399;">下载地址</span></a></strong></span> \r\n</p>\r\n<p>\r\n	<span style="color:#E53333;">数据库补丁:</span><span style="letter-spacing:1px;white-space:normal;color:#E53333;"><strong><a href="/upload/file/2014-02-10/52f7bde22bd15.zip" target="_blank"><span style="color:#003399;">下载地址</span></a></strong></span> \r\n</p>\r\n<p>\r\n	由于本次涉及到以后的在线升级功能，如果您本次手动更新失败，建议安装新版本。为您带来不便，非常抱歉。\r\n</p>', '升级程序PESCMS V1.20140209beta'),
(3, 0, 1, 0, '/Download/Program/3.html', 1391961600, 6, 'PESCMS V1.20140209beta', '', 'PESCMS V1.20140209beta', '', '/upload/file/2014-02-10/52f7cb8c96058.zip', '<p style="text-indent:2em;">\r\n	PESCMS新版发布啦！当前版本为：PESCMS V1.20140209beta\r\n</p>\r\n<p style="text-indent:2em;">\r\n	本次更新内容：\r\n</p>\r\n<blockquote style="margin:0px 0px 0px 40px;border:none;padding:0px;text-indent:2em;">\r\n	<p>\r\n		+完成系统更新功能\r\n	</p>\r\n	<p>\r\n		+添加上传多图片/文件格式设置\r\n	</p>\r\n	<p>\r\n		±修复一个多图片/文件编辑时，无法删除、报警告的问题\r\n	</p>\r\n</blockquote>\r\n<p style="text-indent:2em;">\r\n	从本次版本发布，让PESCMS进入了一个新领域，一个质的飞跃。PESCMS为您带来了及时的自动更新功能，让您的网站时刻保持着online的状态，永不落后别人一步！\r\n</p>\r\n<p style="text-indent:2em;">\r\n	稍微对自动更新功能说明：\r\n</p>\r\n<p style="text-indent:2em;">\r\n	自动更新是依据当前所安装的系统版本进行升级。每次升级都可能下载两个升级文件，分别为：代码文件和数据库文件。举一个栗子吧，例如您当前系统版本为1，而PESCMS官网版本为10，目前和官网的版本相差为9个。您只需要一步一步地进行更新就行了！这样既不会因为版本跨度过大，导致更新频繁出错。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	<span style="color:#E53333;">其次，目前自动更新在linux下会存在一个权限问题。因此使用自动更新前，先将整个程序目录权限设置为777（若win也出现此问题，解决方案和linux一样），待更新完毕后再恢复对应的目录权限。此问题会在后期更新中修复。</span> \r\n</p>', 'PESCMS V1.20140209beta'),
(4, 0, 1, 0, '/Download/patch/4.html', 1392048000, 7, '升级程序PESCMS V1.20140211beta', '', 'PESCMS V1.20140211beta', '', '', '<p>\r\n	<span style="line-height:1.5;font-size:10pt;">本次更新内容如下：</span>\r\n</p>\r\n<blockquote style="margin:0 0 0 40px;border:none;padding:0px;">\r\n	<p>\r\n		<span style="line-height:1.5;font-size:10pt;">±修复系统上传可能存在的安全问题</span>\r\n	</p>\r\n	<p>\r\n		±调整部分代码的调用URL，提高系统通用性\r\n	</p>\r\n</blockquote>\r\n本补丁为非必要更新文件，所以不会有整合版程序下载。若需要最新版的，请手动在后台进行更新。<br />\r\n<h4>\r\n	补丁下载地址\r\n</h4>\r\n<p>\r\n	<strong>文件补丁：</strong><a href="/upload/file/2014-02-11/52f90a0ac633f.zip" target="_blank"><span style="color:#003399;">下载地址</span></a> \r\n</p>', 'PESCMS V1.20140211beta'),
(5, 0, 1, 0, '/Download/patch/5.html', 1393344000, 7, '升级程序PESCMS V1.20140226beta', '', '', '', '', '<p>\r\n	本次更新内容如下:\r\n</p>\r\n<blockquote style="margin:0 0 0 40px;border:none;padding:0px;">\r\n	<p>\r\n		+增加URL选择模式<br />\r\n-移除一些不必要的模块(为安全起见,更新程序不会执行删除动作)<br />\r\n±调整官方主题模板<br />\r\n±调整URL生成规则<br />\r\n<span style="line-height:1.5;font-size:9pt;">+官方主题增加分页调用<br />\r\n</span><span style="line-height:1.5;font-size:9pt;">±补充分页类URL规则</span>\r\n	</p>\r\n</blockquote>\r\n<p style="line-height:20px;white-space:normal;">\r\n	升级补丁下载地址如下：\r\n</p>\r\n<p style="line-height:20px;white-space:normal;">\r\n	<span style="color:#E53333;">文件补丁:<strong><a href="/upload/file/2014-02-26/530dfb7843dc0.zip" target="_blank"><span style="color:#003399;">下载地址</span></a></strong></span> \r\n</p>\r\n<p style="line-height:20px;white-space:normal;">\r\n	<span style="color:#E53333;">数据库补丁:</span><span style="color:#E53333;"><strong><span style="color:#003399;"><a href="/upload/file/2014-02-26/530df7fe4a752.zip" target="_blank">下载地址</a></span></strong></span>\r\n</p>', '');

-- --------------------------------------------------------

--
-- 表的结构 `pes_field`
--

CREATE TABLE IF NOT EXISTS `pes_field` (
  `field_id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NOT NULL,
  `field_name` varchar(128) NOT NULL,
  `display_name` varchar(128) NOT NULL,
  `field_type` varchar(128) NOT NULL,
  `field_option` text NOT NULL,
  `field_default` varchar(128) NOT NULL,
  `field_required` tinyint(4) NOT NULL,
  `field_message` varchar(128) NOT NULL,
  `field_listsort` int(11) NOT NULL,
  `field_status` tinyint(4) NOT NULL,
  PRIMARY KEY (`field_id`),
  UNIQUE KEY `modle_id` (`model_id`,`field_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=112 ;

--
-- 转存表中的数据 `pes_field`
--

INSERT INTO `pes_field` (`field_id`, `model_id`, `field_name`, `display_name`, `field_type`, `field_option`, `field_default`, `field_required`, `field_message`, `field_listsort`, `field_status`) VALUES
(1, 1, 'listsort', '排序', 'text', '', '', 0, '', 99, 1),
(2, 1, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(3, 1, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(4, 2, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(5, 2, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(6, 2, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(7, 1, 'title', '标题', 'text', '{"":null}', '', 1, '请填写标题', 1, 1),
(8, 1, 'thumb', '略缩图', 'thumb', '', '', 0, '', 4, 1),
(9, 1, 'keyword', '关键词', 'text', '', '', 0, '', 2, 1),
(10, 1, 'description', '描述', 'textarea', '{"":null}', '', 0, '', 3, 1),
(11, 1, 'content', '内容', 'editor', '{"":null}', '', 1, '请填写内容', 5, 1),
(12, 2, 'title', '标题', 'text', '{"":null}', '', 1, '请填写标题', 2, 1),
(13, 2, 'thumb', '略缩图', 'thumb', '{"\\u5bbd":"400\\r","\\u9ad8":"400"}', '', 0, '', 3, 1),
(14, 2, 'keyword', '关键词', 'text', '{"":null}', '', 0, '', 4, 1),
(15, 2, 'description', '描述', 'textarea', '{"":null}', '', 0, '', 5, 1),
(16, 2, 'content', '内容', 'editor', '{"":null}', '', 1, '请填写内容', 6, 1),
(17, 2, 'catid', '分类', 'category', '{"":null}', '', 1, '', 1, 1),
(18, 2, 'source', '来源', 'text', '{"":null}', '', 0, '', 7, 1),
(19, 2, 'source_link', '来源链接', 'text', '{"":null}', '', 0, '', 8, 1),
(20, 3, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(21, 3, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 99, 1),
(22, 3, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(39, 3, 'catid', '分类', 'category', '{"":null}', '', 1, '', 1, 1),
(40, 3, 'title', '标题', 'text', '{"":null}', '', 1, '', 2, 1),
(41, 3, 'thumb', '略缩图', 'thumb', '{"":null}', '', 0, '', 3, 1),
(42, 3, 'keyword', '关键词', 'text', '{"":null}', '', 0, '', 4, 1),
(43, 3, 'description', '描述', 'textarea', '{"":null}', '', 0, '', 5, 1),
(44, 3, 'file', '上传文件', 'file', '{"":null}', '', 0, '', 6, 1),
(45, 3, 'content', '内容', 'editor', '{"":null}', '', 0, '', 15, 1),
(48, 3, 'version', '版本', 'text', '{"":null}', '', 0, '', 7, 1),
(49, 4, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(50, 4, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(51, 4, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(53, 4, 'content', '更新内容', 'editor', '{"":null}', '', 1, '', 2, 1),
(54, 4, 'file', '更新文件', 'file', '{"":null}', '', 0, '', 3, 1),
(56, 4, 'prev_version', '上一个版本', 'text', '{"":null}', '', 1, '', 1, 1),
(57, 4, 'title', '当前版本', 'text', '{"":null}', '', 1, '', 0, 1),
(58, 4, 'sql', 'SQL文件', 'file', '{"":null}', '', 0, '', 4, 1),
(67, 6, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(68, 6, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(69, 6, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(70, 7, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(73, 7, 'account', '会员帐号', 'text', '', '', 1, '', 2, 1),
(75, 7, 'password', '会员密码', 'text', '', '', 0, '', 3, 1),
(76, 7, 'mail', '邮箱地址', 'text', '', '', 1, '', 4, 1),
(77, 7, 'name', '会员名称', 'text', '', '', 1, '', 5, 1),
(78, 7, 'group_id', '用户组', 'select', '', '', 1, '', 1, 1),
(79, 6, 'name', '用户组名称', 'text', '', '', 1, '', 1, 1),
(81, 8, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(83, 8, 'type_id', '幻灯片名称', 'text', '', '', 1, '', 1, 1),
(84, 8, 'name', '图片名称', 'text', '', '', 0, '', 2, 1),
(85, 8, 'pic', '图片', 'thumb', '', '', 0, '', 3, 1),
(86, 8, 'link', '图片链接', 'text', '', '', 0, '', 4, 1),
(87, 8, 'description', '图片描述', 'textarea', '', '', 0, '', 5, 1),
(88, 9, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(89, 9, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(90, 9, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(91, 9, 'catid', '分类', 'category', '', '', 1, '', 1, 1),
(92, 9, 'title', '标题', 'text', '', '', 1, '', 2, 1),
(93, 9, 'keyword', '关键词', 'text', '', '', 0, '', 3, 1),
(94, 9, 'description', '描述', 'textarea', '', '', 0, '', 4, 1),
(95, 9, 'content', '内容', 'editor', '', '', 1, '', 5, 1),
(96, 10, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(97, 10, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(98, 10, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(99, 10, 'title', '标题', 'text', '', '', 1, '', 1, 1),
(100, 10, 'thumb', '略缩图', 'thumb', '', '', 0, '', 2, 1),
(101, 10, 'imgs', '图片列表', 'img', '', '', 0, '', 3, 1),
(102, 10, 'view', '热度', 'text', '', '', 0, '', 97, 1),
(103, 1, 'type', '单页类型', 'select', '{"PESCMS":"1","DOC":"2","ROUSI":"3"}', '', 1, '', 97, 1),
(104, 11, 'status', '状态', 'radio', '{"\\u7981\\u7528":"0","\\u542f\\u7528":"1"}', '1', 1, '', 100, 1),
(105, 11, 'listsort', '排序', 'text', '', '', 0, '', 98, 1),
(106, 11, 'createtime', '发布时间', 'date', '', '', 0, '', 99, 1),
(107, 11, 'title', '标题', 'text', '', '', 1, '', 1, 1),
(108, 11, 'name', '姓名', 'text', '', '', 1, '', 2, 1),
(109, 11, 'mail', '邮箱地址', 'text', '', '', 1, '', 3, 1),
(110, 11, 'content', '详情', 'editor', '', '', 0, '', 4, 1),
(111, 11, 'from', '网站', 'text', '', '', 1, '', 97, 1);

-- --------------------------------------------------------

--
-- 表的结构 `pes_get_url`
--

CREATE TABLE IF NOT EXISTS `pes_get_url` (
  `url_id` int(11) NOT NULL AUTO_INCREMENT,
  `url_link` varchar(255) NOT NULL,
  `url_status` tinyint(1) NOT NULL,
  `url_addtime` int(11) NOT NULL,
  PRIMARY KEY (`url_id`),
  KEY `url_link` (`url_link`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=951 ;

--
-- 转存表中的数据 `pes_get_url`
--

INSERT INTO `pes_get_url` (`url_id`, `url_link`, `url_status`, `url_addtime`) VALUES
(1, 'http://sexy.faceks.com/post/2c9c66_5b1a08e', 0, 1423232648),
(2, 'http://sexy.faceks.com/post/2c9c66_5b1a082', 0, 1423232648),
(3, 'http://sexy.faceks.com/post/2c9c66_5b1a06d', 0, 1423232648),
(4, 'http://sexy.faceks.com/post/2c9c66_5b1a05c', 0, 1423232648),
(5, 'http://sexy.faceks.com/post/2c9c66_5b10fcb', 0, 1423232648),
(6, 'http://sexy.faceks.com/post/2c9c66_5ae75cf', 0, 1423232648),
(7, 'http://sexy.faceks.com/post/2c9c66_5ae75c7', 0, 1423232648),
(8, 'http://sexy.faceks.com/post/2c9c66_5ae75be', 0, 1423232648),
(9, 'http://sexy.faceks.com/post/2c9c66_5ae75b7', 0, 1423232648),
(10, 'http://sexy.faceks.com/post/2c9c66_5ae75a2', 0, 1423232648),
(11, 'http://sexy.faceks.com/post/2c9c66_5a81f14', 0, 1423232648),
(12, 'http://sexy.faceks.com/post/2c9c66_5a81f0b', 0, 1423232648),
(13, 'http://sexy.faceks.com/post/2c9c66_5a81ef6', 0, 1423232648),
(14, 'http://sexy.faceks.com/post/2c9c66_5a81eee', 0, 1423232648),
(15, 'http://sexy.faceks.com/post/2c9c66_5a81ee4', 0, 1423232648),
(16, 'http://sexy.faceks.com/post/2c9c66_5a41938', 0, 1423232648),
(17, 'http://sexy.faceks.com/post/2c9c66_5a4192a', 0, 1423232648),
(18, 'http://sexy.faceks.com/post/2c9c66_5a41914', 0, 1423232648),
(19, 'http://sexy.faceks.com/post/2c9c66_5a41902', 0, 1423232648),
(20, 'http://sexy.faceks.com/post/2c9c66_5a418eb', 0, 1423232648),
(21, 'http://sexy.faceks.com/post/2c9c66_5a418ce', 0, 1423232648),
(22, 'http://sexy.faceks.com/post/2c9c66_5a12745', 0, 1423232648),
(23, 'http://sexy.faceks.com/post/2c9c66_5a1273a', 0, 1423232648),
(24, 'http://sexy.faceks.com/post/2c9c66_5a12732', 0, 1423232648),
(25, 'http://sexy.faceks.com/post/2c9c66_5a1271f', 0, 1423232648),
(26, 'http://sexy.faceks.com/post/2c9c66_5a1270c', 0, 1423232648),
(27, 'http://sexy.faceks.com/post/2c9c66_5a126e8', 0, 1423232648),
(28, 'http://sexy.faceks.com/post/2c9c66_5a126d4', 0, 1423232648),
(29, 'http://sexy.faceks.com/post/2c9c66_59372b3', 0, 1423232648),
(30, 'http://sexy.faceks.com/post/2c9c66_58f1218', 0, 1423232648),
(31, 'http://sexy.faceks.com/post/2c9c66_58f1213', 0, 1423232648),
(32, 'http://sexy.faceks.com/post/2c9c66_58f1207', 0, 1423232648),
(33, 'http://sexy.faceks.com/post/2c9c66_58f1200', 0, 1423232648),
(34, 'http://sexy.faceks.com/post/2c9c66_58f11f7', 0, 1423232648),
(35, 'http://sexy.faceks.com/post/2c9c66_58f11e4', 0, 1423232648),
(36, 'http://sexy.faceks.com/post/2c9c66_58f11d4', 0, 1423232648),
(37, 'http://sexy.faceks.com/post/2c9c66_58f11c0', 0, 1423232648),
(38, 'http://sexy.faceks.com/post/2c9c66_5843ffb', 0, 1423232648),
(39, 'http://sexy.faceks.com/post/2c9c66_5843ff9', 0, 1423232648),
(40, 'http://sexy.faceks.com/post/2c9c66_5843fef', 0, 1423232648),
(41, 'http://sexy.faceks.com/post/2c9c66_5843fe7', 0, 1423232648),
(42, 'http://sexy.faceks.com/post/2c9c66_5843fdf', 0, 1423232648),
(43, 'http://sexy.faceks.com/post/2c9c66_5843fd6', 0, 1423232648),
(44, 'http://sexy.faceks.com/post/2c9c66_575b466', 0, 1423232648),
(45, 'http://sexy.faceks.com/post/2c9c66_575b45a', 0, 1423232648),
(46, 'http://sexy.faceks.com/post/2c9c66_575b445', 0, 1423232648),
(47, 'http://sexy.faceks.com/post/2c9c66_575b432', 0, 1423232648),
(48, 'http://sexy.faceks.com/post/2c9c66_5717465', 0, 1423232648),
(49, 'http://sexy.faceks.com/post/2c9c66_5717454', 0, 1423232648),
(50, 'http://sexy.faceks.com/post/2c9c66_5717433', 0, 1423232648),
(51, 'http://sexy.faceks.com/post/2c9c66_56ce8b1', 0, 1423232648),
(52, 'http://sexy.faceks.com/post/2c9c66_56ce8ab', 0, 1423232648),
(53, 'http://sexy.faceks.com/post/2c9c66_56ce89d', 0, 1423232648),
(54, 'http://sexy.faceks.com/post/2c9c66_56ce896', 0, 1423232648),
(55, 'http://sexy.faceks.com/post/2c9c66_56ce88d', 0, 1423232648),
(56, 'http://sexy.faceks.com/post/2c9c66_56ce881', 0, 1423232648),
(57, 'http://sexy.faceks.com/post/2c9c66_56ce876', 0, 1423232648),
(58, 'http://sexy.faceks.com/post/2c9c66_56ce7f8', 0, 1423232648),
(59, 'http://sexy.faceks.com/post/2c9c66_56ce7f0', 0, 1423232648),
(60, 'http://sexy.faceks.com/post/2c9c66_563d9f4', 0, 1423232648),
(61, 'http://sexy.faceks.com/post/2c9c66_563d9ed', 0, 1423232648),
(62, 'http://sexy.faceks.com/post/2c9c66_563d9e6', 0, 1423232648),
(63, 'http://sexy.faceks.com/post/2c9c66_563d9d3', 0, 1423232648),
(64, 'http://sexy.faceks.com/post/2c9c66_563d9c0', 0, 1423232648),
(65, 'http://sexy.faceks.com/post/2c9c66_563d9a0', 0, 1423232648),
(66, 'http://sexy.faceks.com/post/2c9c66_563d982', 0, 1423232648),
(67, 'http://sexy.faceks.com/post/2c9c66_5593a31', 0, 1423232648),
(68, 'http://sexy.faceks.com/post/2c9c66_5593a15', 0, 1423232648),
(69, 'http://sexy.faceks.com/post/2c9c66_55939dd', 0, 1423232648),
(70, 'http://sexy.faceks.com/post/2c9c66_55939c6', 0, 1423232648),
(71, 'http://sexy.faceks.com/post/2c9c66_54a3875', 0, 1423232648),
(72, 'http://sexy.faceks.com/post/2c9c66_549cddb', 0, 1423232648),
(73, 'http://sexy.faceks.com/post/2c9c66_549cdb9', 0, 1423232648),
(74, 'http://sexy.faceks.com/post/2c9c66_549cdae', 0, 1423232648),
(75, 'http://sexy.faceks.com/post/2c9c66_549cd3c', 0, 1423232648),
(76, 'http://sexy.faceks.com/post/2c9c66_5328b69', 0, 1423232648),
(77, 'http://sexy.faceks.com/post/2c9c66_53289ee', 0, 1423232648),
(78, 'http://sexy.faceks.com/post/2c9c66_5327d75', 0, 1423232648),
(79, 'http://sexy.faceks.com/post/2c9c66_5323ecb', 0, 1423232648),
(80, 'http://sexy.faceks.com/post/2c9c66_5323e07', 0, 1423232648),
(81, 'http://sexy.faceks.com/post/2c9c66_5323d65', 0, 1423232648),
(82, 'http://sexy.faceks.com/post/2c9c66_509a689', 0, 1423232648),
(83, 'http://sexy.faceks.com/post/2c9c66_509a684', 0, 1423232648),
(84, 'http://sexy.faceks.com/post/2c9c66_509a67d', 0, 1423232648),
(85, 'http://sexy.faceks.com/post/2c9c66_509a66e', 0, 1423232648),
(86, 'http://sexy.faceks.com/post/2c9c66_504e7ef', 0, 1423232648),
(87, 'http://sexy.faceks.com/post/2c9c66_504e7df', 0, 1423232648),
(88, 'http://sexy.faceks.com/post/2c9c66_504e7d2', 0, 1423232648),
(89, 'http://sexy.faceks.com/post/2c9c66_503dfb6', 0, 1423232648),
(90, 'http://sexy.faceks.com/post/2c9c66_503dfa8', 0, 1423232648),
(91, 'http://sexy.faceks.com/post/2c9c66_503df99', 0, 1423232649),
(92, 'http://sexy.faceks.com/post/2c9c66_503df8d', 0, 1423232649),
(93, 'http://sexy.faceks.com/post/2c9c66_503df7f', 0, 1423232649),
(94, 'http://sexy.faceks.com/post/2c9c66_4fe9666', 0, 1423232649),
(95, 'http://sexy.faceks.com/post/2c9c66_4fe9663', 0, 1423232649),
(96, 'http://sexy.faceks.com/post/2c9c66_4fe965c', 0, 1423232649),
(97, 'http://sexy.faceks.com/post/2c9c66_4fe9657', 0, 1423232649),
(98, 'http://sexy.faceks.com/post/2c9c66_4fe9652', 0, 1423232649),
(99, 'http://sexy.faceks.com/post/2c9c66_4fe964d', 0, 1423232649),
(100, 'http://sexy.faceks.com/post/2c9c66_4fe9645', 0, 1423232649),
(101, 'http://sexy.faceks.com/post/2c9c66_4fe963f', 0, 1423232649),
(102, 'http://sexy.faceks.com/post/2c9c66_4fe9639', 0, 1423232649),
(103, 'http://sexy.faceks.com/post/2c9c66_4f5b8a8', 0, 1423232649),
(104, 'http://sexy.faceks.com/post/2c9c66_4f5b899', 0, 1423232649),
(105, 'http://sexy.faceks.com/post/2c9c66_4f5b88d', 0, 1423232649),
(106, 'http://sexy.faceks.com/post/2c9c66_4f5b877', 0, 1423232649),
(107, 'http://sexy.faceks.com/post/2c9c66_4f5b872', 0, 1423232649),
(108, 'http://sexy.faceks.com/post/2c9c66_4f5b86d', 0, 1423232649),
(109, 'http://sexy.faceks.com/post/2c9c66_4dfeb6e', 0, 1423232649),
(110, 'http://sexy.faceks.com/post/2c9c66_4dfeb6a', 0, 1423232649),
(111, 'http://sexy.faceks.com/post/2c9c66_4dfeb62', 0, 1423232649),
(112, 'http://sexy.faceks.com/post/2c9c66_4dfeb5e', 0, 1423232649),
(113, 'http://sexy.faceks.com/post/2c9c66_4dfeb5b', 0, 1423232649),
(114, 'http://sexy.faceks.com/post/2c9c66_4dfeb52', 0, 1423232649),
(115, 'http://sexy.faceks.com/post/2c9c66_4d95fe4', 0, 1423232649),
(116, 'http://sexy.faceks.com/post/2c9c66_4d95fd7', 0, 1423232649),
(117, 'http://sexy.faceks.com/post/2c9c66_4d95fcc', 0, 1423232649),
(118, 'http://sexy.faceks.com/post/2c9c66_4d95fc1', 0, 1423232649),
(119, 'http://sexy.faceks.com/post/2c9c66_4d95fb5', 0, 1423232649),
(120, 'http://sexy.faceks.com/post/2c9c66_4c1ad79', 0, 1423232649),
(121, 'http://sexy.faceks.com/post/2c9c66_4c1ad70', 0, 1423232649),
(122, 'http://sexy.faceks.com/post/2c9c66_4c1ad67', 0, 1423232649),
(123, 'http://sexy.faceks.com/post/2c9c66_4c1ad5b', 0, 1423232649),
(124, 'http://sexy.faceks.com/post/2c9c66_4c1ad25', 0, 1423232649),
(125, 'http://sexy.faceks.com/post/2c9c66_4c1ad17', 0, 1423232649),
(126, 'http://sexy.faceks.com/post/2c9c66_4b8e851', 0, 1423232649),
(127, 'http://sexy.faceks.com/post/2c9c66_4b8e846', 0, 1423232649),
(128, 'http://sexy.faceks.com/post/2c9c66_4b8e831', 0, 1423232649),
(129, 'http://sexy.faceks.com/post/2c9c66_4b8e826', 0, 1423232649),
(130, 'http://sexy.faceks.com/post/2c9c66_4b8e817', 0, 1423232649),
(131, 'http://sexy.faceks.com/post/2c9c66_4b8e804', 0, 1423232649),
(132, 'http://sexy.faceks.com/post/2c9c66_4b8e7ee', 0, 1423232649),
(133, 'http://sexy.faceks.com/post/2c9c66_4abf0e2', 0, 1423232649),
(134, 'http://sexy.faceks.com/post/2c9c66_4abf0db', 0, 1423232649),
(135, 'http://sexy.faceks.com/post/2c9c66_4abf0d5', 0, 1423232649),
(136, 'http://sexy.faceks.com/post/2c9c66_4abf0ca', 0, 1423232649),
(137, 'http://sexy.faceks.com/post/2c9c66_4abf0c0', 0, 1423232649),
(138, 'http://sexy.faceks.com/post/2c9c66_4893ac7', 0, 1423232649),
(139, 'http://sexy.faceks.com/post/2c9c66_4893abc', 0, 1423232649),
(140, 'http://sexy.faceks.com/post/2c9c66_4893ab6', 0, 1423232649),
(141, 'http://sexy.faceks.com/post/2c9c66_4893aa3', 0, 1423232649),
(142, 'http://sexy.faceks.com/post/2c9c66_46b2629', 0, 1423232649),
(143, 'http://sexy.faceks.com/post/2c9c66_46b261a', 0, 1423232649),
(144, 'http://sexy.faceks.com/post/2c9c66_46b2606', 0, 1423232649),
(145, 'http://sexy.faceks.com/post/2c9c66_44d4a5b', 0, 1423232649),
(146, 'http://sexy.faceks.com/post/2c9c66_44d4a4a', 0, 1423232649),
(147, 'http://sexy.faceks.com/post/2c9c66_44d4a40', 0, 1423232649),
(148, 'http://sexy.faceks.com/post/2c9c66_44d4a20', 0, 1423232649),
(149, 'http://sexy.faceks.com/post/2c9c66_27469d5', 0, 1423232649),
(150, 'http://sexy.faceks.com/post/2c9c66_2746816', 0, 1423232649),
(151, 'http://sexy.faceks.com/post/2c9c66_2744b04', 0, 1423232649),
(152, 'http://sexy.faceks.com/post/2c9c66_2744a1a', 0, 1423232649),
(153, 'http://sexy.faceks.com/post/2c9c66_272031e', 0, 1423232649),
(154, 'http://sexy.faceks.com/post/2c9c66_27202fe', 0, 1423232649),
(155, 'http://sexy.faceks.com/post/2c9c66_27202f2', 0, 1423232649),
(156, 'http://sexy.faceks.com/post/2c9c66_2707fb2', 0, 1423232649),
(157, 'http://sexy.faceks.com/post/2c9c66_2707f9c', 0, 1423232649),
(158, 'http://sexy.faceks.com/post/2c9c66_26c8c72', 0, 1423232649),
(159, 'http://sexy.faceks.com/post/2c9c66_269851e', 0, 1423232649),
(160, 'http://sexy.faceks.com/post/2c9c66_2698519', 0, 1423232649),
(161, 'http://sexy.faceks.com/post/2c9c66_2698512', 0, 1423232649),
(162, 'http://sexy.faceks.com/post/2c9c66_268e06d', 0, 1423232649),
(163, 'http://sexy.faceks.com/post/2c9c66_268e059', 0, 1423232649),
(164, 'http://sexy.faceks.com/post/2c9c66_268e048', 0, 1423232649),
(165, 'http://sexy.faceks.com/post/2c9c66_2673604', 0, 1423232649),
(166, 'http://sexy.faceks.com/post/2c9c66_26735ef', 0, 1423232649),
(167, 'http://sexy.faceks.com/post/2c9c66_26735e5', 0, 1423232649),
(168, 'http://sexy.faceks.com/post/2c9c66_24b6298', 0, 1423232649),
(169, 'http://sexy.faceks.com/post/2c9c66_24b627c', 0, 1423232649),
(170, 'http://sexy.faceks.com/post/2c9c66_24b6264', 0, 1423232649),
(171, 'http://sexy.faceks.com/post/2c9c66_249a716', 0, 1423232649),
(172, 'http://sexy.faceks.com/post/2c9c66_249a712', 0, 1423232649),
(173, 'http://sexy.faceks.com/post/2c9c66_2452f5e', 0, 1423232649),
(174, 'http://sexy.faceks.com/post/2c9c66_2452f55', 0, 1423232649),
(175, 'http://sexy.faceks.com/post/2c9c66_2452f37', 0, 1423232649),
(176, 'http://sexy.faceks.com/post/2c9c66_24274fa', 0, 1423232649),
(177, 'http://sexy.faceks.com/post/2c9c66_24274f1', 0, 1423232649),
(178, 'http://sexy.faceks.com/post/2c9c66_24274e3', 0, 1423232649),
(179, 'http://sexy.faceks.com/post/2c9c66_1a75893', 0, 1423232649),
(180, 'http://sexy.faceks.com/post/2c9c66_1a7588a', 0, 1423232649),
(181, 'http://sexy.faceks.com/post/2c9c66_1a75880', 0, 1423232649),
(182, 'http://sexy.faceks.com/post/2c9c66_193959e', 0, 1423232649),
(183, 'http://sexy.faceks.com/post/2c9c66_1939588', 0, 1423232649),
(184, 'http://sexy.faceks.com/post/2c9c66_193956c', 0, 1423232649),
(185, 'http://sexy.faceks.com/post/2c9c66_1938dc1', 0, 1423232649),
(186, 'http://sexy.faceks.com/post/2c9c66_18e371b', 0, 1423232649),
(187, 'http://sexy.faceks.com/post/2c9c66_18e36f5', 0, 1423232649),
(188, 'http://sexy.faceks.com/post/2c9c66_18e36d3', 0, 1423232649),
(189, 'http://sexy.faceks.com/post/2c9c66_18d3817', 0, 1423232649),
(190, 'http://sexy.faceks.com/post/2c9c66_18d380e', 0, 1423232649),
(191, 'http://sexy.faceks.com/post/2c9c66_18d37fb', 0, 1423232649),
(192, 'http://sexy.faceks.com/post/2c9c66_186afe3', 0, 1423232649),
(193, 'http://sexy.faceks.com/post/2c9c66_186afcd', 0, 1423232649),
(194, 'http://sexy.faceks.com/post/2c9c66_1869f96', 0, 1423232649),
(195, 'http://sexy.faceks.com/post/2c9c66_18315cb', 0, 1423232649),
(196, 'http://sexy.faceks.com/post/2c9c66_1830619', 0, 1423232649),
(197, 'http://sexy.faceks.com/post/2c9c66_1830600', 0, 1423232649),
(198, 'http://sexy.faceks.com/post/2c9c66_17ae889', 0, 1423232649),
(199, 'http://sexy.faceks.com/post/2c9c66_17ae87d', 0, 1423232649),
(200, 'http://sexy.faceks.com/post/2c9c66_17ae870', 0, 1423232649),
(201, 'http://sexy.faceks.com/post/2c9c66_1784f48', 0, 1423232649),
(202, 'http://sexy.faceks.com/post/2c9c66_1784f34', 0, 1423232649),
(203, 'http://sexy.faceks.com/post/2c9c66_1784f1d', 0, 1423232649),
(204, 'http://sexy.faceks.com/post/2c9c66_1711b31', 0, 1423232649),
(205, 'http://sexy.faceks.com/post/2c9c66_1711b24', 0, 1423232649),
(206, 'http://sexy.faceks.com/post/2c9c66_1711b10', 0, 1423232649),
(207, 'http://sexy.faceks.com/post/2c9c66_16f1264', 0, 1423232649),
(208, 'http://sexy.faceks.com/post/2c9c66_16f1256', 0, 1423232649),
(209, 'http://sexy.faceks.com/post/2c9c66_16f123e', 0, 1423232649),
(210, 'http://sexy.faceks.com/post/2c9c66_16e5e5c', 0, 1423232649),
(211, 'http://sexy.faceks.com/post/2c9c66_16df35b', 0, 1423232650),
(212, 'http://sexy.faceks.com/post/2c9c66_16df34b', 0, 1423232650),
(213, 'http://sexy.faceks.com/post/2c9c66_16b420a', 0, 1423232650),
(214, 'http://sexy.faceks.com/post/2c9c66_16b41d0', 0, 1423232650),
(215, 'http://sexy.faceks.com/post/2c9c66_16b41a2', 0, 1423232650),
(216, 'http://sexy.faceks.com/post/2c9c66_16b4122', 0, 1423232650),
(217, 'http://sexy.faceks.com/post/2c9c66_16a0879', 0, 1423232650),
(218, 'http://sexy.faceks.com/post/2c9c66_16a085f', 0, 1423232650),
(219, 'http://sexy.faceks.com/post/2c9c66_16a0854', 0, 1423232650),
(220, 'http://sexy.faceks.com/post/2c9c66_16934f2', 0, 1423232650),
(221, 'http://sexy.faceks.com/post/2c9c66_167eb12', 0, 1423232650),
(222, 'http://sexy.faceks.com/post/2c9c66_167eb00', 0, 1423232650),
(223, 'http://sexy.faceks.com/post/2c9c66_167eae6', 0, 1423232650),
(224, 'http://sexy.faceks.com/post/2c9c66_167ead8', 0, 1423232650),
(225, 'http://sexy.faceks.com/post/2c9c66_167eac4', 0, 1423232650),
(226, 'http://sexy.faceks.com/post/2c9c66_16638ef', 0, 1423232650),
(227, 'http://sexy.faceks.com/post/2c9c66_16638d8', 0, 1423232650),
(228, 'http://sexy.faceks.com/post/2c9c66_16638c6', 0, 1423232650),
(229, 'http://sexy.faceks.com/post/2c9c66_16638c0', 0, 1423232650),
(230, 'http://sexy.faceks.com/post/2c9c66_16638ad', 0, 1423232650),
(231, 'http://sexy.faceks.com/post/2c9c66_16638a2', 0, 1423232650),
(232, 'http://sexy.faceks.com/post/2c9c66_162a408', 0, 1423232650),
(233, 'http://sexy.faceks.com/post/2c9c66_162a3f8', 0, 1423232650),
(234, 'http://sexy.faceks.com/post/2c9c66_162a3f1', 0, 1423232650),
(235, 'http://sexy.faceks.com/post/2c9c66_1619c73', 0, 1423232650),
(236, 'http://sexy.faceks.com/post/2c9c66_1619c58', 0, 1423232650),
(237, 'http://sexy.faceks.com/post/2c9c66_1619c48', 0, 1423232650),
(238, 'http://sexy.faceks.com/post/2c9c66_1608634', 0, 1423232650),
(239, 'http://sexy.faceks.com/post/2c9c66_1607288', 0, 1423232650),
(240, 'http://sexy.faceks.com/post/2c9c66_1607275', 0, 1423232650),
(241, 'http://sexy.faceks.com/post/2c9c66_160725a', 0, 1423232650),
(242, 'http://sexy.faceks.com/post/2c9c66_15f6221', 0, 1423232650),
(243, 'http://sexy.faceks.com/post/2c9c66_15f6208', 0, 1423232650),
(244, 'http://sexy.faceks.com/post/2c9c66_15f61e6', 0, 1423232650),
(245, 'http://sexy.faceks.com/post/2c9c66_15f61a4', 0, 1423232650),
(246, 'http://sexy.faceks.com/post/2c9c66_15c8634', 0, 1423232650),
(247, 'http://sexy.faceks.com/post/2c9c66_15c85f4', 0, 1423232650),
(248, 'http://sexy.faceks.com/post/2c9c66_15c85c3', 0, 1423232650),
(249, 'http://sexy.faceks.com/post/2c9c66_15c8567', 0, 1423232650),
(250, 'http://sexy.faceks.com/post/2c9c66_15c7f8e', 0, 1423232650),
(251, 'http://sexy.faceks.com/post/2c9c66_15b77ff', 0, 1423232650),
(252, 'http://sexy.faceks.com/post/2c9c66_15b77e9', 0, 1423232650),
(253, 'http://sexy.faceks.com/post/2c9c66_15b77bd', 0, 1423232650),
(254, 'http://sexy.faceks.com/post/2c9c66_15b77a1', 0, 1423232650),
(255, 'http://sexy.faceks.com/post/2c9c66_15b776f', 0, 1423232650),
(256, 'http://sexy.faceks.com/post/2c9c66_15b7735', 0, 1423232650),
(257, 'http://sexy.faceks.com/post/2c9c66_15968d7', 0, 1423232650),
(258, 'http://sexy.faceks.com/post/2c9c66_15968b7', 0, 1423232650),
(259, 'http://sexy.faceks.com/post/2c9c66_1596885', 0, 1423232650),
(260, 'http://sexy.faceks.com/post/2c9c66_1585f27', 0, 1423232650),
(261, 'http://sexy.faceks.com/post/2c9c66_1585f04', 0, 1423232650),
(262, 'http://sexy.faceks.com/post/2c9c66_1576ed2', 0, 1423232650),
(263, 'http://sexy.faceks.com/post/2c9c66_1576ec2', 0, 1423232650),
(264, 'http://sexy.faceks.com/post/2c9c66_1576eba', 0, 1423232650),
(265, 'http://sexy.faceks.com/post/2c9c66_1576ea4', 0, 1423232650),
(266, 'http://sexy.faceks.com/post/2c9c66_156391d', 0, 1423232650),
(267, 'http://sexy.faceks.com/post/2c9c66_156390d', 0, 1423232650),
(268, 'http://sexy.faceks.com/post/2c9c66_15638ef', 0, 1423232650),
(269, 'http://sexy.faceks.com/post/2c9c66_1534ac4', 0, 1423232650),
(270, 'http://sexy.faceks.com/post/2c9c66_1534ab1', 0, 1423232650),
(271, 'http://sexy.faceks.com/post/2c9c66_1534a9e', 0, 1423232650),
(272, 'http://sexy.faceks.com/post/2c9c66_1534a91', 0, 1423232650),
(273, 'http://sexy.faceks.com/post/2c9c66_1534a66', 0, 1423232650),
(274, 'http://sexy.faceks.com/post/2c9c66_1520c7a', 0, 1423232650),
(275, 'http://sexy.faceks.com/post/2c9c66_1520c0c', 0, 1423232650),
(276, 'http://sexy.faceks.com/post/2c9c66_1520bea', 0, 1423232650),
(277, 'http://sexy.faceks.com/post/2c9c66_1520bab', 0, 1423232650),
(278, 'http://sexy.faceks.com/post/2c9c66_15035bf', 0, 1423232650),
(279, 'http://sexy.faceks.com/post/2c9c66_150356d', 0, 1423232650),
(280, 'http://sexy.faceks.com/post/2c9c66_150352e', 0, 1423232650),
(281, 'http://sexy.faceks.com/post/2c9c66_15034b2', 0, 1423232650),
(282, 'http://sexy.faceks.com/post/2c9c66_1503470', 0, 1423232650),
(283, 'http://sexy.faceks.com/post/2c9c66_14f25ea', 0, 1423232650),
(284, 'http://sexy.faceks.com/post/2c9c66_14f1c5f', 0, 1423232650),
(285, 'http://sexy.faceks.com/post/2c9c66_14f1c48', 0, 1423232650),
(286, 'http://sexy.faceks.com/post/2c9c66_14f1c03', 0, 1423232650),
(287, 'http://sexy.faceks.com/post/2c9c66_14f1bf8', 0, 1423232650),
(288, 'http://sexy.faceks.com/post/2c9c66_14f1b4a', 0, 1423232650),
(289, 'http://sexy.faceks.com/post/2c9c66_14f1b32', 0, 1423232650),
(290, 'http://sexy.faceks.com/post/2c9c66_14d454e', 0, 1423232650),
(291, 'http://sexy.faceks.com/post/2c9c66_14d453d', 0, 1423232650),
(292, 'http://sexy.faceks.com/post/2c9c66_14d4508', 0, 1423232650),
(293, 'http://sexy.faceks.com/post/2c9c66_14d34bc', 0, 1423232650),
(294, 'http://sexy.faceks.com/post/2c9c66_14d3449', 0, 1423232650),
(295, 'http://sexy.faceks.com/post/2c9c66_14d283f', 0, 1423232650),
(296, 'http://sexy.faceks.com/post/2c9c66_14c4f30', 0, 1423232650),
(297, 'http://sexy.faceks.com/post/2c9c66_14c4ef7', 0, 1423232650),
(298, 'http://sexy.faceks.com/post/2c9c66_14c4ede', 0, 1423232650),
(299, 'http://sexy.faceks.com/post/2c9c66_14c4ebb', 0, 1423232650),
(300, 'http://sexy.faceks.com/post/2c9c66_14c4e92', 0, 1423232650),
(301, 'http://sexy.faceks.com/post/2c9c66_14a2fe7', 0, 1423232650),
(302, 'http://sexy.faceks.com/post/2c9c66_14a2fd0', 0, 1423232650),
(303, 'http://sexy.faceks.com/post/2c9c66_14a2fb3', 0, 1423232650),
(304, 'http://sexy.faceks.com/post/2c9c66_14a2fa3', 0, 1423232650),
(305, 'http://sexy.faceks.com/post/2c9c66_14a2f80', 0, 1423232650),
(306, 'http://sexy.faceks.com/post/2c9c66_14a2f6a', 0, 1423232650),
(307, 'http://sexy.faceks.com/post/2c9c66_14a2f42', 0, 1423232650),
(308, 'http://sexy.faceks.com/post/2c9c66_145c7e6', 0, 1423232650),
(309, 'http://sexy.faceks.com/post/2c9c66_145b1b2', 0, 1423232650),
(310, 'http://sexy.faceks.com/post/2c9c66_145b18c', 0, 1423232650),
(311, 'http://sexy.faceks.com/post/2c9c66_145b137', 0, 1423232650),
(312, 'http://sexy.faceks.com/post/2c9c66_141215a', 0, 1423232650),
(313, 'http://sexy.faceks.com/post/2c9c66_141212f', 0, 1423232650),
(314, 'http://sexy.faceks.com/post/2c9c66_141211f', 0, 1423232650),
(315, 'http://sexy.faceks.com/post/2c9c66_1412107', 0, 1423232650),
(316, 'http://sexy.faceks.com/post/2c9c66_13f2867', 0, 1423232650),
(317, 'http://sexy.faceks.com/post/2c9c66_13f230f', 0, 1423232650),
(318, 'http://sexy.faceks.com/post/2c9c66_13f1f41', 0, 1423232650),
(319, 'http://sexy.faceks.com/post/2c9c66_13f19a4', 0, 1423232650),
(320, 'http://sexy.faceks.com/post/2c9c66_13f15c7', 0, 1423232650),
(321, 'http://sexy.faceks.com/post/2c9c66_13f1463', 0, 1423232650),
(322, 'http://sexy.faceks.com/post/2c9c66_13d953f', 0, 1423232650),
(323, 'http://sexy.faceks.com/post/2c9c66_13d952d', 0, 1423232650),
(324, 'http://sexy.faceks.com/post/2c9c66_13d94ee', 0, 1423232650),
(325, 'http://sexy.faceks.com/post/2c9c66_13d8517', 0, 1423232650),
(326, 'http://sexy.faceks.com/post/2c9c66_13d850a', 0, 1423232650),
(327, 'http://sexy.faceks.com/post/2c9c66_13c7f9b', 0, 1423232650),
(328, 'http://sexy.faceks.com/post/2c9c66_13c7751', 0, 1423232650),
(329, 'http://sexy.faceks.com/post/2c9c66_13c76f4', 0, 1423232650),
(330, 'http://sexy.faceks.com/post/2c9c66_13c766d', 0, 1423232650),
(331, 'http://sexy.faceks.com/post/2c9c66_13c760e', 0, 1423232650),
(332, 'http://sexy.faceks.com/post/2c9c66_13c75fb', 0, 1423232650),
(333, 'http://sexy.faceks.com/post/2c9c66_1395e15', 0, 1423232650),
(334, 'http://sexy.faceks.com/post/2c9c66_1395def', 0, 1423232650),
(335, 'http://sexy.faceks.com/post/2c9c66_1395d80', 0, 1423232650),
(336, 'http://sexy.faceks.com/post/2c9c66_1395d6e', 0, 1423232650),
(337, 'http://sexy.faceks.com/post/2c9c66_1395d33', 0, 1423232650),
(338, 'http://sexy.faceks.com/post/2c9c66_1380c97', 0, 1423232650),
(339, 'http://sexy.faceks.com/post/2c9c66_1380c73', 0, 1423232650),
(340, 'http://sexy.faceks.com/post/2c9c66_1380c25', 0, 1423232650),
(341, 'http://sexy.faceks.com/post/2c9c66_1380c0e', 0, 1423232650),
(342, 'http://sexy.faceks.com/post/2c9c66_1380bbc', 0, 1423232650),
(343, 'http://sexy.faceks.com/post/2c9c66_1380ba7', 0, 1423232650),
(344, 'http://sexy.faceks.com/post/2c9c66_1380b8d', 0, 1423232650),
(345, 'http://sexy.faceks.com/post/2c9c66_136c9d6', 0, 1423232650),
(346, 'http://sexy.faceks.com/post/2c9c66_136c9bb', 0, 1423232650),
(347, 'http://sexy.faceks.com/post/2c9c66_136c974', 0, 1423232650),
(348, 'http://sexy.faceks.com/post/2c9c66_136c953', 0, 1423232650),
(349, 'http://sexy.faceks.com/post/2c9c66_136c92a', 0, 1423232650),
(350, 'http://sexy.faceks.com/post/2c9c66_136c910', 0, 1423232650),
(351, 'http://sexy.faceks.com/post/2c9c66_133fd09', 0, 1423232650),
(352, 'http://sexy.faceks.com/post/2c9c66_133fd06', 0, 1423232650),
(353, 'http://sexy.faceks.com/post/2c9c66_133fcf9', 0, 1423232650),
(354, 'http://sexy.faceks.com/post/2c9c66_133fcf3', 0, 1423232650),
(355, 'http://sexy.faceks.com/post/2c9c66_133fcf0', 0, 1423232650),
(356, 'http://sexy.faceks.com/post/2c9c66_133be94', 0, 1423232650),
(357, 'http://sexy.faceks.com/post/2c9c66_133be87', 0, 1423232650),
(358, 'http://sexy.faceks.com/post/2c9c66_133be6d', 0, 1423232650),
(359, 'http://sexy.faceks.com/post/2c9c66_133be4d', 0, 1423232650),
(360, 'http://sexy.faceks.com/post/2c9c66_133be14', 0, 1423232650),
(361, 'http://sexy.faceks.com/post/2c9c66_13233e4', 0, 1423232651),
(362, 'http://sexy.faceks.com/post/2c9c66_13233da', 0, 1423232651),
(363, 'http://sexy.faceks.com/post/2c9c66_13233c7', 0, 1423232651),
(364, 'http://sexy.faceks.com/post/2c9c66_13233b2', 0, 1423232651),
(365, 'http://sexy.faceks.com/post/2c9c66_13233a3', 0, 1423232651),
(366, 'http://sexy.faceks.com/post/2c9c66_1323392', 0, 1423232651),
(367, 'http://sexy.faceks.com/post/2c9c66_12f7343', 0, 1423232651),
(368, 'http://sexy.faceks.com/post/2c9c66_12f732d', 0, 1423232651),
(369, 'http://sexy.faceks.com/post/2c9c66_12f72ec', 0, 1423232651),
(370, 'http://sexy.faceks.com/post/2c9c66_12f72cc', 0, 1423232651),
(371, 'http://sexy.faceks.com/post/2c9c66_12f72ac', 0, 1423232651),
(372, 'http://sexy.faceks.com/post/2c9c66_12f728e', 0, 1423232651),
(373, 'http://sexy.faceks.com/post/2c9c66_12f7281', 0, 1423232651),
(374, 'http://sexy.faceks.com/post/2c9c66_12f7268', 0, 1423232651),
(375, 'http://sexy.faceks.com/post/2c9c66_12e1f0b', 0, 1423232651),
(376, 'http://sexy.faceks.com/post/2c9c66_12e1ef3', 0, 1423232651),
(377, 'http://sexy.faceks.com/post/2c9c66_12e1ee6', 0, 1423232651),
(378, 'http://sexy.faceks.com/post/2c9c66_12e1ecb', 0, 1423232651),
(379, 'http://sexy.faceks.com/post/2c9c66_12e1ea9', 0, 1423232651),
(380, 'http://sexy.faceks.com/post/2c9c66_12e1e45', 0, 1423232651),
(381, 'http://sexy.faceks.com/post/2c9c66_12c362f', 0, 1423232651),
(382, 'http://sexy.faceks.com/post/2c9c66_12c3615', 0, 1423232651),
(383, 'http://sexy.faceks.com/post/2c9c66_12c360a', 0, 1423232651),
(384, 'http://sexy.faceks.com/post/2c9c66_12c35f7', 0, 1423232651),
(385, 'http://sexy.faceks.com/post/2c9c66_12c35e3', 0, 1423232651),
(386, 'http://sexy.faceks.com/post/2c9c66_12c35cb', 0, 1423232651),
(387, 'http://sexy.faceks.com/post/2c9c66_12c35bf', 0, 1423232651),
(388, 'http://sexy.faceks.com/post/2c9c66_12a1ac4', 0, 1423232651),
(389, 'http://sexy.faceks.com/post/2c9c66_12a1abb', 0, 1423232651),
(390, 'http://sexy.faceks.com/post/2c9c66_12a1aa8', 0, 1423232651),
(391, 'http://sexy.faceks.com/post/2c9c66_126a34b', 0, 1423232651),
(392, 'http://sexy.faceks.com/post/2c9c66_126a31b', 0, 1423232651),
(393, 'http://sexy.faceks.com/post/2c9c66_126a2ef', 0, 1423232651),
(394, 'http://sexy.faceks.com/post/2c9c66_125f675', 0, 1423232651),
(395, 'http://sexy.faceks.com/post/2c9c66_124c00d', 0, 1423232651),
(396, 'http://sexy.faceks.com/post/2c9c66_124bfff', 0, 1423232651),
(397, 'http://sexy.faceks.com/post/2c9c66_124bff0', 0, 1423232651),
(398, 'http://sexy.faceks.com/post/2c9c66_124bece', 0, 1423232651),
(399, 'http://sexy.faceks.com/post/2c9c66_124be82', 0, 1423232651),
(400, 'http://sexy.faceks.com/post/2c9c66_124be63', 0, 1423232651),
(401, 'http://sexy.faceks.com/post/2c9c66_124be4f', 0, 1423232651),
(402, 'http://sexy.faceks.com/post/2c9c66_124bdc4', 0, 1423232651),
(403, 'http://sexy.faceks.com/post/2c9c66_1226a6c', 0, 1423232651),
(404, 'http://sexy.faceks.com/post/2c9c66_1226a62', 0, 1423232651),
(405, 'http://sexy.faceks.com/post/2c9c66_1226a51', 0, 1423232651),
(406, 'http://sexy.faceks.com/post/2c9c66_1226a31', 0, 1423232651),
(407, 'http://sexy.faceks.com/post/2c9c66_12269cb', 0, 1423232651),
(408, 'http://sexy.faceks.com/post/2c9c66_12269b3', 0, 1423232651),
(409, 'http://sexy.faceks.com/post/2c9c66_1226990', 0, 1423232651),
(410, 'http://sexy.faceks.com/post/2c9c66_1210de3', 0, 1423232651),
(411, 'http://sexy.faceks.com/post/2c9c66_1210ddb', 0, 1423232651),
(412, 'http://sexy.faceks.com/post/2c9c66_1210da1', 0, 1423232651),
(413, 'http://sexy.faceks.com/post/2c9c66_1210d9a', 0, 1423232651),
(414, 'http://sexy.faceks.com/post/2c9c66_1210d97', 0, 1423232651),
(415, 'http://sexy.faceks.com/post/2c9c66_1210d86', 0, 1423232651),
(416, 'http://sexy.faceks.com/post/2c9c66_1210d77', 0, 1423232651),
(417, 'http://sexy.faceks.com/post/2c9c66_1210d70', 0, 1423232651),
(418, 'http://sexy.faceks.com/post/2c9c66_1210d62', 0, 1423232651),
(419, 'http://sexy.faceks.com/post/2c9c66_1210d5a', 0, 1423232651),
(420, 'http://sexy.faceks.com/post/2c9c66_11fe9c5', 0, 1423232651),
(421, 'http://sexy.faceks.com/post/2c9c66_11fe9b3', 0, 1423232651),
(422, 'http://sexy.faceks.com/post/2c9c66_11fe99c', 0, 1423232651),
(423, 'http://sexy.faceks.com/post/2c9c66_11fe990', 0, 1423232651),
(424, 'http://sexy.faceks.com/post/2c9c66_11fe978', 0, 1423232651),
(425, 'http://sexy.faceks.com/post/2c9c66_11efb30', 0, 1423232651),
(426, 'http://sexy.faceks.com/post/2c9c66_11efb12', 0, 1423232651),
(427, 'http://sexy.faceks.com/post/2c9c66_11efafb', 0, 1423232651),
(428, 'http://sexy.faceks.com/post/2c9c66_11efae1', 0, 1423232651),
(429, 'http://sexy.faceks.com/post/2c9c66_11efad4', 0, 1423232651),
(430, 'http://sexy.faceks.com/post/2c9c66_11efabc', 0, 1423232651),
(431, 'http://sexy.faceks.com/post/2c9c66_11dff0e', 0, 1423232651),
(432, 'http://sexy.faceks.com/post/2c9c66_11dff04', 0, 1423232651),
(433, 'http://sexy.faceks.com/post/2c9c66_11dfeee', 0, 1423232651),
(434, 'http://sexy.faceks.com/post/2c9c66_11dfedb', 0, 1423232651),
(435, 'http://sexy.faceks.com/post/2c9c66_11def29', 0, 1423232651),
(436, 'http://sexy.faceks.com/post/2c9c66_11def22', 0, 1423232651),
(437, 'http://sexy.faceks.com/post/2c9c66_11def0b', 0, 1423232651),
(438, 'http://sexy.faceks.com/post/2c9c66_11deef4', 0, 1423232651),
(439, 'http://sexy.faceks.com/post/2c9c66_11c8fea', 0, 1423232651),
(440, 'http://sexy.faceks.com/post/2c9c66_11c8fe7', 0, 1423232651),
(441, 'http://sexy.faceks.com/post/2c9c66_11c8fe1', 0, 1423232651),
(442, 'http://sexy.faceks.com/post/2c9c66_11c8fde', 0, 1423232651),
(443, 'http://sexy.faceks.com/post/2c9c66_11c8fd6', 0, 1423232651),
(444, 'http://sexy.faceks.com/post/2c9c66_11c8fcd', 0, 1423232651),
(445, 'http://sexy.faceks.com/post/2c9c66_11c8fc6', 0, 1423232651),
(446, 'http://sexy.faceks.com/post/2c9c66_11ab000', 0, 1423232651),
(447, 'http://sexy.faceks.com/post/2c9c66_11aaffb', 0, 1423232651),
(448, 'http://sexy.faceks.com/post/2c9c66_11aaff8', 0, 1423232651),
(449, 'http://sexy.faceks.com/post/2c9c66_11aaff1', 0, 1423232651),
(450, 'http://sexy.faceks.com/post/2c9c66_11aafef', 0, 1423232651),
(451, 'http://sexy.faceks.com/post/2c9c66_11aafe2', 0, 1423232651),
(452, 'http://sexy.faceks.com/post/2c9c66_1194ece', 0, 1423232651),
(453, 'http://sexy.faceks.com/post/2c9c66_1192e69', 0, 1423232651),
(454, 'http://sexy.faceks.com/post/2c9c66_117dcdb', 0, 1423232651),
(455, 'http://sexy.faceks.com/post/2c9c66_117dccf', 0, 1423232651),
(456, 'http://sexy.faceks.com/post/2c9c66_117dcb8', 0, 1423232651),
(457, 'http://sexy.faceks.com/post/2c9c66_117dcb1', 0, 1423232651),
(458, 'http://sexy.faceks.com/post/2c9c66_117dca9', 0, 1423232651),
(459, 'http://sexy.faceks.com/post/2c9c66_115a76a', 0, 1423232651),
(460, 'http://sexy.faceks.com/post/2c9c66_115a762', 0, 1423232651),
(461, 'http://sexy.faceks.com/post/2c9c66_115a752', 0, 1423232651),
(462, 'http://sexy.faceks.com/post/2c9c66_115a73d', 0, 1423232651),
(463, 'http://sexy.faceks.com/post/2c9c66_115a71d', 0, 1423232651),
(464, 'http://sexy.faceks.com/post/2c9c66_115a6fa', 0, 1423232651),
(465, 'http://sexy.faceks.com/post/2c9c66_115a6e6', 0, 1423232651),
(466, 'http://sexy.faceks.com/post/2c9c66_1142b6b', 0, 1423232651),
(467, 'http://sexy.faceks.com/post/2c9c66_113011b', 0, 1423232651),
(468, 'http://sexy.faceks.com/post/2c9c66_1130106', 0, 1423232651),
(469, 'http://sexy.faceks.com/post/2c9c66_1130836', 0, 1423232651),
(470, 'http://sexy.faceks.com/post/2c9c66_1130757', 0, 1423232651),
(471, 'http://sexy.faceks.com/post/2c9c66_113073c', 0, 1423232651),
(472, 'http://sexy.faceks.com/post/2c9c66_1130727', 0, 1423232651),
(473, 'http://sexy.faceks.com/post/2c9c66_113071a', 0, 1423232651),
(474, 'http://sexy.faceks.com/post/2c9c66_111b5b8', 0, 1423232651),
(475, 'http://sexy.faceks.com/post/2c9c66_111b5b0', 0, 1423232651),
(476, 'http://sexy.faceks.com/post/2c9c66_111b5a7', 0, 1423232651),
(477, 'http://sexy.faceks.com/post/2c9c66_111b594', 0, 1423232651),
(478, 'http://sexy.faceks.com/post/2c9c66_111b58a', 0, 1423232651),
(479, 'http://sexy.faceks.com/post/2c9c66_111b574', 0, 1423232651),
(480, 'http://sexy.faceks.com/post/2c9c66_10fe2e3', 0, 1423232652),
(481, 'http://sexy.faceks.com/post/2c9c66_10fe2d0', 0, 1423232652),
(482, 'http://sexy.faceks.com/post/2c9c66_10fe2bf', 0, 1423232652),
(483, 'http://sexy.faceks.com/post/2c9c66_10fe2a6', 0, 1423232652),
(484, 'http://sexy.faceks.com/post/2c9c66_10fe294', 0, 1423232652),
(485, 'http://sexy.faceks.com/post/2c9c66_10fe27d', 0, 1423232652),
(486, 'http://sexy.faceks.com/post/2c9c66_10b5e06', 0, 1423232652),
(487, 'http://sexy.faceks.com/post/2c9c66_10b5dee', 0, 1423232652),
(488, 'http://sexy.faceks.com/post/2c9c66_10b5dc4', 0, 1423232652),
(489, 'http://sexy.faceks.com/post/2c9c66_10b5db1', 0, 1423232652),
(490, 'http://sexy.faceks.com/post/2c9c66_10b5d81', 0, 1423232652),
(491, 'http://sexy.faceks.com/post/2c9c66_10b5d63', 0, 1423232652),
(492, 'http://sexy.faceks.com/post/2c9c66_10b45da', 0, 1423232652),
(493, 'http://sexy.faceks.com/post/2c9c66_10b45b1', 0, 1423232652),
(494, 'http://sexy.faceks.com/post/2c9c66_10b458e', 0, 1423232652),
(495, 'http://sexy.faceks.com/post/2c9c66_10b454c', 0, 1423232652),
(496, 'http://sexy.faceks.com/post/2c9c66_10a1655', 0, 1423232652),
(497, 'http://sexy.faceks.com/post/2c9c66_10a1637', 0, 1423232652),
(498, 'http://sexy.faceks.com/post/2c9c66_10a161f', 0, 1423232652),
(499, 'http://sexy.faceks.com/post/2c9c66_10a1606', 0, 1423232652),
(500, 'http://sexy.faceks.com/post/2c9c66_10a158d', 0, 1423232652),
(501, 'http://sexy.faceks.com/post/2c9c66_108d20d', 0, 1423232652),
(502, 'http://sexy.faceks.com/post/2c9c66_108d1f4', 0, 1423232652),
(503, 'http://sexy.faceks.com/post/2c9c66_108d1de', 0, 1423232652),
(504, 'http://sexy.faceks.com/post/2c9c66_108d1be', 0, 1423232652),
(505, 'http://sexy.faceks.com/post/2c9c66_108d1a9', 0, 1423232652),
(506, 'http://sexy.faceks.com/post/2c9c66_10790fc', 0, 1423232652),
(507, 'http://sexy.faceks.com/post/2c9c66_10790f5', 0, 1423232652),
(508, 'http://sexy.faceks.com/post/2c9c66_10790ef', 0, 1423232652),
(509, 'http://sexy.faceks.com/post/2c9c66_10790c6', 0, 1423232652),
(510, 'http://sexy.faceks.com/post/2c9c66_10790b4', 0, 1423232652),
(511, 'http://sexy.faceks.com/post/2c9c66_1045c02', 0, 1423232652),
(512, 'http://sexy.faceks.com/post/2c9c66_1045bf6', 0, 1423232652),
(513, 'http://sexy.faceks.com/post/2c9c66_1045bec', 0, 1423232652),
(514, 'http://sexy.faceks.com/post/2c9c66_1045bdd', 0, 1423232652),
(515, 'http://sexy.faceks.com/post/2c9c66_1045bc2', 0, 1423232652),
(516, 'http://sexy.faceks.com/post/2c9c66_1045bb3', 0, 1423232652),
(517, 'http://sexy.faceks.com/post/2c9c66_1045b93', 0, 1423232652),
(518, 'http://sexy.faceks.com/post/2c9c66_1045b77', 0, 1423232652),
(519, 'http://sexy.faceks.com/post/2c9c66_1036f8a', 0, 1423232652),
(520, 'http://sexy.faceks.com/post/2c9c66_1036f72', 0, 1423232652),
(521, 'http://sexy.faceks.com/post/2c9c66_1036f62', 0, 1423232652),
(522, 'http://sexy.faceks.com/post/2c9c66_1036f45', 0, 1423232652),
(523, 'http://sexy.faceks.com/post/2c9c66_1036f2c', 0, 1423232652),
(524, 'http://sexy.faceks.com/post/2c9c66_1036ee3', 0, 1423232652),
(525, 'http://sexy.faceks.com/post/2c9c66_1036ed4', 0, 1423232652),
(526, 'http://sexy.faceks.com/post/2c9c66_1036ebe', 0, 1423232652),
(527, 'http://sexy.faceks.com/post/2c9c66_1036eaa', 0, 1423232652),
(528, 'http://sexy.faceks.com/post/2c9c66_1026b29', 0, 1423232652),
(529, 'http://sexy.faceks.com/post/2c9c66_1026b19', 0, 1423232652),
(530, 'http://sexy.faceks.com/post/2c9c66_1026b0a', 0, 1423232652),
(531, 'http://sexy.faceks.com/post/2c9c66_1026af2', 0, 1423232652),
(532, 'http://sexy.faceks.com/post/2c9c66_1026ae0', 0, 1423232652),
(533, 'http://sexy.faceks.com/post/2c9c66_1026acb', 0, 1423232652),
(534, 'http://sexy.faceks.com/post/2c9c66_1026aae', 0, 1423232652),
(535, 'http://sexy.faceks.com/post/2c9c66_1026a80', 0, 1423232652),
(536, 'http://sexy.faceks.com/post/2c9c66_1015de9', 0, 1423232652),
(537, 'http://sexy.faceks.com/post/2c9c66_1015de5', 0, 1423232652),
(538, 'http://sexy.faceks.com/post/2c9c66_1015ddc', 0, 1423232652),
(539, 'http://sexy.faceks.com/post/2c9c66_1015dbf', 0, 1423232652),
(540, 'http://sexy.faceks.com/post/2c9c66_1015db7', 0, 1423232652),
(541, 'http://sexy.faceks.com/post/2c9c66_1015da9', 0, 1423232652),
(542, 'http://sexy.faceks.com/post/2c9c66_1015da1', 0, 1423232652),
(543, 'http://sexy.faceks.com/post/2c9c66_100d6e4', 0, 1423232652),
(544, 'http://sexy.faceks.com/post/2c9c66_ffd99e', 0, 1423232652),
(545, 'http://sexy.faceks.com/post/2c9c66_ffd979', 0, 1423232652),
(546, 'http://sexy.faceks.com/post/2c9c66_ffd969', 0, 1423232652),
(547, 'http://sexy.faceks.com/post/2c9c66_fee05b', 0, 1423232652),
(548, 'http://sexy.faceks.com/post/2c9c66_fe1cab', 0, 1423232652),
(549, 'http://sexy.faceks.com/post/2c9c66_fe1c9f', 0, 1423232652),
(550, 'http://sexy.faceks.com/post/2c9c66_fe1c88', 0, 1423232652),
(551, 'http://sexy.faceks.com/post/2c9c66_fe1c7b', 0, 1423232652),
(552, 'http://sexy.faceks.com/post/2c9c66_fe1c68', 0, 1423232652),
(553, 'http://sexy.faceks.com/post/2c9c66_fe1c64', 0, 1423232652),
(554, 'http://sexy.faceks.com/post/2c9c66_fe1c32', 0, 1423232652),
(555, 'http://sexy.faceks.com/post/2c9c66_fe1c29', 0, 1423232652),
(556, 'http://sexy.faceks.com/post/2c9c66_fd3790', 0, 1423232652),
(557, 'http://sexy.faceks.com/post/2c9c66_fd3788', 0, 1423232652),
(558, 'http://sexy.faceks.com/post/2c9c66_fd377f', 0, 1423232652),
(559, 'http://sexy.faceks.com/post/2c9c66_fd3770', 0, 1423232652),
(560, 'http://sexy.faceks.com/post/2c9c66_fd3756', 0, 1423232652),
(561, 'http://sexy.faceks.com/post/2c9c66_fd3749', 0, 1423232652),
(562, 'http://sexy.faceks.com/post/2c9c66_fc61f1', 0, 1423232652),
(563, 'http://sexy.faceks.com/post/2c9c66_fc61d6', 0, 1423232652),
(564, 'http://sexy.faceks.com/post/2c9c66_fc618e', 0, 1423232652),
(565, 'http://sexy.faceks.com/post/2c9c66_fc6164', 0, 1423232652),
(566, 'http://sexy.faceks.com/post/2c9c66_fc5177', 0, 1423232652),
(567, 'http://sexy.faceks.com/post/2c9c66_fc5155', 0, 1423232652),
(568, 'http://sexy.faceks.com/post/2c9c66_fc513c', 0, 1423232652),
(569, 'http://sexy.faceks.com/post/2c9c66_fc5114', 0, 1423232652),
(570, 'http://sexy.faceks.com/post/2c9c66_fb4b84', 0, 1423232652),
(571, 'http://sexy.faceks.com/post/2c9c66_fb4b41', 0, 1423232652),
(572, 'http://sexy.faceks.com/post/2c9c66_fb4b32', 0, 1423232652),
(573, 'http://sexy.faceks.com/post/2c9c66_fb4b18', 0, 1423232652),
(574, 'http://sexy.faceks.com/post/2c9c66_fa716b', 0, 1423232652),
(575, 'http://sexy.faceks.com/post/2c9c66_fa7156', 0, 1423232652),
(576, 'http://sexy.faceks.com/post/2c9c66_fa61a3', 0, 1423232652),
(577, 'http://sexy.faceks.com/post/2c9c66_fa6190', 0, 1423232652),
(578, 'http://sexy.faceks.com/post/2c9c66_fa6181', 0, 1423232652),
(579, 'http://sexy.faceks.com/post/2c9c66_fa616c', 0, 1423232652),
(580, 'http://sexy.faceks.com/post/2c9c66_fa6145', 0, 1423232652),
(581, 'http://sexy.faceks.com/post/2c9c66_fa613a', 0, 1423232652),
(582, 'http://sexy.faceks.com/post/2c9c66_fa611c', 0, 1423232652),
(583, 'http://sexy.faceks.com/post/2c9c66_fa60f6', 0, 1423232652),
(584, 'http://sexy.faceks.com/post/2c9c66_f99ab7', 0, 1423232652),
(585, 'http://sexy.faceks.com/post/2c9c66_f99aaf', 0, 1423232652),
(586, 'http://sexy.faceks.com/post/2c9c66_f99aa3', 0, 1423232652),
(587, 'http://sexy.faceks.com/post/2c9c66_f99a8f', 0, 1423232652),
(588, 'http://sexy.faceks.com/post/2c9c66_f99a79', 0, 1423232652),
(589, 'http://sexy.faceks.com/post/2c9c66_f98eb3', 0, 1423232652),
(590, 'http://sexy.faceks.com/post/2c9c66_f8b885', 0, 1423232652),
(591, 'http://sexy.faceks.com/post/2c9c66_f8b87e', 0, 1423232652),
(592, 'http://sexy.faceks.com/post/2c9c66_f8b87b', 0, 1423232652),
(593, 'http://sexy.faceks.com/post/2c9c66_f8b874', 0, 1423232652),
(594, 'http://sexy.faceks.com/post/2c9c66_f8b865', 0, 1423232652),
(595, 'http://sexy.faceks.com/post/2c9c66_f8b85f', 0, 1423232652),
(596, 'http://sexy.faceks.com/post/2c9c66_f8b844', 0, 1423232652),
(597, 'http://sexy.faceks.com/post/2c9c66_f8b832', 0, 1423232652),
(598, 'http://sexy.faceks.com/post/2c9c66_f80d63', 0, 1423232652),
(599, 'http://sexy.faceks.com/post/2c9c66_f80d5a', 0, 1423232652),
(600, 'http://sexy.faceks.com/post/2c9c66_f80d41', 0, 1423232652),
(601, 'http://sexy.faceks.com/post/2c9c66_f80d3c', 0, 1423232652),
(602, 'http://sexy.faceks.com/post/2c9c66_f80d09', 0, 1423232652),
(603, 'http://sexy.faceks.com/post/2c9c66_f80d02', 0, 1423232652),
(604, 'http://sexy.faceks.com/post/2c9c66_f80cf8', 0, 1423232652),
(605, 'http://sexy.faceks.com/post/2c9c66_f72f53', 0, 1423232652),
(606, 'http://sexy.faceks.com/post/2c9c66_f72f3c', 0, 1423232652),
(607, 'http://sexy.faceks.com/post/2c9c66_f72f34', 0, 1423232652),
(608, 'http://sexy.faceks.com/post/2c9c66_f72f24', 0, 1423232652),
(609, 'http://sexy.faceks.com/post/2c9c66_f63f30', 0, 1423232652),
(610, 'http://sexy.faceks.com/post/2c9c66_f63f14', 0, 1423232652),
(611, 'http://sexy.faceks.com/post/2c9c66_f6334f', 0, 1423232652),
(612, 'http://sexy.faceks.com/post/2c9c66_f6333a', 0, 1423232652),
(613, 'http://sexy.faceks.com/post/2c9c66_f57393', 0, 1423232652),
(614, 'http://sexy.faceks.com/post/2c9c66_f57361', 0, 1423232652),
(615, 'http://sexy.faceks.com/post/2c9c66_f57355', 0, 1423232652),
(616, 'http://sexy.faceks.com/post/2c9c66_f5733f', 0, 1423232652),
(617, 'http://sexy.faceks.com/post/2c9c66_f57328', 0, 1423232652),
(618, 'http://sexy.faceks.com/post/2c9c66_f57300', 0, 1423232652),
(619, 'http://sexy.faceks.com/post/2c9c66_f572e6', 0, 1423232652),
(620, 'http://sexy.faceks.com/post/2c9c66_f3fe6b', 0, 1423232652),
(621, 'http://sexy.faceks.com/post/2c9c66_f3fe58', 0, 1423232652),
(622, 'http://sexy.faceks.com/post/2c9c66_f3fe4f', 0, 1423232652),
(623, 'http://sexy.faceks.com/post/2c9c66_f3fe47', 0, 1423232652),
(624, 'http://sexy.faceks.com/post/2c9c66_f3fe40', 0, 1423232652),
(625, 'http://sexy.faceks.com/post/2c9c66_f3cf92', 0, 1423232652),
(626, 'http://sexy.faceks.com/post/2c9c66_f3cf79', 0, 1423232652),
(627, 'http://sexy.faceks.com/post/2c9c66_f3cf61', 0, 1423232652),
(628, 'http://sexy.faceks.com/post/2c9c66_f3cf44', 0, 1423232653),
(629, 'http://sexy.faceks.com/post/2c9c66_f2cfd0', 0, 1423232653),
(630, 'http://sexy.faceks.com/post/2c9c66_f2cfc4', 0, 1423232653),
(631, 'http://sexy.faceks.com/post/2c9c66_f2cfbb', 0, 1423232653),
(632, 'http://sexy.faceks.com/post/2c9c66_f2cfa2', 0, 1423232653),
(633, 'http://sexy.faceks.com/post/2c9c66_f2cf58', 0, 1423232653),
(634, 'http://sexy.faceks.com/post/2c9c66_f2cf47', 0, 1423232653),
(635, 'http://sexy.faceks.com/post/2c9c66_f2cf32', 0, 1423232653),
(636, 'http://sexy.faceks.com/post/2c9c66_f2cf20', 0, 1423232653),
(637, 'http://sexy.faceks.com/post/2c9c66_f22658', 0, 1423232653),
(638, 'http://sexy.faceks.com/post/2c9c66_f22642', 0, 1423232653),
(639, 'http://sexy.faceks.com/post/2c9c66_f22634', 0, 1423232653),
(640, 'http://sexy.faceks.com/post/2c9c66_f22307', 0, 1423232653),
(641, 'http://sexy.faceks.com/post/2c9c66_f222f6', 0, 1423232653),
(642, 'http://sexy.faceks.com/post/2c9c66_f138c4', 0, 1423232653),
(643, 'http://sexy.faceks.com/post/2c9c66_f138b6', 0, 1423232653),
(644, 'http://sexy.faceks.com/post/2c9c66_f138ac', 0, 1423232653),
(645, 'http://sexy.faceks.com/post/2c9c66_f1389c', 0, 1423232653),
(646, 'http://sexy.faceks.com/post/2c9c66_f1388a', 0, 1423232653),
(647, 'http://sexy.faceks.com/post/2c9c66_f083e0', 0, 1423232653),
(648, 'http://sexy.faceks.com/post/2c9c66_f083ce', 0, 1423232653),
(649, 'http://sexy.faceks.com/post/2c9c66_f083c0', 0, 1423232653),
(650, 'http://sexy.faceks.com/post/2c9c66_f083b5', 0, 1423232653),
(651, 'http://sexy.faceks.com/post/2c9c66_f083a1', 0, 1423232653),
(652, 'http://sexy.faceks.com/post/2c9c66_f08397', 0, 1423232653),
(653, 'http://sexy.faceks.com/post/2c9c66_f08371', 0, 1423232653),
(654, 'http://sexy.faceks.com/post/2c9c66_f0835b', 0, 1423232653),
(655, 'http://sexy.faceks.com/post/2c9c66_f0834a', 0, 1423232653),
(656, 'http://sexy.faceks.com/post/2c9c66_f0833a', 0, 1423232653),
(657, 'http://sexy.faceks.com/post/2c9c66_ef8b9c', 0, 1423232653),
(658, 'http://sexy.faceks.com/post/2c9c66_ef8b84', 0, 1423232653),
(659, 'http://sexy.faceks.com/post/2c9c66_ef8b66', 0, 1423232653),
(660, 'http://sexy.faceks.com/post/2c9c66_ef8b42', 0, 1423232653),
(661, 'http://sexy.faceks.com/post/2c9c66_ef8b32', 0, 1423232653),
(662, 'http://sexy.faceks.com/post/2c9c66_ef8b1d', 0, 1423232653),
(663, 'http://sexy.faceks.com/post/2c9c66_ef8b0e', 0, 1423232653),
(664, 'http://sexy.faceks.com/post/2c9c66_edac2b', 0, 1423232653),
(665, 'http://sexy.faceks.com/post/2c9c66_edac24', 0, 1423232653),
(666, 'http://sexy.faceks.com/post/2c9c66_edac20', 0, 1423232653),
(667, 'http://sexy.faceks.com/post/2c9c66_edac16', 0, 1423232653),
(668, 'http://sexy.faceks.com/post/2c9c66_edac13', 0, 1423232653),
(669, 'http://sexy.faceks.com/post/2c9c66_edabe6', 0, 1423232653),
(670, 'http://sexy.faceks.com/post/2c9c66_edabda', 0, 1423232653),
(671, 'http://sexy.faceks.com/post/2c9c66_edabce', 0, 1423232653),
(672, 'http://sexy.faceks.com/post/2c9c66_edabc6', 0, 1423232653),
(673, 'http://sexy.faceks.com/post/2c9c66_eda3ee', 0, 1423232653),
(674, 'http://sexy.faceks.com/post/2c9c66_eda3db', 0, 1423232653),
(675, 'http://sexy.faceks.com/post/2c9c66_eda3d6', 0, 1423232653),
(676, 'http://sexy.faceks.com/post/2c9c66_ed3ca3', 0, 1423232653),
(677, 'http://sexy.faceks.com/post/2c9c66_ed3c9d', 0, 1423232653),
(678, 'http://sexy.faceks.com/post/2c9c66_ed3c8d', 0, 1423232653),
(679, 'http://sexy.faceks.com/post/2c9c66_ed3c84', 0, 1423232653),
(680, 'http://sexy.faceks.com/post/2c9c66_ed3c79', 0, 1423232653),
(681, 'http://sexy.faceks.com/post/2c9c66_ed3c6f', 0, 1423232653),
(682, 'http://sexy.faceks.com/post/2c9c66_ed3c60', 0, 1423232653),
(683, 'http://sexy.faceks.com/post/2c9c66_ec5c2f', 0, 1423232653),
(684, 'http://sexy.faceks.com/post/2c9c66_ec47ec', 0, 1423232653),
(685, 'http://sexy.faceks.com/post/2c9c66_ec47e5', 0, 1423232653),
(686, 'http://sexy.faceks.com/post/2c9c66_ec47d2', 0, 1423232653),
(687, 'http://sexy.faceks.com/post/2c9c66_ec47c2', 0, 1423232653),
(688, 'http://sexy.faceks.com/post/2c9c66_ec47bd', 0, 1423232653),
(689, 'http://sexy.faceks.com/post/2c9c66_eb84f6', 0, 1423232653),
(690, 'http://sexy.faceks.com/post/2c9c66_eb84e7', 0, 1423232653),
(691, 'http://sexy.faceks.com/post/2c9c66_eb84d0', 0, 1423232653),
(692, 'http://sexy.faceks.com/post/2c9c66_eb84ca', 0, 1423232653),
(693, 'http://sexy.faceks.com/post/2c9c66_eb8473', 0, 1423232653),
(694, 'http://sexy.faceks.com/post/2c9c66_eb8468', 0, 1423232653),
(695, 'http://sexy.faceks.com/post/2c9c66_eaca70', 0, 1423232653),
(696, 'http://sexy.faceks.com/post/2c9c66_eaca6a', 0, 1423232653),
(697, 'http://sexy.faceks.com/post/2c9c66_eaca5f', 0, 1423232653),
(698, 'http://sexy.faceks.com/post/2c9c66_eaca59', 0, 1423232653),
(699, 'http://sexy.faceks.com/post/2c9c66_eaca56', 0, 1423232653),
(700, 'http://sexy.faceks.com/post/2c9c66_eaca3c', 0, 1423232653),
(701, 'http://sexy.faceks.com/post/2c9c66_eaca36', 0, 1423232653),
(702, 'http://sexy.faceks.com/post/2c9c66_eaca2b', 0, 1423232653),
(703, 'http://sexy.faceks.com/post/2c9c66_e9bf97', 0, 1423232653),
(704, 'http://sexy.faceks.com/post/2c9c66_e9bf96', 0, 1423232653),
(705, 'http://sexy.faceks.com/post/2c9c66_e9bf8d', 0, 1423232653),
(706, 'http://sexy.faceks.com/post/2c9c66_e9bf85', 0, 1423232653),
(707, 'http://sexy.faceks.com/post/2c9c66_e9bf7e', 0, 1423232653),
(708, 'http://sexy.faceks.com/post/2c9c66_e9bf7a', 0, 1423232653),
(709, 'http://sexy.faceks.com/post/2c9c66_e9bf76', 0, 1423232653),
(710, 'http://sexy.faceks.com/post/2c9c66_e9bf70', 0, 1423232653),
(711, 'http://sexy.faceks.com/post/2c9c66_e9bf69', 0, 1423232653),
(712, 'http://sexy.faceks.com/post/2c9c66_e9bf64', 0, 1423232653),
(713, 'http://sexy.faceks.com/post/2c9c66_e8dc17', 0, 1423232653),
(714, 'http://sexy.faceks.com/post/2c9c66_e8dc0a', 0, 1423232653),
(715, 'http://sexy.faceks.com/post/2c9c66_e8dbfb', 0, 1423232653),
(716, 'http://sexy.faceks.com/post/2c9c66_e8dbf0', 0, 1423232653),
(717, 'http://sexy.faceks.com/post/2c9c66_e8dbe6', 0, 1423232653),
(718, 'http://sexy.faceks.com/post/2c9c66_e8dbda', 0, 1423232653),
(719, 'http://sexy.faceks.com/post/2c9c66_e8dbc1', 0, 1423232653),
(720, 'http://sexy.faceks.com/post/2c9c66_e8dbb6', 0, 1423232653),
(721, 'http://sexy.faceks.com/post/2c9c66_e8dbad', 0, 1423232653),
(722, 'http://sexy.faceks.com/post/2c9c66_e8dba1', 0, 1423232653),
(723, 'http://sexy.faceks.com/post/2c9c66_e8db97', 0, 1423232653),
(724, 'http://sexy.faceks.com/post/2c9c66_e8db8a', 0, 1423232653),
(725, 'http://sexy.faceks.com/post/2c9c66_e7f2e1', 0, 1423232653),
(726, 'http://sexy.faceks.com/post/2c9c66_e7f2d8', 0, 1423232653),
(727, 'http://sexy.faceks.com/post/2c9c66_e7f2be', 0, 1423232653),
(728, 'http://sexy.faceks.com/post/2c9c66_e7f2b4', 0, 1423232653),
(729, 'http://sexy.faceks.com/post/2c9c66_e7f2ae', 0, 1423232653),
(730, 'http://sexy.faceks.com/post/2c9c66_e7f2a5', 0, 1423232653),
(731, 'http://sexy.faceks.com/post/2c9c66_e7f29c', 0, 1423232653),
(732, 'http://sexy.faceks.com/post/2c9c66_e7f28e', 0, 1423232653),
(733, 'http://sexy.faceks.com/post/2c9c66_e7f26c', 0, 1423232653),
(734, 'http://sexy.faceks.com/post/2c9c66_e7f263', 0, 1423232653),
(735, 'http://sexy.faceks.com/post/2c9c66_e74fbc', 0, 1423232653),
(736, 'http://sexy.faceks.com/post/2c9c66_e74fb8', 0, 1423232653),
(737, 'http://sexy.faceks.com/post/2c9c66_e655fe', 0, 1423232653),
(738, 'http://sexy.faceks.com/post/2c9c66_e655f4', 0, 1423232653),
(739, 'http://sexy.faceks.com/post/2c9c66_e655f1', 0, 1423232653),
(740, 'http://sexy.faceks.com/post/2c9c66_e655ee', 0, 1423232653),
(741, 'http://sexy.faceks.com/post/2c9c66_e655eb', 0, 1423232653),
(742, 'http://sexy.faceks.com/post/2c9c66_e5e3da', 0, 1423232653),
(743, 'http://sexy.faceks.com/post/2c9c66_e5e3cb', 0, 1423232653),
(744, 'http://sexy.faceks.com/post/2c9c66_e5d7d6', 0, 1423232653),
(745, 'http://sexy.faceks.com/post/2c9c66_e5d7d0', 0, 1423232653),
(746, 'http://sexy.faceks.com/post/2c9c66_e5d7cc', 0, 1423232653),
(747, 'http://sexy.faceks.com/post/2c9c66_e5d7bd', 0, 1423232653),
(748, 'http://sexy.faceks.com/post/2c9c66_e48c43', 0, 1423232654),
(750, 'http://sexy.faceks.com/post/2c9c66_e48c34', 0, 1423232654),
(751, 'http://sexy.faceks.com/post/2c9c66_e48c2d', 0, 1423232654),
(752, 'http://sexy.faceks.com/post/2c9c66_e48c22', 0, 1423232654),
(753, 'http://sexy.faceks.com/post/2c9c66_e421f9', 0, 1423232654),
(754, 'http://sexy.faceks.com/post/2c9c66_e421e4', 0, 1423232654),
(755, 'http://sexy.faceks.com/post/2c9c66_e421c7', 0, 1423232654),
(756, 'http://sexy.faceks.com/post/2c9c66_e42190', 0, 1423232654),
(757, 'http://sexy.faceks.com/post/2c9c66_e42143', 0, 1423232654),
(758, 'http://sexy.faceks.com/post/2c9c66_e42138', 0, 1423232654),
(759, 'http://sexy.faceks.com/post/2c9c66_e2f3f2', 0, 1423232654),
(760, 'http://sexy.faceks.com/post/2c9c66_e2f3e6', 0, 1423232654),
(761, 'http://sexy.faceks.com/post/2c9c66_e2f3df', 0, 1423232654),
(762, 'http://sexy.faceks.com/post/2c9c66_e2f3cc', 0, 1423232654);
INSERT INTO `pes_get_url` (`url_id`, `url_link`, `url_status`, `url_addtime`) VALUES
(763, 'http://sexy.faceks.com/post/2c9c66_e2f3c4', 0, 1423232654),
(764, 'http://sexy.faceks.com/post/2c9c66_e2626b', 0, 1423232654),
(765, 'http://sexy.faceks.com/post/2c9c66_e2625a', 0, 1423232654),
(766, 'http://sexy.faceks.com/post/2c9c66_e26247', 0, 1423232654),
(767, 'http://sexy.faceks.com/post/2c9c66_e2623d', 0, 1423232654),
(768, 'http://sexy.faceks.com/post/2c9c66_e23997', 0, 1423232654),
(769, 'http://sexy.faceks.com/post/2c9c66_e2398a', 0, 1423232654),
(770, 'http://sexy.faceks.com/post/2c9c66_e2397e', 0, 1423232654),
(771, 'http://sexy.faceks.com/post/2c9c66_e2396e', 0, 1423232654),
(772, 'http://sexy.faceks.com/post/2c9c66_e2395a', 0, 1423232654),
(773, 'http://sexy.faceks.com/post/2c9c66_e23947', 0, 1423232654),
(774, 'http://sexy.faceks.com/post/2c9c66_e23930', 0, 1423232654),
(775, 'http://sexy.faceks.com/post/2c9c66_e238fc', 0, 1423232654),
(776, 'http://sexy.faceks.com/post/2c9c66_e238d2', 0, 1423232654),
(777, 'http://sexy.faceks.com/post/2c9c66_e15aa5', 0, 1423232654),
(778, 'http://sexy.faceks.com/post/2c9c66_e15aa1', 0, 1423232654),
(779, 'http://sexy.faceks.com/post/2c9c66_e15a9d', 0, 1423232654),
(780, 'http://sexy.faceks.com/post/2c9c66_e15a94', 0, 1423232654),
(781, 'http://sexy.faceks.com/post/2c9c66_e15834', 0, 1423232654),
(782, 'http://sexy.faceks.com/post/2c9c66_e0d564', 0, 1423232654),
(783, 'http://sexy.faceks.com/post/2c9c66_e0d55b', 0, 1423232654),
(784, 'http://sexy.faceks.com/post/2c9c66_e0d54c', 0, 1423232654),
(785, 'http://sexy.faceks.com/post/2c9c66_dfe866', 0, 1423232654),
(786, 'http://sexy.faceks.com/post/2c9c66_dfe862', 0, 1423232654),
(787, 'http://sexy.faceks.com/post/2c9c66_dfe859', 0, 1423232654),
(788, 'http://sexy.faceks.com/post/2c9c66_dfe853', 0, 1423232654),
(789, 'http://sexy.faceks.com/post/2c9c66_de45d5', 0, 1423232654),
(790, 'http://sexy.faceks.com/post/2c9c66_de45cf', 0, 1423232654),
(791, 'http://sexy.faceks.com/post/2c9c66_de45c3', 0, 1423232654),
(792, 'http://sexy.faceks.com/post/2c9c66_de45c0', 0, 1423232654),
(793, 'http://sexy.faceks.com/post/2c9c66_dd9ac5', 0, 1423232654),
(794, 'http://sexy.faceks.com/post/2c9c66_dd9ab6', 0, 1423232654),
(795, 'http://sexy.faceks.com/post/2c9c66_dd9aad', 0, 1423232654),
(796, 'http://sexy.faceks.com/post/2c9c66_dd9a98', 0, 1423232654),
(797, 'http://sexy.faceks.com/post/2c9c66_dd9a92', 0, 1423232654),
(798, 'http://sexy.faceks.com/post/2c9c66_dd8683', 0, 1423232654),
(799, 'http://sexy.faceks.com/post/2c9c66_dd866b', 0, 1423232654),
(800, 'http://sexy.faceks.com/post/2c9c66_dd0af0', 0, 1423232654),
(801, 'http://sexy.faceks.com/post/2c9c66_dd0ae9', 0, 1423232654),
(802, 'http://sexy.faceks.com/post/2c9c66_dd0ade', 0, 1423232654),
(803, 'http://sexy.faceks.com/post/2c9c66_dd0ad9', 0, 1423232654),
(804, 'http://sexy.faceks.com/post/2c9c66_dc61a9', 0, 1423232654),
(805, 'http://sexy.faceks.com/post/2c9c66_dc4e89', 0, 1423232654),
(806, 'http://sexy.faceks.com/post/2c9c66_dc1f3a', 0, 1423232654),
(807, 'http://sexy.faceks.com/post/2c9c66_dc1f2d', 0, 1423232654),
(808, 'http://sexy.faceks.com/post/2c9c66_dc1f07', 0, 1423232654),
(809, 'http://sexy.faceks.com/post/2c9c66_dc1ee1', 0, 1423232654),
(810, 'http://sexy.faceks.com/post/2c9c66_dc1ed3', 0, 1423232654),
(811, 'http://sexy.faceks.com/post/2c9c66_dc1ec4', 0, 1423232654),
(812, 'http://sexy.faceks.com/post/2c9c66_da18ed', 0, 1423232654),
(813, 'http://sexy.faceks.com/post/2c9c66_d0cf8a', 0, 1423232654),
(814, 'http://sexy.faceks.com/post/2c9c66_d0c4c7', 0, 1423232654),
(815, 'http://sexy.faceks.com/post/2c9c66_d0c46c', 0, 1423232654),
(816, 'http://sexy.faceks.com/post/2c9c66_d0c453', 0, 1423232654),
(817, 'http://sexy.faceks.com/post/2c9c66_d06d9d', 0, 1423232654),
(819, 'http://sexy.faceks.com/post/2c9c66_cda20f', 0, 1423232654),
(820, 'http://sexy.faceks.com/post/2c9c66_c846b3', 0, 1423232654),
(821, 'http://sexy.faceks.com/post/2c9c66_c792c4', 0, 1423232654),
(822, 'http://sexy.faceks.com/post/2c9c66_c7671b', 0, 1423232654),
(823, 'http://sexy.faceks.com/post/2c9c66_c75ac9', 0, 1423232654),
(824, 'http://sexy.faceks.com/post/2c9c66_c6e091', 0, 1423232654),
(825, 'http://sexy.faceks.com/post/2c9c66_c6e08d', 0, 1423232654),
(826, 'http://sexy.faceks.com/post/2c9c66_c4cfae', 0, 1423232654),
(827, 'http://sexy.faceks.com/post/2c9c66_c4cede', 0, 1423232654),
(842, 'http://sexy.faceks.com/post/2c9c66_5b6d8e9', 0, 1423310934),
(843, 'http://sexy.faceks.com/post/2c9c66_5b6d8cb', 0, 1423310934),
(844, 'http://sexy.faceks.com/post/2c9c66_5b6d8b6', 0, 1423310934),
(845, 'http://sexy.faceks.com/post/2c9c66_5b6d89a', 0, 1423310934),
(846, 'http://sexy.faceks.com/post/2c9c66_5b6d886', 0, 1423310934),
(847, 'http://sexy.faceks.com/post/2c9c66_5bd4705', 0, 1423493162),
(848, 'http://sexy.faceks.com/post/2c9c66_5bd46fe', 0, 1423493162),
(849, 'http://sexy.faceks.com/post/2c9c66_5bd4712', 0, 1423493282),
(850, 'http://sexy.faceks.com/post/2c9c66_5c0376c', 0, 1423578362),
(851, 'http://sexy.faceks.com/post/2c9c66_5c03766', 0, 1423578363),
(852, 'http://sexy.faceks.com/post/2c9c66_5c03775', 0, 1423578422),
(853, 'http://sexy.faceks.com/post/2c9c66_5c0377d', 0, 1423578481),
(854, 'http://sexy.faceks.com/post/2c9c66_5c0378b', 0, 1423578542),
(855, 'http://sexy.faceks.com/post/2c9c66_5c6f898', 0, 1423669742),
(856, 'http://sexy.faceks.com/post/2c9c66_5c6f8a1', 0, 1423669802),
(857, 'http://sexy.faceks.com/post/2c9c66_5c6f8aa', 0, 1423669922),
(858, 'http://sexy.faceks.com/post/2c9c66_5c6f8c1', 0, 1423670042),
(859, 'http://sexy.faceks.com/post/2c9c66_5c6f8c8', 0, 1423670102),
(860, 'http://sexy.faceks.com/post/2c9c66_5c6f8d4', 0, 1423670162),
(861, 'http://sexy.faceks.com/post/2c9c66_5c6f8e3', 0, 1423670282),
(862, 'http://sexy.faceks.com/post/2c9c66_5c6f8ed', 0, 1423670342),
(863, 'http://sexy.faceks.com/post/2c9c66_5dc716b', 0, 1423979462),
(864, 'http://sexy.faceks.com/post/2c9c66_5dc7171', 0, 1423979522),
(865, 'http://sexy.faceks.com/post/2c9c66_5dc717a', 0, 1423979582),
(866, 'http://sexy.faceks.com/post/2c9c66_5dc7189', 0, 1423979702),
(867, 'http://sexy.faceks.com/post/2c9c66_5dc7191', 0, 1423979761),
(868, 'http://sexy.faceks.com/post/2c9c66_5e0c00c', 0, 1424097062),
(869, 'http://sexy.faceks.com/post/2c9c66_5e0c017', 0, 1424097122),
(870, 'http://sexy.faceks.com/post/2c9c66_5e0c023', 0, 1424097243),
(871, 'http://sexy.faceks.com/post/2c9c66_5e0c039', 0, 1424097423),
(872, 'http://sexy.faceks.com/post/2c9c66_5e0c040', 0, 1424097481),
(873, 'http://sexy.faceks.com/post/2c9c66_5e0c048', 0, 1424097541),
(874, 'http://sexy.faceks.com/post/2c9c66_5e32411', 0, 1424182682),
(875, 'http://sexy.faceks.com/post/2c9c66_5e32414', 0, 1424182742),
(876, 'http://sexy.faceks.com/post/2c9c66_5e3241a', 0, 1424182802),
(877, 'http://sexy.faceks.com/post/2c9c66_5e39952', 0, 1424182861),
(878, 'http://sexy.faceks.com/post/2c9c66_5e3995a', 0, 1424182922),
(879, 'http://sexy.faceks.com/post/2c9c66_5e55112', 0, 1424270342),
(880, 'http://sexy.faceks.com/post/2c9c66_5e55116', 0, 1424270402),
(881, 'http://sexy.faceks.com/post/2c9c66_5e55120', 0, 1424270582),
(882, 'http://sexy.faceks.com/post/2c9c66_5eadc82', 0, 1424493243),
(883, 'http://sexy.faceks.com/post/2c9c66_5eadc8b', 0, 1424493362),
(884, 'http://sexy.faceks.com/post/2c9c66_5eadc8e', 0, 1424493422),
(885, 'http://sexy.faceks.com/post/2c9c66_5ee5355', 0, 1424621282),
(886, 'http://sexy.faceks.com/post/2c9c66_5ee535c', 0, 1424621402),
(887, 'http://sexy.faceks.com/post/2c9c66_5ee535f', 0, 1424621522),
(888, 'http://sexy.faceks.com/post/2c9c66_5ee5364', 0, 1424621582),
(889, 'http://sexy.faceks.com/post/2c9c66_5eed06c', 0, 1424621763),
(890, 'http://sexy.faceks.com/post/2c9c66_5fa15d5', 0, 1424954342),
(891, 'http://sexy.faceks.com/post/2c9c66_5fa15e2', 0, 1424954401),
(892, 'http://sexy.faceks.com/post/2c9c66_5fa15f5', 0, 1424954462),
(893, 'http://sexy.faceks.com/post/2c9c66_5fa162c', 0, 1424954822),
(894, 'http://sexy.faceks.com/post/2c9c66_5fa1652', 0, 1424955065),
(895, 'http://sexy.faceks.com/post/2c9c66_5fdf3e2', 0, 1425043625),
(896, 'http://sexy.faceks.com/post/2c9c66_5fdf73a', 0, 1425047882),
(897, 'http://sexy.faceks.com/post/2c9c66_5fdf749', 0, 1425047942),
(898, 'http://sexy.faceks.com/post/2c9c66_5fe35e6', 0, 1425048122),
(899, 'http://sexy.faceks.com/post/2c9c66_5fe35ea', 0, 1425048182),
(900, 'http://sexy.faceks.com/post/2c9c66_603b03f', 0, 1425196202),
(901, 'http://sexy.faceks.com/post/2c9c66_603b052', 0, 1425196323),
(902, 'http://sexy.faceks.com/post/2c9c66_603b0af', 0, 1425197042),
(903, 'http://sexy.faceks.com/post/2c9c66_603b0ea', 0, 1425197402),
(904, 'http://sexy.faceks.com/post/2c9c66_603b103', 0, 1425197522),
(905, 'http://sexy.faceks.com/post/2c9c66_603b112', 0, 1425197582),
(906, 'http://sexy.faceks.com/post/2c9c66_60b9162', 0, 1425395942),
(907, 'http://sexy.faceks.com/post/2c9c66_60b917b', 0, 1425396183),
(908, 'http://sexy.faceks.com/post/2c9c66_60b9182', 0, 1425396242),
(909, 'http://sexy.faceks.com/post/2c9c66_60b9186', 0, 1425396301),
(910, 'http://sexy.faceks.com/post/2c9c66_60f283a', 0, 1425487082),
(911, 'http://sexy.faceks.com/post/2c9c66_60f283c', 0, 1425487202),
(912, 'http://sexy.faceks.com/post/2c9c66_60f283e', 0, 1425487261),
(913, 'http://sexy.faceks.com/post/2c9c66_60f2842', 0, 1425487382),
(914, 'http://sexy.faceks.com/post/2c9c66_6125aba', 0, 1425561061),
(915, 'http://sexy.faceks.com/post/2c9c66_6125ad3', 0, 1425561185),
(916, 'http://sexy.faceks.com/post/2c9c66_612f66e', 0, 1425574922),
(917, 'http://sexy.faceks.com/post/2c9c66_612f66b', 0, 1425574922),
(918, 'http://sexy.faceks.com/post/2c9c66_612f678', 0, 1425575162),
(919, 'http://sexy.faceks.com/post/2c9c66_612f67b', 0, 1425575222),
(920, 'http://sexy.faceks.com/post/2c9c66_612f680', 0, 1425575342),
(921, 'http://sexy.faceks.com/post/2c9c66_612f686', 0, 1425575401),
(922, 'http://sexy.faceks.com/post/2c9c66_6162ce2', 0, 1425656282),
(923, 'http://sexy.faceks.com/post/2c9c66_6162ce8', 0, 1425656343),
(924, 'http://sexy.faceks.com/post/2c9c66_61c2ce6', 0, 1425830222),
(925, 'http://sexy.faceks.com/post/2c9c66_61c2cf0', 0, 1425830281),
(926, 'http://sexy.faceks.com/post/2c9c66_61c2cf5', 0, 1425830343),
(927, 'http://sexy.faceks.com/post/2c9c66_61c2cfd', 0, 1425830401),
(928, 'http://sexy.faceks.com/post/2c9c66_61c2d05', 0, 1425830467),
(929, 'http://sexy.faceks.com/post/2c9c66_61c2d0c', 0, 1425830521),
(930, 'http://sexy.faceks.com/post/2c9c66_61c2d15', 0, 1425830582),
(931, 'http://sexy.faceks.com/post/2c9c66_61f6812', 0, 1425910682),
(932, 'http://sexy.faceks.com/post/2c9c66_61f6944', 0, 1425914282),
(933, 'http://sexy.faceks.com/post/2c9c66_61f6952', 0, 1425914403),
(934, 'http://sexy.faceks.com/post/2c9c66_61f696b', 0, 1425914702),
(935, 'http://sexy.faceks.com/post/2c9c66_61f696f', 0, 1425914762),
(936, 'http://sexy.faceks.com/post/2c9c66_61f6980', 0, 1425914882),
(937, 'http://sexy.faceks.com/post/2c9c66_61f6986', 0, 1425914942),
(938, 'http://sexy.faceks.com/post/2c9c66_6230cd2', 0, 1425990602),
(939, 'http://sexy.faceks.com/post/2c9c66_6230cf1', 0, 1425990842),
(940, 'http://sexy.faceks.com/post/2c9c66_6230d00', 0, 1425990902),
(941, 'http://sexy.faceks.com/post/2c9c66_6230d26', 0, 1425991142),
(942, 'http://sexy.faceks.com/post/2c9c66_6274424', 0, 1426082762),
(943, 'http://sexy.faceks.com/post/2c9c66_6274435', 0, 1426082882),
(944, 'http://sexy.faceks.com/post/2c9c66_6274440', 0, 1426083006),
(945, 'http://sexy.faceks.com/post/2c9c66_627444e', 0, 1426083063),
(946, 'http://sexy.faceks.com/post/2c9c66_6274457', 0, 1426083182),
(947, 'http://sexy.faceks.com/post/2c9c66_6274455', 0, 1426083182),
(948, 'http://sexy.faceks.com/post/2c9c66_6274461', 0, 1426083362),
(949, 'http://sexy.faceks.com/post/2c9c66_627446d', 0, 1426083422),
(950, 'http://sexy.faceks.com/post/2c9c66_6274478', 0, 1426083482);

-- --------------------------------------------------------

--
-- 表的结构 `pes_lang`
--

CREATE TABLE IF NOT EXISTS `pes_lang` (
  `id` int(11) NOT NULL,
  `country` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pes_mail_verify`
--

CREATE TABLE IF NOT EXISTS `pes_mail_verify` (
  `mail_verify_id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `createtime` int(11) NOT NULL,
  `verifytime` int(11) NOT NULL,
  `verify_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`mail_verify_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `pes_menu`
--

CREATE TABLE IF NOT EXISTS `pes_menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(128) NOT NULL,
  `menu_pid` int(11) NOT NULL,
  `menu_url` varchar(255) NOT NULL,
  `menu_listsort` tinyint(100) NOT NULL,
  PRIMARY KEY (`menu_id`),
  KEY `menu_pid` (`menu_pid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=37 ;

--
-- 转存表中的数据 `pes_menu`
--

INSERT INTO `pes_menu` (`menu_id`, `menu_name`, `menu_pid`, `menu_url`, `menu_listsort`) VALUES
(1, 'BASE_SET', 0, '', 0),
(4, 'SYSTEM_INFO', 1, 'Admin-Index-systemInfo', 0),
(8, 'SYSTEM_MEUN', 1, 'Admin-Index-menuList', 0),
(9, 'MODEL_MANAGE', 0, 'Admin-Model-index', 0),
(10, 'MODEL_LIST', 9, 'Admin-Model-index', 0),
(11, 'CLEAR_CACHE', 1, 'Admin-Index-clear', 0),
(13, 'CONTENT_MANAGE', 0, '', 0),
(14, 'CATEGORYS_MANAGE', 13, 'Admin-Category-index', 0),
(15, 'USER_MANAGE', 0, '', 0),
(16, 'USER_LIST', 15, 'Admin-User-index', 0),
(17, 'PERMISSIONS_NODE', 15, 'Admin-User-nodeList', 0),
(18, 'USER_GROUP_LIST', 15, 'Admin-User_group-index', 0),
(19, 'ADVANCED_SETTINGS', 0, '', 0),
(20, 'SYSTEM_SETTING', 19, 'Admin-Setting-action', 0),
(21, 'THEME_LIST', 19, 'Admin-Theme-index', 0),
(23, 'DATA_BACKUP', 19, 'Admin-Setting-backup', 0),
(24, 'CHECK_UPGRADE', 19, 'Admin-Setting-update', 0),
(25, 'FILE_MANAGE', 19, 'Admin-File-index', 0),
(27, 'PAGE_LIST', 9, 'Admin-Page-index', 0),
(28, 'ARTICLE_LIST', 9, 'Admin-Article-index', 0),
(29, 'DOWNLOAD_LIST', 9, 'Admin-Download-index', 0),
(30, 'SLIDESHOW_MANAGE', 13, 'Admin-Setting-slideshowList', 0),
(31, 'UPDATE_LIST', 9, 'Admin-Update-index', 0),
(33, 'HTML_SETTING', 13, 'Admin-Html-index', 0),
(34, 'DOC_LIST', 9, 'Admin-Doc-index', 0),
(35, 'BEAUTY_LIST', 9, 'Admin-Beauty-index', 0),
(36, 'CONTACT_LIST', 9, 'Admin-Contact-index', 0);

-- --------------------------------------------------------

--
-- 表的结构 `pes_model`
--

CREATE TABLE IF NOT EXISTS `pes_model` (
  `model_id` int(11) NOT NULL AUTO_INCREMENT,
  `model_name` varchar(128) NOT NULL,
  `lang_key` varchar(128) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `is_search` tinyint(11) NOT NULL COMMENT '允许搜索',
  `model_attr` tinyint(1) NOT NULL COMMENT '模型属性 1:前台(含前台) 2:后台',
  PRIMARY KEY (`model_id`),
  UNIQUE KEY `model_name` (`model_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `pes_model`
--

INSERT INTO `pes_model` (`model_id`, `model_name`, `lang_key`, `status`, `is_search`, `model_attr`) VALUES
(1, 'Page', 'PAGE_LIST', 1, 1, 1),
(2, 'Article', 'ARTICLE_LIST', 1, 1, 1),
(3, 'Download', 'DOWNLOAD_LIST', 1, 0, 1),
(4, 'Update', 'UPDATE_LIST', 1, 0, 1),
(6, 'User_group', 'USER_GROUP_LIST', 1, 0, 2),
(7, 'User', 'USER_LIST', 1, 0, 2),
(8, 'Slideshow', 'SLIDESHOW_LIST', 1, 0, 2),
(9, 'Doc', 'DOC_LIST', 1, 1, 1),
(10, 'Beauty', 'BEAUTY_LIST', 1, 1, 1),
(11, 'Contact', 'CONTACT_LIST', 1, 0, 2);

-- --------------------------------------------------------

--
-- 表的结构 `pes_node`
--

CREATE TABLE IF NOT EXISTS `pes_node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL COMMENT '规则唯一英文标识',
  `title` varchar(128) NOT NULL COMMENT '描述名称',
  `pid` int(11) NOT NULL COMMENT '父类ID',
  `child` text NOT NULL,
  `verify` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否进行权限验证',
  `mes` varchar(128) NOT NULL COMMENT '提示信息',
  `listsort` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`,`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `pes_option`
--

CREATE TABLE IF NOT EXISTS `pes_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `option_name` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  `value` text NOT NULL,
  `option_range` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- 转存表中的数据 `pes_option`
--

INSERT INTO `pes_option` (`id`, `option_name`, `name`, `value`, `option_range`) VALUES
(1, 'siteurl', '网站链接', 'http://www.pescms.com', 'setting'),
(2, 'sitetitle', '网站名称', 'PESCMS', 'setting'),
(3, 'subtitle', '副标题', '', 'setting'),
(4, 'seo_keyword', '网站关键词', 'PESCMS', 'setting'),
(5, 'seo_description', '网站描述', 'PESCMS', 'setting'),
(6, 'logo', '网站logo', '/upload/20141201/547b443faf6b6.jpg', 'setting'),
(7, 'theme', '主题', 'PESCMS', 'theme'),
(8, 'fieldType', '表单类型', '{"category":"\\u5206\\u7c7b","text":"\\u5355\\u884c\\u8f93\\u5165\\u6846","radio":"\\u5355\\u9009\\u6309\\u94ae","checkbox":"\\u590d\\u9009\\u6846","select":"\\u5355\\u9009\\u4e0b\\u62c9\\u6846","textarea":"\\u591a\\u884c\\u8f93\\u5165\\u6846","editor":"\\u7f16\\u8f91\\u5668","thumb":"\\u7565\\u7f29\\u56fe","img":"\\u4e0a\\u4f20\\u56fe\\u7ec4","file":"\\u4e0a\\u4f20\\u6587\\u4ef6","date":"\\u65e5\\u671f"}', 'Miscellaneous'),
(9, 'sitestatus', '网站状态', '0', 'setting'),
(10, 'footerCode', '页脚代码', '', 'setting'),
(11, 'closeReason', '关闭原因', 'PESCMS目前正在维护升级中...\r\n您可以访问OSCGIT获取最新的代码：http://git.oschina.net/fallBirds/PESCMS2.0', 'setting'),
(12, 'system', '系统变量', '{"copyright":"\\u7248\\u6743\\u6240\\u6709\\u00a92013-2014 PESCMS\\u5f00\\u53d1\\u56e2\\u961f"}', 'system'),
(13, 'version', '系统版本', 'PESCMS V1.20140226beta', ''),
(14, 'upload_img', '图片格式', '["jpg","jpge","bmp","gif","png"]', 'upload'),
(15, 'upload_file', '文件格式', '["zip","rar","7z","doc","docx","pdf","xls","xlsx","ppt","pptx","txt","7z"]', 'upload'),
(16, 'urlModel', 'URL格式', '{"index":"1","urlModel":"3","suffix":"1"}', 'url'),
(17, 'backstagetheme', '后台主题', 'PESCMS', 'theme');

-- --------------------------------------------------------

--
-- 表的结构 `pes_page`
--

CREATE TABLE IF NOT EXISTS `pes_page` (
  `page_id` int(11) NOT NULL AUTO_INCREMENT,
  `page_listsort` int(11) NOT NULL,
  `page_status` tinyint(4) NOT NULL,
  `page_lang` tinyint(4) NOT NULL,
  `page_url` varchar(255) NOT NULL,
  `page_createtime` int(11) NOT NULL,
  `page_title` varchar(255) NOT NULL,
  `page_thumb` varchar(255) NOT NULL,
  `page_keyword` varchar(255) NOT NULL,
  `page_description` text NOT NULL,
  `page_content` text NOT NULL,
  `page_type` int(11) NOT NULL,
  PRIMARY KEY (`page_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

--
-- 转存表中的数据 `pes_page`
--

INSERT INTO `pes_page` (`page_id`, `page_listsort`, `page_status`, `page_lang`, `page_url`, `page_createtime`, `page_title`, `page_thumb`, `page_keyword`, `page_description`, `page_content`, `page_type`) VALUES
(1, 0, 1, 0, '/Page/view/id/1.html', 1391382000, '关于PESCMS', '', '关于PESCMS,PESCMS的说明,PESCMS的诞生', 'PESCMS是一款开源免费的CMS系统！', '<blockquote>\r\n	<p>\r\n		首先感谢您的求知欲，才会引导您品味这篇又啰嗦，又没啥知识点的文章。\r\n	</p>\r\n</blockquote>\r\n<h4>\r\n	<span style="color:#006600;font-size:16px;">为什么要写PESCMS？</span> \r\n</h4>\r\n<p style="text-indent:2em;">\r\n	在PHP的世界，已经有无数的CMS诞生了。为何我还要去编写一套CMS呢？对于这个问题，我们先带着此疑问阅读下去。\r\n</p>\r\n<h4>\r\n	<span style="color:#006600;font-size:16px;">PESCMS有啥特点？</span> \r\n</h4>\r\n<p style="text-indent:2em;">\r\n	由于篇幅有限，且非本篇的重点，顾用三个词总结PESCMS的特点：安全，易用，免费（详细请<a href="/Page-view-id-13" target="_blank"><span style="color:#E53333;">点击</span><span style="color:#E53333;">此处</span></a>）。\r\n</p>\r\n<h4>\r\n	<span style="color:#006600;font-size:16px;">编写PESCMS的初衷</span> \r\n</h4>\r\n<p style="text-indent:2em;">\r\n	我相信只要是一名程序员，您就有一种想法，这玩意我也可以写一个。当时的出发点，的确如此。但随着PESCMS项目开发深入下去，对于这个初衷渐渐地产生变化。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	参考国内的一些CMS程序，几乎都存在：安全问题，易用性差，非免费。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	安全问题，这是PHP一个历史原因。即使到现在，也有很多人在使用MYSQL扩展的形式进行数据库链接。一旦人为疏忽，就引起了注入等问题。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	易用性可总结为，代码一点注释都没有。官方要么不提供文档，要么就是残缺不全。一切开发均只能靠互联网来解决问题。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	至于免费，很多CMS都说自己是开源，免费。但有一句话标示：不得用于非个人上。即使国内盗版泛滥，但看到这一句话，对于开发者来说，不免的对选用这套程序产生了恐惧感：产品做大了，被作者收取高额的授权费怎么办（说明：当然，程序选用什么类型的开源协议，作为开发者就应该遵守）？\r\n</p>\r\n<p style="text-indent:2em;">\r\n	正因如此，PESCMS的初衷已经改变为：开发一款，安全，易用，免费的CMS。\r\n</p>\r\n<h4>\r\n	<span style="color:#006600;font-size:16px;">关于重复造轮子</span> \r\n</h4>\r\n<p style="text-indent:2em;">\r\n	在编写此CMS时，不少同行的人对我说：你在重复造轮子；你现在的做法，我早在几年前就走过了；都有现有的系统，就别去写了，专心业务上的需求吧；\r\n</p>\r\n<p style="text-indent:2em;">\r\n	对于同行的朋友给我以上指点的话语，我先向你们道谢一次：感谢你们的指点！\r\n</p>\r\n<p style="text-indent:2em;">\r\n	我深知自己在重复造轮子，但这轮子给我带来一样很重要的思想：坚持。既然自己已经下决心去做一款产品，就必须全力以赴，用心去把他做好，不能半途放弃。当你坚持去做一样东西的时候，它肯定会给你带来巨大的回报。要是当初没坚持下来，PESCMS也不会诞生了。\r\n</p>\r\n<p style="text-indent:2em;">\r\n	说到这里，对于文章开头的疑问，相信您已经找到答案了吧？\r\n</p>', 0),
(8, 0, 1, 0, '/Page-view-id-8', 1391356800, '服务支持', '', 'PES服务支持,PESCMS支持', '', '<p>\r\n	<span style="line-height:2;">由于PESCMS是一款免费，开源的CMS程序，若您真的需要寻求服务支持，请先按照以下的流程检阅一遍。</span> \r\n</p>\r\n<ol>\r\n	<li>\r\n		<span style="line-height:2;font-size:10pt;">我不知道PESCMS如何使用。</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:1.5;font-size:10pt;"><span style="line-height:2;">我对PESCMS源码不熟悉，如何进行开发。</span><span style="line-height:2;"></span></span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:2;">我发现了PESCMS的BUG，但我没能力解决。</span> \r\n	</li>\r\n	<li>\r\n		<span style="line-height:2;">我觉得PESCMS应该有以下改进。</span> \r\n	</li>\r\n</ol>\r\n<p>\r\n	<span style="font-size:10pt;line-height:2;">对于第一点问题：在您接触PESCMS前，请先阅读程序的说明文档（点击这里查看）。如果还不知道怎样使用，请问您是技术人员吗？如果不是技术人员，可以到官网论坛发帖子求助，理论上会有热心的网友为您解答。技术人员的话，参考下面的解答。</span> \r\n</p>\r\n<p>\r\n	<span style="font-size:10pt;line-height:2;">对于第二点问题：PESCMS源码均有对应的注释，系统的结构图可以点击这里查看。其次，点击这里可以访问PESCMS的官方文档，有详细的开发说明。如果还不懂的话，那么请问您接触PHP多久了？如果少于一年，那么可以到官方论坛发帖子寻求帮助。</span> \r\n</p>\r\n<p>\r\n	<span style="font-size:10pt;line-height:2;">对于第三点和第四点问题：若发现BUG/对程序的改进，可以向官网反馈，目前联系方式为: admin#pescms.com</span>\r\n</p>\r\n<p>\r\n	<span style="line-height:26.66666603088379px;">另外，PES也提供商业服务。但原则上，我们希望大家可以在不选用商业服务情况下，能够正常使用PESCMS。具体细节请联系&nbsp;<span style="letter-spacing:1px;line-height:26.66666603088379px;white-space:normal;">admin#pescms.com</span></span>\r\n</p>', 0),
(11, 0, 1, 0, '/Page-view-id-11', 1391415552, '友情链接', '', '', '', '', 0),
(13, 0, 1, 0, '/Page-view-id-13', 1391382000, '安全', '', 'PESCMS安全,CMS安全,php注入漏洞', 'PESCMS是基于PHP 5.3+下的 PESPHP框架编写的程序。PESPHP框架数据库链接以PDO为核心，顾PESCMS在安全方面彻底杜绝了注入的危险！通过二次开发，还可以支持其他类型的数据库。', '<p>\r\n	<span style="line-height:2;">在说明PESCMS安全方面特点前，先为各位科普一下PHP PDO的知识。这里引用一下网上查找的资料（原文链接：</span><a href="http://www.cnseay.com/3055/" target="_blank"><span style="line-height:2;">http://www.cnseay.com/3055/</span></a><span style="line-height:2;">）：</span> \r\n</p>\r\n<blockquote style="margin:0 0 0 40px;border:none;padding:0px;">\r\n	<p>\r\n		<span style="line-height:2;">当我们使用传统的 mysql_connect 、mysql_query方法来连接查询数据库时，如果过滤不严，就有SQL注入风险，导致网站被攻击，失去控制。虽然可以用mysql_real_escape_string()函数过滤用户提交的值，但是也有缺陷。而使用PHP的PDO扩展的 prepare 方法，就可以避免sql injection 风险。</span> \r\n	</p>\r\n</blockquote>\r\n<p>\r\n	<span style="line-height:2;">科普完PDO的知识点后，相信您已经知道PESCMS为什么是安全的。当然，安全是相对的。除了在技术方面杜绝注入漏洞，编码人员也需要时刻做好对数据的过滤，不然再好的技术，也防不了猪一样的开发人员。</span> \r\n</p>\r\n<p>\r\n	<span style="line-height:2;">除了安全外，PDO还有另外一个特点（原文链接：</span><a href="http://www.php.net/manual/zh/intro.pdo.php" target="_blank"><span style="line-height:2;">http://www.php.net/manual/zh/intro.pdo.php</span></a><span style="line-height:2;">）：</span>\r\n</p>\r\n<blockquote style="margin:0 0 0 40px;border:none;padding:0px;">\r\n	<p>\r\n		<span style="line-height:2;">PDO 提供了一个 数据访问 抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数（方法）来查询和获取数据。 PDO 不不提供 数据库 抽象层；它不会重写 SQL，也不会模拟缺失的特性。如果需要的话，应该使用一个成熟的抽象层。</span> \r\n	</p>\r\n</blockquote>\r\n<span style="line-height:2;">如果您的项目不支持MYSQL，那么只需要重写编写一个对应的数据库类就行了。在本篇就不作过多的说明了，如果您感兴趣，可以点击这里进行了解。</span> \r\n<p>\r\n	<br />\r\n</p>\r\n<p>\r\n	<br />\r\n</p>', 0),
(14, 0, 1, 0, '/Page-view-id-14', 1391382000, '易用', '', '容易开发的CMS,易上手的CMS,好维护的CMS', '得益于PESPHP框架基于PHP 5.3+的命名空间松散设计模式。顾PESCMS在开发过程中，您可以拥有便捷，易用等特性，并且官方提供详尽的文档支持。', '<p>\r\n	<span style="line-height:2;">得益于PESPHP框架基于PHP 5.3+的命名空间松散设计模式，PESCMS整体架构并复杂，项目的层次也很好了解。只要你对PHP的OOP有一定了解，结合官方的文档，您可以快速上并手进行二次开发。</span> \r\n</p>\r\n<p>\r\n	<span style="line-height:2;">需要强调的时，PES框架自身就没有模板引擎。因为我觉得PHP本身就是一套模板，再搞一套模板引擎，只会让本身混乱的PHP变得更加混乱，并且掌握一套非常用的模板引擎，学习成本太高了（程序员何苦为难程序员？）。</span> \r\n</p>\r\n<p>\r\n	<span style="line-height:2;">在没有模板引擎的PESCMS中，如果您接触过wordpress，那么你肯定会对本程序的模板开发又一定熟悉感了（仅仅方式上相似）。其次，PESCMS常用的前台调用方法，都已经集中在两个类中：<span style="color:#E53333;">App/Func/</span></span><span style="line-height:2;"><span style="color:#E53333;">Func</span> 和</span><span style="line-height:2;"><span style="color:#E53333;">Expand/Label</span> 中。Func是系统的函数库，Label是系统的常用标签，里面集合了一些经常要调用的方法。具体说明，点击这里查阅官方的说明文档。可预见的是，</span><span style="line-height:2;font-size:10pt;">若您仅仅是开发模板，只需要掌握 函数库和 标签库 基本可以满足正常的需求了。</span> \r\n</p>\r\n<p>\r\n	<span style="line-height:2;">另外PESCMS集成一些常见的社交应用设置（未完成开发）和插件（未完成开发），相信在后续的版本中，可以更加方便您对网站进行扩展。同时，基于PESCMS的在线模板商店（未开发）和在线插件商店（为开发），作为开发者的您，可以向官方提交免费/收费的扩展程序。对于收费的扩展程序，官方会提供完善的PHP扩展加密方式供开发者选择，保证开发者的权益不被侵犯。</span> \r\n</p>', 0),
(15, 0, 1, 0, '/Page-view-id-15', 1391382000, '免费', '', '开源的CMS,真正开源的CMS,免费的CMS,没版权的CMS', 'PESCMS是一款开源，免费的CMS程序。PES团队永不为PESCMS提供任何商业授权验证!PESCMS基于更加开放的开源协议，顾您可以对本程序闭源，商业等操作。', '<p>\r\n	<span style="line-height:2;">PESCMS是一款开源，免费的CMS程序。<span style="color:#E53333;">PESCMS不会向使用者提供任何商业授权！</span>因此，您可以将PESCMS进行个人/商业/闭源等行为。但不能以PESCMS/PES/含PES字眼 进行商业操作。</span> \r\n</p>\r\n<p>\r\n	<span style="line-height:2;">开源的软件离不开社区的支持，为了PESCMS的成长，如果您有什么好建议，我们非常欢迎您的反馈。</span> \r\n</p>\r\n<p>\r\n	<span style="line-height:2;">因为PESCMS源码是公开的，所以在使用过程中，难免会遇到因源码存在缺陷，一些非法的人利用程序已知缺陷攻击PESCMS程序站点进行获利等行为。若出现这种不可避免的情况，请使用者自行承担责任。</span> \r\n</p>\r\n<p>\r\n	<span style="line-height:2;">另外，PESCMS会定期进行升级，作为使用者的您有权选择是否进行升级。因升级导致的损失请使用者自行承担。</span> \r\n</p>', 0),
(21, 0, 1, 0, '/Page-view-id-21', 1394985600, '关于本博', '', '', '', '<p>\r\n	PES官博，在这里会记录程序开发的最新动态，分享一些开发时掌握到的技术经验，吐槽一些牢骚言语。\r\n</p>\r\n<p>\r\n	主创人物背景：2年php从业经验，目前就职某电商企业。对开源持有火热的心，希望能够通过自己写的产品，为社会带来更便捷的服务。\r\n</p>', 0),
(26, 0, 1, 0, '/Page/view/id/26.html', 1419860968, '前言', '', '前言', '', '&lt;blockquote&gt;感谢您接触PESCMS，从本文档您可以掌握如何开发PESCMS的技巧。若发现有错误地方，可以电邮至:&lt;a href=&quot;http://mailto:dev@pescms.com&quot; target=&quot;_blank&quot;&gt;dev#pescms.com&lt;/a&gt;(#号改为@)&lt;/blockquote&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;文档说明 &lt;/span&gt;&lt;/h3&gt;&lt;p&gt;本文档适用PESCMS 2.0以上版本，如需1.X版的文档，请下载离线版:&lt;a href=&quot;http://www.pescms.com/Article-view-id-6&quot; target=&quot;_blank&quot;&gt;http://www.pescms.com/Article-view-id-6&lt;/a&gt;&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;至广大使用者&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCMS是一款基于BSD协议的开源程序，为此您可以放心地使用，完全不需要考虑版权，软件费用。当然，PESCMS鼓励用户向PESCMS反馈实际的使用问题和建议，让PESCMS更加稳健。&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;我可以做什么&lt;/span&gt;&lt;/h3&gt;&lt;p style=&quot;white-space: normal;&quot;&gt;如果您纯粹是作为一名主题开发者，那么本文档您仅需要集中阅读主题开发和数据库操作的第一节，足以满足您的正常开发了。&lt;/p&gt;&lt;p style=&quot;white-space: normal;&quot;&gt;文档从数据库操作一章起，进入系统的高阶说明。阅读这些章节需要有一定的PHP代码理解能力，否则很难理解系统的理念。&lt;/p&gt;&lt;p style=&quot;white-space: normal;&quot;&gt;最后，希望PESCMS能够成为您的好工具 :)&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;谁在用PESCMS&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;由于并没有对使用者作统计，因此暂时未知是否有用户使用PESCMS。&lt;br/&gt;目前PESCMS在我所在的公司已经大范围使用！具体如下（2015-1-13）：&lt;/p&gt;&lt;ol&gt;&lt;li&gt;&lt;p&gt;目前就职公司的官方网站和任务管理系统 （基于PESCMS 2.X程序） 已正常运作1个月。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;目前就职&lt;/span&gt;公司某一商城网站（架构基于PESCMS 1.X），已正常运作半年。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;&lt;span style=&quot;white-space: normal;&quot;&gt;目前就职公司正在基于PESCMS 2.X架构基础上，开发一套产品管理平台。&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;一套基于PESCMS开发的任务管理系统（与我为当前公司开发的不一样），目前是基于PESCMS 1.X，日后将开源。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;朋友推荐朋友的项目开发。&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;作者&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;PESCMS主开发&lt;/p&gt;', 0),
(40, 0, 1, 0, '/Page/view/id/40.html', 1422258937, '表单处理', '', '', '', '', 0),
(41, 0, 1, 0, '/Page/view/id/41.html', 1423375860, '关于我们 - 肉丝网', '', '', '', '&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;声明&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;肉丝网是一个专门记录互联网上的美眉图片站点。&lt;/p&gt;&lt;p&gt;本网站的所有图片均来自互联网，本站仅负责记录。若您发现本站的记录的图片侵犯您的版权请&lt;a href=&quot;/page/contact.html&quot; target=&quot;_blank&quot;&gt;&lt;span style=&quot;color:#00b0f0&quot;&gt;点击此处&lt;/span&gt;&lt;/a&gt;进行反馈，我们将会对侵权的图片进行移除，为您带来麻烦敬请谅解。&lt;/p&gt;&lt;p&gt;由于图片均是程序自动寻找互联网上的图片，加之我们人力有限，不可能保证所记录的图片不存在露点等违规的现象。若您发现此类图片，可以&lt;a href=&quot;/page/contact.html&quot; target=&quot;_blank&quot;&gt;&lt;span style=&quot;color:#00b0f0&quot;&gt;点击此处&lt;/span&gt;&lt;/a&gt;进行反馈，感谢！&lt;/p&gt;&lt;h3&gt;&lt;span style=&quot;color:#00b050&quot;&gt;诞生原因&lt;/span&gt;&lt;/h3&gt;&lt;p&gt;建立肉丝网，纯粹是个人无聊之作，仅仅为了做数据实验之用：验证程序的稳定性和网站图片爬虫的设计开发。&lt;/p&gt;&lt;p&gt;由于服务器和域名需要金钱支出，因此我会在列表或者详细中插入小量不影响美观的广告以平衡收支和改善服务器。感谢您们对肉丝的支持！&lt;/p&gt;', 3);

-- --------------------------------------------------------

--
-- 表的结构 `pes_plugin`
--

CREATE TABLE IF NOT EXISTS `pes_plugin` (
  `id` int(11) NOT NULL,
  `plugin_name` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `pes_slideshow`
--

CREATE TABLE IF NOT EXISTS `pes_slideshow` (
  `slideshow_id` int(11) NOT NULL AUTO_INCREMENT,
  `slideshow_listsort` int(11) NOT NULL,
  `slideshow_lang` tinyint(4) NOT NULL,
  `slideshow_url` varchar(255) NOT NULL,
  `slideshow_type_id` int(11) NOT NULL,
  `slideshow_name` varchar(255) NOT NULL,
  `slideshow_pic` varchar(255) NOT NULL,
  `slideshow_link` varchar(255) NOT NULL,
  `slideshow_description` text NOT NULL,
  PRIMARY KEY (`slideshow_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `pes_slideshow`
--

INSERT INTO `pes_slideshow` (`slideshow_id`, `slideshow_listsort`, `slideshow_lang`, `slideshow_url`, `slideshow_type_id`, `slideshow_name`, `slideshow_pic`, `slideshow_link`, `slideshow_description`) VALUES
(3, 1, 1, '/Slideshow/view/id/3.html', 1, '免费', '/upload/20141225/549c22718f9e4.jpg', '/Page-view-id-15', 'PESCMS是一款开源免费的CMS程序，在任何条件下均可以免费使用。'),
(4, 0, 0, '/Slideshow/view/id/4.html', 2, 'sadasd', '/upload/20141225/549c288431712.jpg', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `pes_slideshow1`
--

CREATE TABLE IF NOT EXISTS `pes_slideshow1` (
  `slideshow_id` int(11) NOT NULL AUTO_INCREMENT,
  `slideshow_type_id` int(11) NOT NULL,
  `slideshow_name` varchar(255) NOT NULL,
  `slideshow_description` text NOT NULL,
  `slideshow_pic` varchar(255) NOT NULL,
  `slideshow_link` varchar(255) NOT NULL,
  `slideshow_listsort` int(11) NOT NULL,
  PRIMARY KEY (`slideshow_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `pes_slideshow1`
--

INSERT INTO `pes_slideshow1` (`slideshow_id`, `slideshow_type_id`, `slideshow_name`, `slideshow_description`, `slideshow_pic`, `slideshow_link`, `slideshow_listsort`) VALUES
(1, 1, '免费', 'PESCMS是一款开源免费的CMS程序，在任何条件下均可以免费使用。', '/upload/img/2014-02-04/52f095a32530b.jpg', '/Page-view-id-15', 1),
(2, 1, '安全', '使用PDO作为PESCMS链接数据库，是其安全保障的基石', '/upload/img/2014-02-04/52f0973e59133.jpg', '/Page-view-id-13', 2),
(3, 1, '易用', 'PESCMS让开发变得更加容易，便捷', '/upload/img/2014-02-04/52f098f8812f6.jpg', '/Page-view-id-14', 3);

-- --------------------------------------------------------

--
-- 表的结构 `pes_slideshow_type`
--

CREATE TABLE IF NOT EXISTS `pes_slideshow_type` (
  `slideshow_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `slideshow_type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`slideshow_type_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `pes_slideshow_type`
--

INSERT INTO `pes_slideshow_type` (`slideshow_type_id`, `slideshow_type_name`) VALUES
(1, '首页幻灯片');

-- --------------------------------------------------------

--
-- 表的结构 `pes_update`
--

CREATE TABLE IF NOT EXISTS `pes_update` (
  `update_id` int(11) NOT NULL AUTO_INCREMENT,
  `update_listsort` int(11) NOT NULL,
  `update_status` tinyint(4) NOT NULL,
  `update_lang` tinyint(4) NOT NULL,
  `update_url` varchar(255) NOT NULL,
  `update_createtime` int(11) NOT NULL,
  `update_content` text NOT NULL,
  `update_file` text NOT NULL,
  `update_prev_version` varchar(255) NOT NULL,
  `update_title` varchar(255) NOT NULL,
  `update_sql` text NOT NULL,
  `update_imgs` text NOT NULL,
  PRIMARY KEY (`update_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `pes_update`
--

INSERT INTO `pes_update` (`update_id`, `update_listsort`, `update_status`, `update_lang`, `update_url`, `update_createtime`, `update_content`, `update_file`, `update_prev_version`, `update_title`, `update_sql`, `update_imgs`) VALUES
(1, 0, 1, 0, '/Update-view-id-1', 1391875200, '&lt;p&gt;\r\n	1.修复多文件/图片上传功能再编辑时无法加载已保存的文件和无法删除对应的上传文件问题\r\n&lt;/p&gt;', '/upload/file/2014-02-10/52f7bddf1f0ec.zip', 'PESCMS V1.20140203beta', 'PESCMS V1.20140209beta', '/upload/file/2014-02-10/52f7bde22bd15.zip', ''),
(2, 0, 1, 0, '/Update-view-id-2', 1392048000, '&lt;p&gt;\r\n	±修复系统上传可能存在的安全问题\r\n&lt;/p&gt;\r\n&lt;p&gt;\r\n	±调整部分代码的调用URL，提高系统通用性\r\n&lt;/p&gt;', '/upload/file/2014-02-11/52f90a0ac633f.zip', 'PESCMS V1.20140209beta', 'PESCMS V1.20140211beta', '', ''),
(3, 0, 1, 0, '/Update-view-id-3', 1393344000, '&lt;p&gt;\r\n	±补充分页类URL规则\r\n&lt;/p&gt;\r\n&lt;p&gt;\r\n	+增加URL选择模式\r\n&lt;/p&gt;\r\n&lt;p&gt;\r\n	-移除一些不必要的模块(为安全起见,更新程序不会执行删除动作)\r\n&lt;/p&gt;\r\n&lt;p&gt;\r\n	±调整官方主题模板\r\n&lt;/p&gt;\r\n&lt;p&gt;\r\n	±调整URL生成规则\r\n&lt;/p&gt;\r\n&lt;p&gt;\r\n	+官方主题增加分页调用\r\n&lt;/p&gt;', '/upload/file/2014-02-26/530e06d9726d7.zip', 'PESCMS V1.20140211beta', 'PESCMS V1.20140226beta', '/upload/file/2014-02-26/530df7fe4a752.zip', '');

-- --------------------------------------------------------

--
-- 表的结构 `pes_user`
--

CREATE TABLE IF NOT EXISTS `pes_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_account` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_mail` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_group_id` int(11) NOT NULL,
  `user_status` tinyint(4) NOT NULL,
  `user_createtime` int(11) NOT NULL,
  `user_last_login` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `pes_user`
--

INSERT INTO `pes_user` (`user_id`, `user_account`, `user_password`, `user_mail`, `user_name`, `user_group_id`, `user_status`, `user_createtime`, `user_last_login`) VALUES
(1, 'admin', '2379b36ae79bb01f673cd71cadce20b7', 'dev@pescms.com', '管理员', 1, 1, 1388391307, 1388391307);

-- --------------------------------------------------------

--
-- 表的结构 `pes_user_group`
--

CREATE TABLE IF NOT EXISTS `pes_user_group` (
  `user_group_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_group_listsort` int(11) NOT NULL,
  `user_group_status` tinyint(4) NOT NULL,
  `user_group_lang` tinyint(4) NOT NULL,
  `user_group_url` varchar(255) NOT NULL,
  `user_group_createtime` int(11) NOT NULL,
  `user_group_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_group_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `pes_user_group`
--

INSERT INTO `pes_user_group` (`user_group_id`, `user_group_listsort`, `user_group_status`, `user_group_lang`, `user_group_url`, `user_group_createtime`, `user_group_name`) VALUES
(1, 0, 1, 0, '/User_group/view/id/1.html', 1417273380, '管理员'),
(2, 0, 1, 0, '/User_group/view/id/2.html', 1417273440, '普通会员'),
(3, 0, 1, 0, '/User_group/view/id/3.html', 1417273440, '验证会员');

-- --------------------------------------------------------

--
-- 表的结构 `pes_user_group1`
--

CREATE TABLE IF NOT EXISTS `pes_user_group1` (
  `user_group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(128) NOT NULL,
  `group_competence` text NOT NULL COMMENT '所属权限',
  `createtime` int(11) NOT NULL,
  PRIMARY KEY (`user_group_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='用户组' AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `pes_user_group1`
--

INSERT INTO `pes_user_group1` (`user_group_id`, `group_name`, `group_competence`, `createtime`) VALUES
(1, '管理员', '1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,2,55,56,57,58,59,60,61,62,63,64,65,66', 1387813393),
(2, '普通会员', '1,3,5,14,19,27,29,38,52,2,55,56,57,58,59,60,61', 1387813393),
(3, '邮箱认证', '', 1387813393);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
