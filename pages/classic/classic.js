
// pages/classic/classic.js
import {
  ClassicModel
} from '../../models/classic.js'
import {
  LikeModel
} from '../../models/like.js'
let classicModel = new ClassicModel(); // 创建classicModel实例
let likecModel = new LikeModel(); // 创建likecModel实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    first: false,
    lastest: true,
    likeStatus: false,
    likeCount: 0
  },
  /**
   * 监听点赞事件
   */
  onLike(event) {
    //服务器请求 
    let behavior = event.detail.behavior
    likecModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },

  /*
  监听期刊切换事件
  */
  onNext(event) {
    this._updateGetClassic('next');
  },
  onPrevious(event) {
    this._updateGetClassic('previous');
  },
  _updateGetClassic(nextOrPrevious) {
    let index = this.data.classic.index;
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id, res.type);
      this.setData({
        classic: res,
        lastest: classicModel.isLastest(res.index),
        first: classicModel.isFirst(res.index)
      });

    })
  },
  _getLikeStatus(id, catygory) {
    likecModel.getClassicLikeStatus(id, catygory, (res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取最近一期刊
    classicModel.getLastest((res) => {
      //数据更新
      this.setData({ // 设置data里属性的值
        classic: res, // 先添加classic到data 再进行数据更新
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      });
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})
