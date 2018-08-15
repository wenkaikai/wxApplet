var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  onLoad:function(){
    wx.setNavigationBarTitle({title:"scroll-view"})
  },
  upper: function (e) {
    //为什么他能直接触发
    console.log("已经到顶部了")
  },
  lower: function (e) {
    //为什么他能直接触发
    console.log("已经到底部了")
  },
  scroll: function (e) {
    // console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})