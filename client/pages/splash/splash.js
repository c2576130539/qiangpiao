// 获取全局应用程序实例对象
const app = getApp()

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    loading: true
  },

  getCache () {
    return new Promise(resolve => {
      app.wechat.getStorage('last_splash_data')
        .then(res => {
          const { movies, expires } = res.data
          // 有缓存，判断是否过期
          if (movies && expires > Date.now()) {
            return resolve(res.data)
          }
          // 已经过期
          console.log('uncached')
          return resolve(null)
        })
        .catch(e => resolve(null))
    })
  },

  bindGetUserInfo: function () {
    if (this.data.logged) return

    util.showBusy('正在登录')

    const session = qcloud.Session.get()

    if (session) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          console.log(res.openId)
          getApp().globalData.openId = res.openId
          //this.setData({ userInfo: res, logged: true })
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    } else {
      // 首次登录
      qcloud.login({
        success: res => {
          console.log(res.openId)
          getApp().globalData.openId = res.openId
          //this.setData({ userInfo: res, logged: true })
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    }

    wx.switchTab({
      url: '../home/home'
    })

  },
  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.getCache()
      .then(cache => {
        if (cache) {
          return this.setData({ movies: cache.movies, loading: false })
        }

        app.douban.find('coming_soon', 1, 3)
          .then(d => {
            this.setData({ movies: d.subjects, loading: false })
            return app.wechat.setStorage('last_splash_data', {
              movies: d.subjects,
              expires: Date.now() + 1 * 24 * 60 * 60 * 1000
            })
          })
          .then(() => console.log('storage last splash data'))
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }

})
