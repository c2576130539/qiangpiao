import data from '../data'
const paymentUrl = require('../../config').paymentUrl

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

var app = getApp()

Page({
  data: {
    id:'0',
    total: '00.00',
    items: '',
    xx: 1,
    flag: true
  },
  onLoad(params) {
    this.setData({
      id: getApp().globalData.id,
      total: params.total,
      items: params.items
    })
    console.log(params.items)

    if (params.total == '00.00'){
      this.setData({ flag: false })
    }
    console.log(this.data.flag)
  },

  /*
  requestPayment: function () {
    var self = this

    self.setData({
      loading: true
    })
    // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
    // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.request({
          url: paymentUrl,
          data: {
            openid
          },
          method: 'POST',
          success: function (res) {
            console.log('unified order success, response is:', res)
            var payargs = res.data.payargs
            wx.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign
            })

            self.setData({
              loading: false
            })
          }
        })
      } else {
        console.log('err:', err)
        self.setData({
          loading: false
        })
      }
    })
  }
  */

  navigateBack: function () {
    console.log('执行')
    wx.navigateBack()
  },

  redirectTo: function () {
    var that = this
    var items = that.data.items
    var itemsStr = JSON.parse(items);
    var j = itemsStr.length
    for (var i = 0; i < itemsStr.length; i++) {
      var wz = itemsStr[i].label;
      console.log(wz)
      var value = {
        wz: wz,
      }
      qcloud.request({
        url: `${config.service.host}/weapp/findwz`,
        login: false,
        data: value,
        success(result) {
          j--;
          var x = result.data.data[0].disabled
          if (x) {
            util.showSuccess('购买失败')
            that.setData({xx: 0})
            that.tiaozhuan()
          }else
          if(j == 0){
            util.showSuccess('购买成功')
            that.tiaozhuan()
          }
          console.log(result.data.data[0])
        },
        fail(error) {
          console.log('request fail', error);
        }
      })
    }
  },

  tiaozhuan(){
    var that = this
    var xx = that.data.xx
    var id = that.data.id
    var items = that.data.items
    console.log('xx='+xx)
    console.log(id)
    console.log(items)
    if (xx == 1) {
      wx.redirectTo({ url: '../detail/detail?items=' + items })
    } else {
      wx.redirectTo({ url: '../seats/seats' })
    }
  }

})
