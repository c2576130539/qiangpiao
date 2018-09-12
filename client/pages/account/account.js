var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    openId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '我的'
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

  },
  login: function () {
    if (this.data.logged) return

    util.showBusy('正在登录')
    var that = this

    // 调用登录接口
    qcloud.loginWithCode({
      success: res => {
        console.log(res.openId)
        this.setData({ userInfo: res, logged: true, openId: res.openId})
        util.showSuccess('登录成功')
      },
      fail: err => {
        console.error(err)
        util.showModel('登录错误', err.message)
      }
    })
  },

  showpiao(event) {
    if (!!this.data.openId) {
      var userid = this.data.openId;
      console.log(userid);
      wx.navigateTo({
        url: '../showpiao/showpiao'
      })
    } else {
      util.showModel('未登录', '请先登录');
    }
  }
})