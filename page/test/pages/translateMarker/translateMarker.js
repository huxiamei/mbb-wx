// page/test/pages/translateMarker/translateMarker.js
const mock = require('../../../../util/mock.js')
const app = getApp()
var btnEnable = true
Page({
  data: {
    markers: [{
      iconPath: '/image/car.png',
      id: 20,
      latitude: 31.169527,
      longitude: 121.407722,
      width: 21,
      height: 45,
      rotate: 90,
    }],

    polyLine: []

  },
  onLoad: function () {
    var testPoints = mock.testPoints

    console.log(testPoints)

    let newPolyline = ({
      points: testPoints,
      color: '#5085E7',
      width: 5,
      dottedLine: false
    })
    this.setData({
      polyline: [newPolyline]
    })
    let newMarkers = [];
    newMarkers.push({
      iconPath: '/image/start.png',
      id: 1,
      latitude: testPoints[0].latitude,
      longitude: testPoints[0].longitude,
      width: 28,
      height: 53,
    })
    newMarkers.push({
      iconPath: '/image/end.png',
      id: 2,
      latitude: testPoints[testPoints.length - 1].latitude,
      longitude: testPoints[testPoints.length - 1].longitude,
      width: 28,
      height: 53,
    })
    newMarkers.push({
      iconPath: '/image/car.png',
      id: 20,
      latitude: 31.169527,
      longitude: 121.407722,
      width: 21,
      height: 45,
      rotate: 90,
    })
    console.log(newMarkers)
    this.setData({
      markers: newMarkers
    })
    var that = this
    setTimeout(function () {
      that.mapCtx.includePoints({
        padding: [10, 10, 10, 10],
        points: testPoints
      })

    }, 200)

  },

  onReady: function () {
    this.mapCtx = wx.createMapContext('map', this)
  },

  /**测试点坐标运动 */
  moveMarker: function () {
    if (!btnEnable) {
      return
    }

    var points = this.data.polyline[0].points

    this.loopAnamation(points, 0, 20)

    btnEnable = false
  },

  /**
   *  创建循环动画
   */
  loopAnamation: function (subArray, index, markerId) {

    var that = this
    if (index >= subArray.length) {
      btnEnable = true
      return
    }
    console.log('开始移动第', index, '个点', 'markerId：', markerId, subArray)
    that.mapCtx.translateMarker({
      markerId: 20,
      autoRotate: true,
      duration: 15000 / (subArray.length - 1),
      destination: {
        latitude: subArray[index].latitude,
        longitude: subArray[index].longitude,
      },
      animationEnd() {
        console.log('animation end')
        that.loopAnamation(subArray, index + 1, markerId)
      },
      fail: function (e) {
        console.log("来了老弟");
        console.log(e);
      }
    })
  },
})

