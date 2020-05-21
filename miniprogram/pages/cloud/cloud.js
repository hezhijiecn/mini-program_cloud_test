// pages/cloud/cloud.js
const db = wx.cloud.database();//初始化数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  insert :function(){
    // db.collection('user').add({
    //   data:{
    //     name:'jerry',
    //     age:'20'
    //   },
    //   success: res=>{ //剪头函数
    //     console.log(res);
    //   },
    //   fail:err=>{
    //     console.log(err);
    //   }
    // })
    db.collection('user').add({
      data:{
        name:"jack",
        age:23
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  update:function(){
    db.collection('user').doc('331568005ec648d400008ed2704d0c22').update({
      data:{
        age:24
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  search:function(){
    db.collection('user').where({
      name:'jack'
    }).get().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  delete:function(){
    db.collection('user').doc('331568005ec648d400008ed2704d0c22').remove().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  sum:function(){
    wx.cloud.callFunction({
      name:'sum',
      data:{
        a:2,
        b:3
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  multiple:function(){
    wx.cloud.callFunction({
      name:'multiple',
      data:{
        a:2,
        b:3
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  getopenId:function(){
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  Delete:function(){
    wx.cloud.callFunction({
      name:'batchDelete'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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