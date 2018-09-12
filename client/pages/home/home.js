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
    title: '',
    subtitle: '加载中...',
    type: 'in_theaters',
    hasMore: true,
    page: 1,
    size: 20,
    movies: []
  },

  loadMore() {

    if (!this.data.hasMore) return

    wx.showLoading({ title: '拼命加载中...' })
    this.setData({ subtitle: '加载中...' })

    return app.douban.find(this.data.type, this.data.page++, this.data.size)
      .then(d => {
        if (d.subjects.length) {
          this.setData({ subtitle: d.title, movies: this.data.movies.concat(d.subjects) })
          getApp().globalData.movielist = this.data.movies

          console.log(d.title)
          console.log(getApp().globalData.movielist)
          console.log(this.data.movies.concat(d.subjects))
        } else {
          this.setData({ subtitle: d.title, hasMore: false })
        }
        wx.hideLoading()
      })
      .catch(e => {
        this.setData({ subtitle: '获取数据异常' })
        console.error(e)
        wx.hideLoading()
      })
  },

  xianshi(){

    var that = this
    var list = []

    qcloud.request({
      url: `${config.service.host}/weapp/findmovie`,
      login: false,
      success(result) {
        var len = result.data.data.length
        console.log(len)
        for (var i = 0; i < len; i++) {
          //console.log(result.data.data[i])
          list.push(result.data.data[i])
        }
        that.setData({ movies: list })
        console.log(list)
        getApp().globalData.movielist = list
      },
      fail(error) {
        console.log('request fail', error);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {

    getApp().globalData.xx = 1
    this.xianshi()
    //this.loadMore()
  },

  onShow() { //返回显示页面状态函数
    getApp().globalData.xx = 1
    //this.loadMore()
    //this.onLoad()//再次加载，实现返回上一页页面刷新
  },
  
})
