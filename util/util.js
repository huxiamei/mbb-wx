const host = require('../config').host

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url,
            method: 'POST',
            data: data,
            header: {
                'Authorization': wx.getStorageSync('Authorization')
            },
            success: function (res) {
                    if (res.data.returnFlag==200) {
                    res.header.Authorization && wx.setStorageSync('Authorization', res.header.Authorization)
                    resolve(res.data.data)
                } else {
                    wx.showModal({
                        content: res.data.returnInfo,
                        showCancel: false
                    });
                    reject(res.data.returnInfo)
                }
            },
            fail: function ({ errMsg }) {
                console.log('submit form fail, errMsg is:', errMsg)
                wx.showModal({
                    content: errMsg,
                    showCancel: false
                });
                reject(errMsg)
            }
        })
    });
}

const get = (url) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url,
            method: 'GET',
            header: {
                'Authorization': wx.getStorageSync('Authorization')
            },
            success: function (res) {
                if (res.data.returnFlag==200) {
                    res.header.Authorization && wx.setStorageSync('Authorization', res.header.Authorization)
                    resolve(res.data.data)
                } else {
                    wx.showModal({
                        content: res.data.message,
                        showCancel: false
                    });
                    reject(res.data.message)
                }
            },
            fail: function ({ errMsg }) {
                console.log('submit form fail, errMsg is:', errMsg)
                wx.showModal({
                    content: errMsg,
                    showCancel: false
                });
                reject(errMsg)
            }
        })
    });
}

function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

const params = { "h": { "deviceId": "fixedDeviceID", "userToken": "", "appCode": "330900", "codeValue": "3309", "sourceCodeValue": "330900" }, "b": { "lineId": "330900321", "offset": 100 } }

module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  post: post,
  get: get,
  params: params
}
