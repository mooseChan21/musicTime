// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/book.js'
import{
  LikeModel
} from '../../models/like.js'

const bookModel = new BookModel();
const likeModel = new LikeModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      book:null,
      comments:[],
      likeStatus:false,
      likeCount:0,
      posting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bid = options.bid;
    const detail = bookModel.getBookDetail(bid);
    this.getBookComments(bid);
    const likeStatus = bookModel.getBookFavr(bid); 
    detail.then(res=>{
      this.setData({
        book:res
      })
    })
    likeStatus.then(res=>{
      this.setData({
        likeStatus:res.like_status,
        likeCount:res.fav_nums
      })
  })
 },
  getBookComments(bid){
    bookModel.getBookShotComment(bid).then(res=>{
      this.setData({
        comments:res.comments
      })
    })
  },
  onFakePost(){
       this.setData({
         posting:true
       })
    },
  onCancel: function(){
      this.setData({
        posting:false
      })
    },
  addPostingTag(obj){ //添加短评
      const comment = obj.detail.text;
      bookModel.addBookShotComment({
        book_id:this.data.book.id,
        content:comment}
        ).then(res=>{
            this.getBookComments(this.data.book.id);  // 查询短评
            this.setData({
               posting:false
            })
            wx.showToast({
              title:'短评+1',
              icon:'none',  // 真鸡有效           
              duration: 2000
            })
      })
    },
  onPost(){ //发送短评
  },  
 /**
   * 监听点赞事件
   */
  onLike(event) {
    //服务器请求 
    let behavior = event.detail.behavior;
    likeModel.like(behavior, this.data.book.id, 400);
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