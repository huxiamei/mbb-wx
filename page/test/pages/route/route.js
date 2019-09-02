var amapFile = require('amap-wx.js');
// let plugin = requirePlugin("myPlugin")
// let routeInfo = {
//     startLat: 39.94055,    //起点纬度 选填
//     startLng: 116.43107,    //起点经度 选填
//     startName: "我的位置",   // 起点名称 选填
//     endLat: 39.94055,    // 终点纬度必传
//     endLng: 116.43207,  //终点经度 必传
//     endName: "来福士购物中心",  //终点名称 必传
//     mode: 'car'  //算路方式 选填
// }
Page({
    data: {
        markers: [{
            iconPath: "../../img/mapicon_navi_s.png",
            id: 0,
            latitude: 39.989643,
            longitude: 116.481028,
            width: 23,
            height: 33
        }, {
            iconPath: "../../img/mapicon_navi_e.png",
            id: 0,
            latitude: 39.90816,
            longitude: 116.434446,
            width: 24,
            height: 34
        }],
        distance: '',
        cost: '',
        polyline: []
    },
    onLoad: function () {
        var that = this;
        var myAmapFun = new amapFile.AMapWX({ key: '23316539b990e84771e220657db048e4' });
        myAmapFun.getDrivingRoute({
            origin: '116.481028,39.989643',
            destination: '116.434446,39.90816',
            success: function (data) {
                var points = [];
                if (data.paths && data.paths[0] && data.paths[0].steps) {
                    var steps = data.paths[0].steps;
                    for (var i = 0; i < steps.length; i++) {
                        var poLen = steps[i].polyline.split(';');
                        for (var j = 0; j < poLen.length; j++) {
                            points.push({
                                longitude: parseFloat(poLen[j].split(',')[0]),
                                latitude: parseFloat(poLen[j].split(',')[1])
                            })
                        }
                    }
                }
                that.setData({
                    polyline: [{
                        points: points,
                        color: "#0091ff",
                        width: 6
                    }]
                });
                if (data.paths[0] && data.paths[0].distance) {
                    that.setData({
                        distance: data.paths[0].distance + '米'
                    });
                }
                if (data.taxi_cost) {
                    that.setData({
                        cost: '打车约' + parseInt(data.taxi_cost) + '元'
                    });
                }

            },
            fail: function (info) {

            }
        })
    },
    goDetail: function () {
        wx.navigateTo({
            url: '../navigation_car_detail/navigation'
        })
    },
    goToCar: function (e) {
        wx.redirectTo({
            url: '../navigation_car/navigation'
        })
    },
    goToBus: function (e) {
        wx.redirectTo({
            url: '../navigation_bus/navigation'
        })
    },
    goToRide: function (e) {
        wx.redirectTo({
            url: '../navigation_ride/navigation'
        })
    },
    goToWalk: function (e) {
        wx.redirectTo({
            url: '../navigation_walk/navigation'
        })
    }
})
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//       routeInfo: null
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
  
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
  
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
  
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
  
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
  
//   }
// })