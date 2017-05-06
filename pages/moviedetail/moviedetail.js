// pages/moviedetail/moviedetail.js
Page({
  data:{
    singlem:{}
  },
  inputValue: '',
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.request({
      url: 'http://www.maodan.online/php/movieDetail.php',
      data:{
        id:options.id
      },
      success: function(res) {
        console.log(options);
        that.setData({
          singlem:res.data[0]
        })
      }
    });
  },
  onReady:function(){
     this.videoContext = wx.createVideoContext('myVideo');
  },
  bindInputBlur: function(e) {
    console.log(e.detail.value);
    this.inputValue = e.detail.value
  },
  send:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color: getRandomColor()
    });
  }
  
})
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}