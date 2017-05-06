// pages/music/music.js
Page({
  onReady:function(){
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  data: {
    singlemusic:{
      poster:'http://www.maodan.online/music/1.jpg',
      name:'Hangover',
      author:'Taio Cruz',
      src:'http://www.maodan.online/music/1.mp3',
      mid:1
    },
    pic: "/icon/paly.png",
    musiclist:[],
    lrctext:'',
    musiclrc:{}
  },
  lrcshow: function (event) {
        var that = this;
        var s=parseInt(event.detail.currentTime).toString();
        //console.log(this.data.musiclrc[s]);
        that.setData({
          lrctext:this.data.musiclrc[s]
    })
  },
  mlistclick:function(event){
    var that=this;
    this.data.mid=event.currentTarget.dataset.mid-1;
    this.setData({
      singlemusic:this.data.musiclist[this.data.mid],
      pic: "/icon/pause.png"
    })
    lyc(that);
  },
  onLoad:function(options){
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        var height=res.windowHeight-200;
        that.setData({
          scrollTop:height
        })
      }
    });
    wx.request({
      url: 'http://www.maodan.online/php/music.php', 
      success: function(res) {
        //console.log(res);
        that.setData({
          musiclist:res.data
        })
      }
    })
  },
 audioPlay: function () {
   //console.log(123);
    var that = this;
    if (that.data.pic == "/icon/paly.png") {
      //console.log(this.audioCtx);
      setTimeout(function(){
        that.audioCtx.play();
      },500);
      that.setData({
        pic: "/icon/pause.png"
      })
    } else {
      this.audioCtx.pause()
      that.setData({
        pic: "/icon/paly.png"
      })
    }
  },
  next:function(){
    var that=this;
    //console.log(this.data.mid);
    var id=this.data.mid+1;
    if(id>this.data.musiclist.length){
      id=0;
    }
    this.setData({
      pic: "/icon/pause.png",
      mid:id,
      singlemusic:this.data.musiclist[id]
    });
    lyc(that);
  }
})
function parseLyric(lrc) {
  var lyrics = lrc.split("\n");
  var lrcObj = {};
  for (var i = 0; i < lyrics.length; i++) {
    var lyric = decodeURIComponent(lyrics[i]);
    var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
    var timeRegExpArr = lyric.match(timeReg);
    if (!timeRegExpArr) continue;
    var clause = lyric.replace(timeReg, '');
    for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
      var t = timeRegExpArr[k];
      var min = Number(String(t.match(/\[\d*/i)).slice(1)),
        sec = Number(String(t.match(/\:\d*/i)).slice(1));
      var time = min * 60 + sec;
      lrcObj[time] = clause;
    }
  }
  return lrcObj;
}
function lyc(that){
  //歌词请求
    wx.request({
      url: 'http://www.maodan.online/music/' + (that.data.mid+1) + '.lrc',
      method: 'GET',
      success: function (res) {
        var lyric = parseLyric(res.data);
        console.log(lyric);
        that.setData({
          musiclrc:lyric
        })
        setTimeout(function () {
          that.audioCtx.play();
        }, 500)

      }
    });
}