// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  // 在组件定义时的选项中启用多slot支持
  options: {
    multipleSlots: true 
  },
  // 外部向组件内部传递样式
  externalClasses:['tag-class'],
  properties: {
    text:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event){
      this.triggerEvent('tapping',{text:this.properties.text},{});
  }

}
})
