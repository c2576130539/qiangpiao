import data from '../data'
const app = getApp()

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
   /**
   * 页面的初始数据
   */
  data: {
    title: '',
    movie: {},
    seats: {},
    id: '',
    total: '00.00',
    items: {},
    ceshi: ''
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) { 
    var that = this
    var list = []
    qcloud.request({
      url: `${config.service.host}/weapp/change`,
      login: false,
      success(result) {
        var len = result.data.data.length
        console.log(len)
        for (var i = 0; i < len; i++) {
          //console.log(result.data.data[i])
          list.push(result.data.data[i])
        }
        that.setData({seats: list})
        that.initSeats()
      },
      fail(error) {
        console.log('request fail', error);
      }
    })

    wx.showLoading({ title: '拼命加载中...' })
    
    var xx = getApp().globalData.xx
    if(xx == 1){
      getApp().globalData.id = params.id
      getApp().globalData.xx = 2
    }

    var id = getApp().globalData.id
    var movies = getApp().globalData.movielist
    console.log(id)
    console.log(getApp().globalData.movielist)
    for(var i=0;i<movies.length;i++){
      if(id == movies[i].id){
        this.setData({ title: movies[i].title, movie: movies[i], id: id })
        wx.hideLoading()
        break;
      }
    }
    console.log(this.data.movie)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({ title: this.data.title + '' })
  },

  
  initSeats() {
    //const seatingPlan = data.msg.seatingPlan
    //const mapss = seatingPlan.ajaxSeatBeanList

    const maps = this.data.seats
    //console.log(seatingPlan)
    //console.log(2)
    //console.log(maps)
    //console.log(3)
    //console.log(mapss)
    
    this.$wuxSeats = app.Wux().$wuxSeats.init('movie', {
      maps: maps,
      maxRowIndex: 9,
      maxColumnIndex: 18,
      max: 5,
      onSelect(items) {
        console.log(items)
        var itemsStr = JSON.stringify(items)
        console.log(itemsStr)

        this.page.setData({
          items: items,
          total: (items.length * 20).toFixed(2),
          ceshi: itemsStr,
        })
      },
    })
    //this.$wuxSeats.disabled([`4520200`])
  },

  onShow() { //返回显示页面状态函数
    
    var xx = getApp().globalData.xx
    console.log(xx)
    if (xx == 3) {
      this.setData({items: {}})
      this.setData({ total: '00.00' })
      this.onLoad()//再次加载，实现返回上一页页面刷新
    }
  },

})

