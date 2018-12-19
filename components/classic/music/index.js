// components/classic/music/index.js
//import {classicBeh} from '../classic-beh.js'
const mMusic = wx.getBackgroundAudioManager();
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
  created(){
  },
  attached(){
    this._recoverStatus();
    this._monitorSwitch();
  },
  ready(){
   
  },
  show(){
    
  },
  hide(){
    
  },
  detached(){  
    //在组件实例被从页面节点树移除时执行  hidden 不会触发 wx:if 会触发  再次进入回到组件会重新渲染组件 包括属性等

  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(){
     if(!this.data.playing){
        mMusic.src= this.properties.src;
        mMusic.title = this.properties.title;
        this.setData({
          playing:true
        })
     }else{
      // 暂停 并且缓存播放时间
      this.setData({
        playing:false
      })
      mMusic.pause()
     }
  },
  _recoverStatus(){
   if(mMusic.paused){  //结束/停止/暂停后此值均为true
      this.setData({
        playing:false
      })
      return;
    }
   else if(mMusic.src == this.properties.src){  // 判断当前播放音乐的src地址与切换的是否相同
      this.setData({
        playing:true
      })
    }
  },
  _monitorSwitch(){
     mMusic.onPlay(()=>{
      this._recoverStatus();
     })
     mMusic.onPause(()=>{
      this._recoverStatus();
    })
    mMusic.onStop(()=>{
      this._recoverStatus();
    }) 
    mMusic.onEnded(()=>{
      this._recoverStatus();
    }) 
  }
  }
})
