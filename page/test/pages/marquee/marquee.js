// page/test/pages/marquee.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 跑马灯代码开始

      text: "骑行前请注意查看地图中的可骑行范围，超出范围将扣除搬运费，详情请见用车主页面《用车说        明》！！！",

      marqueePace: 1,//滚动速度

      marqueeDistance: 0,//初始滚动距离

      marquee_margin: 30,

      size: 14,

      interval: 20, // 时间间隔
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
    scrolltxt: function () {

        var that = this;

        var length = that.data.length;//滚动文字的宽度

        var windowWidth = that.data.windowWidth;//屏幕宽度

        if (length > windowWidth) {

            var interval = setInterval(function () {

                var maxscrollwidth = length + that.data.marquee_margin;//滚动的最大宽度，文字宽度+间距，如果需要一行文字滚完后再显示第二行可以修改marquee_margin值等于windowWidth即可

                var crentleft = that.data.marqueeDistance;

                if (crentleft < maxscrollwidth) {//判断是否滚动到最大宽度

                    that.setData({

                        marqueeDistance: crentleft + that.data.marqueePace

                    })

                    console.log( that.data.marqueeDistance);
                } else {

                    console.log("替换" + that.data.marqueeDistance);

                    that.setData({

                        marqueeDistance: 0 // 直接重新滚动

                    });

                    clearInterval(interval);

                    that.scrolltxt();

                }

            }, that.data.interval);

        }

        else {
debugger
            that.setData({ marquee_margin: "1000" });//只显示一条不滚动右边间距加大，防止重复显示

        }

    },

    onShow: function () {

        var that = this

        var length = that.data.text.length * that.data.size;//文字长度

        var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度

        that.setData({

            length: length,

            windowWidth: windowWidth

        });

        that.scrolltxt();// 文字消失后立即从右边出现

    },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})