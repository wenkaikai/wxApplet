// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitList: [],
    totalList:[],
    count:5,
    obj:{
      id:10,
      name:"123"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b3981c7c4dcd03fb7171981/example/test1',
      complete: res => {
        this.setData({
          totalList: res.data.data,
          fruitList: res.data.data.slice(0,5),
        })
        console.log(this.data.fruitList);
      },
    });
  this.data.obj.name = "456"
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
console.log(this.data.obj)
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
  onReachBottom: function (e) {
    var count = this.data.count;
    var totalList = this.data.totalList;
    var fruitList = this.data.fruitList;
    var count1 = count+5;
    fruitList = totalList.slice(0,count1);
    this.setData({
      count:count1,
      fruitList:fruitList,
    })
    console.log(fruitList);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})