// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movielist:[],
    flag:1
  },
// 小程序请求api
  getMovieList:function(){
    wx.showLoading({
      title: '正在加载',
    });
    var that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      data:{
        start: this.data.movielist.length,
        count: 10
      },
      header:{
        "Content-Type":"application/xml"
      },
      success(res){
        // console.log(res.data.subjects)
        that.setData({
          movielist:that.data.movielist.concat(res.data.subjects)
        })
        wx.hideLoading();
      }
    })
  },
  // 云函数请求api
  cloudgetmoive:function(){
    wx.showLoading({
      title: '正在加载',
    });
    wx.cloud.callFunction({
      name:'moveList',
      data:{
        start: this.data.movielist.length,
        count: 10
      },
    }).then(res=>{
      this.setData({
        movielist:this.data.movielist.concat(JSON.parse(res.result).subjects)
      });
      // console.log(res)
      wx.hideLoading();
    }).catch(err=>{
      console.error(err)
      wx.hideLoading();
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.flag==0){
      this.getMovieList()
      console.log('本地函数获得api ',this.data.flag)
    }else{
      this.cloudgetmoive()
      console.log('云函数获得api ',this.data.flag)
    }
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
    if(this.data.flag==0){
      this.getMovieList()
      console.log('本地函数获得api ',this.data.flag)
    }else{
      this.cloudgetmoive()
      console.log('云函数获得api ',this.data.flag)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})