#PESCMS DOC分支说明  
------   
本分支属于PESCMS程序的试验分支，各种新奇的东西都在此分支优先出现。  
#本分支有什么？  
> * 官方的网站源码  
> * 官网手册文档源码  
> * 肉丝网的源码   
> * 博客程序  
> * 数据库    
  

上述所有数据均基于BSD协议进行发布，想怎样用就怎么用。  
#如何使用？  
由于文档不齐全，因此你需要一定的PHP阅读能力。  
### 1.修改域名  
在PESCMS2.0/Core/Route/Route.class.php中，定位到70行代码左右。自行修改对应的域名。  
### 2.肉丝网的抓取  
在PESCMS2.0/Expand/Cli/目录下，有两个文件的。Reptile.php用于抓取图片的最新URL地址。GetPicture.php是用于抓取图片并入库。  
抓取是基于cli模式进行的，简单就是用于linux的cron或者win的计划任务。  
要进行页面抓取调试，则在目录下找到Core.php，打开DEBUG。浏览器直接输入 http://你的域名/Expand/Cli/GetPicture.php 则可。  
### 3.导入数据库  
数据在项目的根目录下，数据库不一定是最新的。我会定时更新。  
  

#其他补充
由于PESCMS2.0还有大量工作未完成，因此你目前使用的是一个半成品。如有问题或者想加入我们请邮件dev#pescms.com。祝您使用愉快。:)  
后台的帐号密码是：admin / 123456  

##官网  
[http://www.pescms.com](http://www.pescms.com)  
##博客  
[http://blog.pescms.com](http://blog.pescms.com)  
##文档  
[http://doc.pescms.com](http://doc.pescms.com)  
##肉丝网  
[http://rousi.xyz](http://rousi.xyz)  