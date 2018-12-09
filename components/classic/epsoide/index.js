// components/classic/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{  //供外部使用
      type:String,
      value:0,
      observer(newVal,oldVal,changedPath){  // 不要尝试在observer使用setData
         let val = newVal<10?'0'+newVal:newVal;
         this.setData({
           //index: val // 不要尝试在observer使用setData  形成循环递归调用
           _index:val
         })
      }
    }
  },
//组件生命周期函数
attached(){
  let months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  //console.log(this.properties,this.data);//小程序处理properties data指向同一片内存空间 为啥这么做，我也不懂
  let date = new Date();
  let year = date.getFullYear();
  let month = this.data.months[date.getMonth()];
  this.setData({
    year:year,
    month:month
  })
},
  /**
   * 组件的初始数据
   */
  data:{
    months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    month:'',
    year:0,
    _index:'' //私有
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
