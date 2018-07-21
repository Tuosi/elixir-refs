//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    food: "食物",
    sliders: [
      {
        "id": 1,
        "image": "/assets/images/avatar.jpg"
      },
      {
        "id": 1,
        "image": "/assets/images/avatar.jpg"
      }
    ],
    navList: [
      {
       "id": 1,
       "image": "/assets/images/1.png",
       "title": "食物",
       "link": "/pages/foods/foods" 
      },
      {
        "id": 2,
        "image": "/assets/images/2.png",
        "title": "超能"
      },
      {
        "id": 3,
        "image": "/assets/images/3.png",
        "title": "美食"
      },
      {
        "id": 4,
        "image": "/assets/images/4.png",
        "title": "玩具"
      },
      {
        "id": 5,
        "image": "/assets/images/5.png",
        "title": "辣条"
      },
      {
        "id": 6,
        "image": "/assets/images/6.png",
        "title": "动漫"
      },
      {
        "id": 7,
        "image": "/assets/images/7.png",
        "title": "小说"
      },
      {
        "id": 8,
        "image": "/assets/images/8.png",
        "title": "微信"
      },
      {
        "id": 9,
        "image": "/assets/images/9.png",
        "title": "啊哈"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    wx.request({
      url: 'https://locally.uieee.com/slides',
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        // this.setData({
        //   sliders: res.data
        // })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
