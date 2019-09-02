var amapFile = require('../../../../lib/amap-wx.js');//如：..­/..­/libs/amap-wx.js

var markersData = [];
Page({
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        textData: {}
    },
  regionChange(e) {
    console.log(e.causedBy)
  },
    makertap: function (e) {
        var id = e.markerId;
        var that = this;
        that.showMarkerInfo(markersData, id);
        that.changeMarkerColor(markersData, id);
    },
    onLoad: function () {
        var that = this;
        var myAmapFun = new amapFile.AMapWX({ key: '23316539b990e84771e220657db048e4' });
        myAmapFun.getPoiAround({
            iconPathSelected: '../../../../image/home_activate.png', //如：..­/..­/img/marker_checked.png
            iconPath: '../../../../image/home.png', //如：..­/..­/img/marker.png
            success: function (data) {
                markersData = data.markers;
                that.setData({
                    markers: markersData
                });
                that.setData({
                    latitude: markersData[0].latitude
                });
                that.setData({
                    longitude: markersData[0].longitude
                });
                that.showMarkerInfo(markersData, 0);
            },
            fail: function (info) {
                wx.showModal({ title: info.errMsg })
            }
        })
    },
    showMarkerInfo: function (data, i) {
        var that = this;
        that.setData({
            textData: {
                name: data[i].name,
                desc: data[i].address
            }
        });
    },
    changeMarkerColor: function (data, i) {
        var that = this;
        var markers = [];
        for (var j = 0; j < data.length; j++) {
            if (j == i) {
                data[j].iconPath = "../../../../image/icon_API_HL.png"; //如：..­/..­/img/marker_checked.png
            } else {
                data[j].iconPath = "../../../../image/icon_API.png"; //如：..­/..­/img/marker.png
            }
            markers.push(data[j]);
        }
        that.setData({
            markers: markers
        });
    }

})