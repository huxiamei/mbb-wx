// page/test/pages/qqmap/qqmap.js
var QQMapWX = require('../../../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
          key: 'AV5BZ-HU3EO-CDEW2-S344D-VFGDE-5WBSX'
      });
      console.log(qqmapsdk)
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
      // 调用接口
      qqmapsdk.search({
          keyword: '酒店',
          success: function (res) {
              console.log(res);
          },
          fail: function (res) {
              console.log(res);
          },
          complete: function (res) {
              console.log(res);
          }
      });
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