# maomaoWX（一个比较完整的微信小程序）
>模块：
 - home：简单的背景图+自己头像
 - music：一个音乐播放器+一个音乐列表
 - book：一个搜索页面+详情页面（书籍列表）
 - movie：一个轮播图+电影列表+电影详情页
 - mine：容纳了之前所有的模块+微信扫码+地图定位
>实现的功能及效果图：
 - home：呈现出一个首页
 - music：音乐的随点随放+顺序循环播放+歌词的对应显示
 - book：搜索页的模糊查询+详情页的显示+下拉加载更多
 - movie：实现头部的图片轮播+列表显示+详情页的视频播放+弹幕
 - mine：实现了其他页面的跳转+微信扫码+地图定位
 
 
### 话不多说，直接上图吧

![请输入图片描述][2]

  [2]: http://www.maodan.online/wximg/13.bmp
![请输入图片描述][3]

  [3]: http://www.maodan.online/wximg/14.bmp
  
![请输入图片描述][4]

  [4]: http://www.maodan.online/wximg/15.bmp
![请输入图片描述][5]

  [5]: http://www.maodan.online/wximg/16.bmp
  

>技术应用：
>微信小程序自带的api:
 - 1.首页的底部的tab切换用“tabBar”
 - 2.数据请求用“wx.request”
 - 3.轮播用“swiper”
 - 4.扫一扫用“wx.scanCode”
 - 5.地图用“wx.getLocation”
 - 6.路由用“pages”

>需要注意的是：

 - 1.“tabbar”中的“list”的个数必须大于等于2小于等于5，但是“pages”中的页面跳转可以是多个
 - 2.在进行页面的跳转时注意wx.navigateTo，wx.redirectTo(OBJECT)，wx.reLaunch(OBJECT)，wx.switchTab(OBJECT)，wx.navigateBack(OBJECT)，wx.reLaunch(OBJECT)这几个导航api的区别（文档很清晰的介绍了）
 
### 项目安装步骤：
 - 1.要运行起来这个项目需要注册一个微信小程序开发者账号
 - 2.下载微信开发者工具
 - 3.克隆地址 git@github.com:MDWH1111/maomaoWX.git
 - 4.打开开发者工具，点击添加项目
 - 5.appID（当你注册了微信开发者账号后，进入设置--->开发设置，里面会有appID，这个是固定的，你以后的小程序的appID都是这个；当然你也可以选择无appID，但会有部分功能受限），其他的随便填
 - 6.若要将此项目发布到手机上并长久保留随时看则需要“域名备案”，而且域名要为（https://），若只是用手机进行测试的话，在微信卡发着点击“项目--->勾选上“开发环境不校验请求域名...”--->预览--->扫描刚返回的二维码”就行了（不过此二维码是有时间限制的，过期失效后需再来一次）。
 
