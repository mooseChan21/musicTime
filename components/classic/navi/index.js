// components/classic/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {  // 暴露到使用组件的page 作为属性传递
    title:{
      type:String,
      value:""
    },
    first:{
      type:Boolean
    },
    lastest:{
      type:Boolean
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
       disLeftSrc:'images/triangle.dis@left.png',
       disRightSrc:'images/triangle.dis@right.png',
       leftSrc:'images/triangle@left.png',
       rightSrc:'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 自定义事件
        onLeft:function(event){
          if(!this.properties.lastest){  // 判断是否能点击 最新一期  左边不能点击
            this.triggerEvent('left',{},{}) 
          }
        },
        onRight(event){
          if(!this.properties.first){  // 最早一期右边不能点击
            this.triggerEvent('right',{},{})
          }
        }
  }
})
