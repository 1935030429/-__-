// pages/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news_data:[],
    knowledge_data:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  onLoad: function (options) {
    var that=this;
    that.setData({
      news_data:[],
      knowledge_data:[]
    })
    wx.request({
      method: 'GET',
      url: 'http://127.0.0.1:3000/getNews',
      success: function (res) {
        console.log(res.data);
        that.setData({news_data:res.data})      
      },
      fail: function () {
        console.log("获取失败");
      }
    });   
    wx.request({
      method: 'GET',
      url: 'http://127.0.0.1:3000/getKnowledge',
      success: function (res) {
        console.log(res.data);
        that.setData({knowledge_data:res.data})      
      },
      fail: function () {
        console.log("获取失败");
      }
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