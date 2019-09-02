// page/test/pages/translateMarker2/translateMarker2.js
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
    latitude: 23.103425,
    longitude: 113.184133,
    markIndex: 0,
    markers: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onReady: function (e) {
      this.data.markers.push({
        id: 1,
        latitude: 23.103425,
        longitude: 113.184133,
        rotate: 0
      })
      this.setData({
        markers: this.data.markers
      })

      setInterval(() => {
        this.moveMark()
      }, 1000)
    },
    moveMark() {
      this.setData({
        markIndex: this.data.markIndex + 1
      })

      let rotate = 0 + (5 * this.data.markIndex);
      // this.data.markers[0].rotate = rotate.toString();
      this.data.markers[0].rotate = rotate
      this.setData({
        markers: this.data.markers
      })
      // setTimeout(() => {
      //   this.moveMark()
      // }, 200)
    }
  }
})
