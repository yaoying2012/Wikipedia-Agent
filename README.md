# wikipediaAgent
通过pythonanywhere托管一个服务器，以便访问维基百科
## 原理
将index.html文件放在服务器上，然后通过浏览器访问。

index.html会把输入的查询字符串发送到服务器，服务器通过维基百科API获取结果，并将结果返回给浏览器。

## 部署
1. 点击以下链接：[Pythonanywhere官网](https://www.pythonanywhere.com)；
2. 按照提示创建一个新账户，然后登录；
3. 新建一个flask应用；
4. 删除原有配置文件；
5. 打开bash终端，输入以下命令：
   > git clone https://github.com/yaoying2012/wikipediaAgent.git
6. 重载网站。
