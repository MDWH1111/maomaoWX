// pages/book/book.js
Page({
  data:{
   Height:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          Height:res.windowHeight
        });
      }
    })
  },
  gotolist:function(event){
    var value=event.detail.value;
    wx.navigateTo({
      url: '../booklist/booklist?value='+value,
    })
  }
  
})