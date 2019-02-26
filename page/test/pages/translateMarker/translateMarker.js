// page/test/pages/translateMarker/translateMarker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    latitude: 30.218400,
    longitude: 120.21201,
    markers: [{
      id:1,
      latitude: 30.218400,
      longitude: 120.21201,
      name: 'T.I.T 创意园',
      iconPath:'/image/state.png'
    // }, {
    //     id: 2,
    //     latitude: 30.218400,
    //     longitude: 120.21201,
    //     name: 'T.I.T 创意园',
    //     iconPath: '/image/icon_foot.png'
      }],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onReady: function (e) {
      let that = this;
      // 使用 wx.createMapContext 获取 map 上下文
      that.mapCtx = wx.createMapContext('map');
      for (let i = 0; i < that.data.markers.length;i++){
        that.mapCtx.translateMarker({
          markerId: that.data.markers[i].id,
          destination: { 
            longitude: 120.22241, 
            latitude: 30.216600
          },
          autoRotate: true,
          rotate: 0,
          duration: 1000,
          animationEnd: function (e) {
            that.mapCtx.translateMarker({
              markerId: that.data.markers[i].id,
              destination: {
                longitude: 120.20201,
                latitude: 30.215600
              },
              autoRotate: true,
              // rotate: 180,
              duration: 2000,
            }) 
            that.setData({
              markers: that.data.markers
            })
          },
          success: function (e) {
            console.log(e)
          }
        })
      }
    }
  }
})
