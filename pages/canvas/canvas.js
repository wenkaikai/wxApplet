// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const ctx = wx.createCanvasContext('myCanvas')
    // ctx.setFillStyle('red')
    // ctx.fillRect(10, 10, 150, 150)
    // ctx.draw(true,function(){console.log("dsfsfsdfsdfsdfsfsafd")})
    this.createNewImg();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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
  
  },
  createNewImg: function (QD) {
    var that = this;
    var context = wx.createCanvasContext('myCanvas');
    // context.fill
    var path = "https://zybkxcx.yxke12.cn/weixin/assets/images/signBg.jpg";
    var path1 = "https://zybkxcx.yxke12.cn/weixin/assets/images/sign_font.png";
    wx.getImageInfo({
      src: path,
      success: function (res) {
        context.drawImage(res.path, 0, 0, 375, 500);
        context.clearRect( 0, 0, 375, 500);
        context.draw(false, setTimeout(function () {
          wx.canvasToTempFilePath({
            // x: 0, //画布x轴起点（默认0）
            // y: 0,//画布y轴起点（默认0）
            // width: 50,//画布宽度（默认为canvas宽度-x）
            // height: 50,//画布高度（默认为canvas高度-y）
            // destWidth: 100,//输出图片宽度（默认为 width * 屏幕像素密度）
            // destHeight: 100,// 	输出图片高度（默认为 height * 屏幕像素密度）
            canvasId: 'myCanvas',
            success: function (res) {
              var tempFilePath = res.tempFilePath;
              that.setData({
                imagePath: tempFilePath,
                maskHidden: false
                // canvasHidden:true
              });
              wx.hideToast()
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function (res) {
                  console.log(res)
                }

              })
            },
            fail: function (res) {
              console.log(res);
            }
          })
        }, 1000));
      }
    })   
    context.fillStyle = 'red';
    //console.log(QD)
    //var QD = 'https://xcx.upload.utan.com/article/coverimage/2018/01/25/eyJwaWMiOiIxNTE2ODU2Nzc0Njk3OCIsImRvbWFpbiI6InV0YW50b3V0aWFvIn0=';
    //将模板图片绘制到canvas,在开发工具中drawImage()函数有问题，不显示图片
    //不知道是什么原因，手机环境能正常显示
    // context.drawImage(path, 0, 0, 375, 500);
    // context.drawImage(path1, 10, 10, 200, 100);
    // // context.drawImage(QD, 10, 390, 65, 65);
    // //context.draw(true);
    // //context.draw();
    // context.setFillStyle('#832d3b');
    // context.setFontSize(10);
    // context.fillText(this.data.remainTxt1, 60, 130, 100);
    // context.fillText(this.data.remainTxt3, 80, 155, 100);
    // context.fillText(this.data.remainTxt5, 160, 155, 100);
    // context.fillText(this.data.remainTxt6, 75, 180, 100);
    // context.fillText(this.data.remainTxt8, 140, 180, 100);

    // context.setFillStyle('#e24342');
    // context.setFontSize(10);
    // context.fillText(this.data.remainTxt2, 65, 155, 100);
    // context.fillText(this.data.remainTxt4, 150, 155, 100);
    // context.fillText(this.data.remainTxt7, 115, 180, 100);

    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    wx.showToast({
      title: '分享图片生成中...',
      icon: 'loading',
      duration: 1000
    });

    //绘制图片
    console.log(context)
  
  },
})