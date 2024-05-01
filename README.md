# wikipediaAgent
通过pythonanywhere托管一个服务器，以便访问维基百科。
## 原理
将index.html文件放在服务器上，然后通过浏览器访问。

index.html会把输入的查询字符串发送到服务器，服务器通过维基百科API获取结果，并将结果返回给浏览器。

## 部署
1. 点击以下链接：[Pythonanywhere官网](https://www.pythonanywhere.com)；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages1.png">
2. 按照提示创建一个新账户，然后登录：
   1. 点击Create a Beginner account，创建一个免费账户。
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages2.png">
   免费账户的性能不如付费账户，但是足够使用。
   2. 按照要求注册，输入用户名、电子邮箱和密码，勾选同意协议，并点击注册。
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages3.png">
3. 新建一个flask应用：
   1. 点击页面右上角的web；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages4.png">
   2. 然后点击Add a new web app，
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages5.png">
   3. 点击Next；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages6.png">
   4. 选择点击Flask和Next；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages7.png">
   5. 选择最新的python版本，然后点击Next；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages8.png">
   6. 不用改动Path，直接点击Next；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages9.png">
4. 打开bash终端，删除自动部署的项目，然后克隆新的项目，并安装依赖：
   1. 点击右上角的Console；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages10.png">
   2. 点击bash，创建一个bash终端；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages11.png">
   3. 进入页面，这可能需要等待一段时间；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages12.png">
   4. 输入以下命令：
   ```
   rm -rf /home/<yourUserName>/mysite
   git clone https://github.com/yaoying2012/wikipedia-agent.git /home/<yourUserName>/mysite
   pip install flask_cors
   ```
   这段命令会删除自动部署的项目，然后克隆新的项目，并安装依赖。

   对于免费的用户，尤其是在中国大陆部署的用户，需要等待一段时间才能完成部署，请耐心等待。

   请**一定确保**把这段代码中的<yourUserName>替换为真实的用户名，并区分大小写；
   5. 等待命令执行完成;
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages13.png">
5. 重载网站。
   1. 点击右上角的Web；
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages14.png">
   2. 点击Reload。
   <img src="https://cda.pythonanywhere.com/img/wikipediaAgentImages15.png">

现在，你应该可以在&lt;yourUserName&gt;.pythonanywhere.com访问你的服务器了。