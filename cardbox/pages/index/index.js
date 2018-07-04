//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '编程猫',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  // onPullDownRefresh: function () {
  //   wx.showToast({
  //     title: 'Loading...',
  //     icon: 'loading',
  //     duration: 1500
  //   });
  //   wx.stopPullDownRefresh()
  // },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  openToast: function () {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 3000
    });
  }
})
