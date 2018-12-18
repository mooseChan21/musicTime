// components/classic/music/index.js
//import {classicBeh} from '../classic-beh.js'
const mMusic = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  //behaviors:[classicBeh],
  properties: {
    title:String,
    src:String,
    hidden:Boolean,
    img:String,
    content: String
  },
  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc:"images/player@pause.png",
    playSrc:"images/player@play.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(){
      let playing = !this.data.playing
      if(playing){
        mMusic.src= this.properties.src;
        mMusic.title = this.properties.title;
     }else{
      mMusic.pause()
     }
     this.setData({
      playing:playing
    })
  }
  }
})
