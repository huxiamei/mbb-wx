Page({
    data: {
        markers: [{
            iconPath: "/image/home_activate.png",
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 50,
            height: 50
        }],
        polyline: [{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.324520,
                latitude: 23.21229
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
        }],
        controls: [{
            id: 1,
            iconPath: '/image/home.png',
            position: {
                left: 0,
                top: 300 - 50,
                width: 50,
                height: 50
            },
            clickable: true
        }]
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    },
    onLoad(){
        this.mapCtx = wx.createMapContext('map', this);
        let that = this
        wx.request({
            // url: 'https://apis.map.qq.com/ws/direction/v1/driving/?from=39.915285,116.403857&to=39.915285,116.803857&waypoints=39.111,116.112;39.112,116.113&output=json&callback=cb&key=EZLBZ-YJYC2-KRFUF-CO6RY-CAUMK-FEBBG', //仅为示例，并非真实的接口地址
            url:'https://restapi.amap.com/v3/direction/driving?origin=116.45925,39.910031&destination=116.587922,40.081577&key=0994bcc7867491764b8ca7ef7419f6e3',
            success: function (res) {
                debugger
                let steps = res.data.route.paths[0].steps;
                for (let i = 0; i < steps.length;i++){
                    let xy = steps[i].polyline.split(";");
                    let polylineArr = []
                    xy.forEach(xAndY => {
                        let xyArr = xAndY.split(",");
                        let point = {
                            latitude: xyArr[1],
                            longitude: xyArr[0],
                        }
                        polylineArr.push(point)
                        //将需要展示的点包含在数组中
                    });
                    let line = {
                        points: polylineArr,
                        color: "#0599ef",
                        width: 4,
                        arrowLine: true,
                    }

                    that.data.polyline.push(line);
                }
            }
        })
        console.log(this.data.polyline);
    }
})