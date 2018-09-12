//app.js
import Wux from 'components/wux'


var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')


/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * Douban API 模块
 * @type {Object}
 */
const douban = require('./utils/douban.js')

/**
 * Baidu API 模块
 * @type {Object}
 */
const baidu = require('./utils/baidu.js')


globalData: {
  id: '';
  xx: '1';
  openId: '';
  movielist: []
}

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: 'Douban Movie',
    version: '0.1.0',
    currentCity: '北京'
  },

  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * Douban API
   */
  douban: douban,

  /**
   * Baidu API
   */
  baidu: baidu,


  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch() {

    qcloud.setLoginUrl(config.service.loginUrl)

    wechat
      .getLocation()
      .then(res => {
        console.log(res)
        const { latitude, longitude } = res
        return baidu.getCityName(latitude, longitude)
      })
      .then(name => {
        this.data.currentCity = name.replace('市', '')
        console.log(`currentCity : ${this.data.currentCity}`)
      })
      .catch(err => {
        this.data.currentCity = '北京'
        console.error(err)
      })
    


    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  Wux: Wux,
  WxValidate: (rules, messages) => new WxValidate(rules, messages),
  globalData: {
    userInfo: null
  }
})
