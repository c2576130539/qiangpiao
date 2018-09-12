import data from '../data'
//index.js
//获取应用实例
const app = getApp()

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    title: '',
    movie: {},
    items: {},
    time: '2018-09-09 16:33',
    place: '湘潭左岸国际影城 5号厅',
    wz: '',
    num: ''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {
    getApp().globalData.xx = 3
    var that = this;
    var itemsStr = JSON.parse(params.items)
    var j = itemsStr.length
    var wz = ''
    var num = ''
    for (var j = 0; j < itemsStr.length; j++) {
      var label = itemsStr[j].label
      wz = wz + label + " "
      num = num + itemsStr[j].id
      that.setData({
        wz: wz,
        num: num
      })
      console.log(label)
      var value = {
        label: label,
        disabled: 1,
      }
      qcloud.request({
        url: `${config.service.host}/weapp/updatewz`,
        data: value,
        login: false,
        success(result) {
          util.showSuccess('购买成功')
        },
        fail(error) {
          console.log('request fail', error);
        }
      })
    }

    var id = getApp().globalData.id
    var movies = getApp().globalData.movielist
    console.log(id)
    console.log(getApp().globalData.movielist)
    for (var i = 0; i < movies.length; i++) {
      if (id == movies[i].id) {
        this.setData({ title: movies[i].title, movie: movies[i], items: itemsStr })
        break;
      }
    }
    console.log(this.data.movie)

    var piao = {
      title: this.data.movie.title,
      zp: this.data.movie.imagessmall,
      userid: getApp().globalData.openId,
      place: '湘潭左岸影城5号厅',
      time: '2018/9/9 18:33-2018/9/9 20:03',
      seat: this.data.wz,
      num: this.data.num,
    }

    qcloud.request({
      url: `${config.service.host}/weapp/addpiao`,
      data: piao,
      login: false,
      success(result) {
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })

    this.$wuxQrcode = app.Wux().$wuxQrcode
    this.$wuxQrcode.init('qrcode', this.data.num)     
  },

})
