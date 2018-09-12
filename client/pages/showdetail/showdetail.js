var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    piao: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showBusy('请求中...')
    var that = this
    this.setData({
      num: options.num,
    });
    wx.setNavigationBarTitle({
      title: '我的影票'
    })

    console.log(options.num)

    var value = {
      num: options.num,
    }
    // console.log(value);
    qcloud.request({
      url: `${config.service.host}/weapp/piao`,
      login: true,
      data: value,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log(result.data)
        that.setData({
          piao: result.data.data[0]
        })
        console.log(that.data.piao)
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })

    this.$wuxQrcode = app.Wux().$wuxQrcode
    this.$wuxQrcode.init('qrcode', options.num)

  },

  navigateBack: function () {
    var that = this
    var seats = that.data.piao.seat
    var seat = seats.split(" ")
    for(var i=0;i<seat.length - 1;i++){
      var label = seat[i];
      console.log(label)
      var value = {
        label: label,
        disabled: 0,
      }
      qcloud.request({
        url: `${config.service.host}/weapp/updatewz`,
        login: false,
        data: value,
        success(result) {
        },
        fail(error) {
          console.log('request fail', error);
        }
      })
    }

    var values = {
      num: that.data.num,
    }
    qcloud.request({
      url: `${config.service.host}/weapp/delpiao`,
      login: false,
      data: values,
      success(result) {
        wx.navigateBack()
      },
      fail(error) {
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

  }
})