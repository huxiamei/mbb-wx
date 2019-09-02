var app = getApp()
Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
      // 查看是否授权
      wx.getSetting({
          success: function (res) {
              if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  wx.getUserInfo({
                      success: function (res) {
                          console.log(res.userInfo)
                      }
                  })
              }
          }
      })
  },

//   bindGetUserInfo: function (e) {
//       console.log(e.detail.userInfo);
//       this.setData({
//           hasUserInfo: true,
//           userInfo: e.detail.userInfo
//       })
//       this.update()
//   },

  getUserInfo: function () {
    var that = this

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
            console.log('1')
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update()
        },
        complete: function (res) {
            console.log(res);
            wx.showModal({
                content: res.errMsg,
                confirmText: "确定",
                cancelText: "取消"
            })
        }
      })
    }
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})
