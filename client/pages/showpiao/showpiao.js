var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    userid: '',
    piaolist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    util.showBusy('请求中...')
    var that = this
    this.setData({
      userid: getApp().globalData.openId,
    });
    wx.setNavigationBarTitle({
      title: '我的影票'
    })
    var value = {
      userid: getApp().globalData.openId,
    }
    // console.log(value);
    qcloud.request({
      url: `${config.service.host}/weapp/findpiao`,
      login: true,
      data: value,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log(result.data)
        var len = result.data.data.length
        console.log(len)
        var list = []
        for (var i = 0; i < len; i++) {
          console.log(result.data.data[i])
          list.push(result.data.data[i])
        }
        console.log(list)
        that.setData({
          piaolist: list
        })

        console.log(that.data.piaolist)
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  onShow() { //返回显示页面状态函数
    this.onLoad()
  }


})