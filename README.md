# wikipediaAgent
通过pythonanywhere托管一个服务器，以便访问维基百科
## 原理
将index.html文件放在服务器上，然后通过浏览器访问。

index.html会把输入的查询字符串发送到服务器，服务器通过维基百科API获取结果，并将结果返回给浏览器。

## 部署
1. 点击以下链接：[Pythonanywhere官网](https://www.pythonanywhere.com)；
   <img src="">
2. 按照提示创建一个新账户，然后登录；
3. 新建一个flask应用；
4. 打开bash终端，输入以下命令：
   ```
   rm -rf /home/<yourUserName>/mysite
   git clone https://github.com/yaoying2012/wikipedia-agent.git /home/<yourUserName>/mysite
   pip install flask_cors
   ```
   这段命令会删除自动部署的项目，然后克隆新的项目，并安装依赖。

   对于免费的用户，尤其是在中国大陆部署的用户，需要等待一段时间才能完成部署，请耐心等待。

   请**一定确保**把这段代码中的<yourUserName>替换为真实的用户名，并区分大小写；

5. 重载网站。
