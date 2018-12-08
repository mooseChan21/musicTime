// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //开放数据 暴露到使用组件的页面中 做数据绑定更新或者其他作用
    like:{  // 写法类似于vue props
      type:Boolean, //必填
      value:false,  // 选填
      observe(){  // 选填
      }
    },
    count:{
      type:Number,//必填
      value:0,// 选填
      observe(){// 选填
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 数据绑定
    // 三元表达式  属性可以使用 文本内也可以使用  {{}} 最好进行代码优化
    // 封装性 开放性
    // 封装在内部 ，开放出来的
    // 粒度  
    // 非常简单的功能   非常复杂的功能  确定哪些功能可以封装在组件李里面  哪些是要开发出来的
    //封闭数据
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png',
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event){  // 关注事件触摸
      console.log(event);
      this.properties.like = !this.properties.like;
      this.properties.like?this.properties.count++:this.properties.count--;
      this.setData({  // 更新数据 渲染到页面上 setData
        count:this.properties.count,
        like:this.properties.like
      })
   }
  }
})
