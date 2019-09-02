Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function (e) {
      // 使用 wx.createMapContext 获取 map 上下文
      this.mapCtx = wx.createMapContext('myMap');
    //   this.moveToLocation();
  },
  getCenterLocation: function () {
      this.mapCtx.getCenterLocation({
          success: function (res) {
              console.log(res.longitude)
              console.log(res.latitude)
          }
      })
  },
  moveToLocation: function () {
      this.mapCtx.moveToLocation()
  },
  getCurrentLocation: function () {
    //   wx.getLocation({
    //       type: 'wgs84',
    //       success: function (res) {
    //           var latitude = res.latitude
    //           var longitude = res.longitude
    //           var speed = res.speed
    //           var accuracy = res.accuracy
    //       },
    //       complete: function (res) {
    //         console.log(res);
    //       }
    //   })
      wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function (res) {
              var latitude = res.latitude
              var longitude = res.longitude
              wx.openLocation({
                  latitude: latitude,
                  longitude: longitude,
                  scale: 18
              })
          }
      })
  },
  chooseLocation: function () {
      wx.chooseLocation({
          success: function (res) {
            var name = res.name;
            var address = res.address;
            var latitude = res.latitude;
            var latitude = res.latitude;
          },
          complete: function (res) {
            console.log(res);
          }
      })
  }
})
