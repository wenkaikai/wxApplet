Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    console.log(wx.STATUS_BAR_HEIGHT)
    console.log("onLoad")
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
/*
列子一
*/
       // queryMultipleNodes: function() {//声明节点查询的方法
    //   var query = wx.createSelectorQuery()//创建节点查询器 query
    //   query.select('#the-id').boundingClientRect()//这段代码的意思是选择Id=the-id的节点，获取节点位置信息的查询请求
    //   query.selectViewport().scrollOffset()//这段代码的意思是获取页面滑动位置的查询请求
    //   query.exec(function (res) {
    //     res[0].top       // #the-id节点的上边界坐标
    //     res[1].scrollTop // 显示区域的竖直滚动位置
    //   })
  //   console.log("onShow")
  //   var query = wx.createSelectorQuery()
  //  query.select('#myImage').boundingClientRect();
  //   query.exec(function (res) {
  //     console.log(res[0].top)       // #the-id节点的上边界坐
  //     console.log(res[1].scrollTop)      // 显示区域的竖直滚动位置
  //   })



/*
列子二
*/
    // wx.createSelectorQuery()
    // 返回一个SelectorQuery对象实例。可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的信息。
    
    //selectorQuery.select(selector)//在当前页面下选择第一个匹配选择器selector的节点，返回一个NodesRef对象实例，可以用于获取节点信息。

    // selectorQuery.selectAll(selector)
    // 在当前页面下选择匹配选择器selector的节点，返回一个NodesRef对象实例。 与selectorQuery.selectNode(selector)不同的是，它选择所有匹配选择器的节点。

    // selectorQuery.selectViewport()
    //选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。

    // nodesRef.boundingClientRect([callback])
    // 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于DOM的getBoundingClientRect。返回值是nodesRef对应的selectorQuery。
    // 返回的节点信息中，每个节点的位置用left、right、top、bottom、width、height字段描述。如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。

    wx.createSelectorQuery().select('#myImage').boundingClientRect(function (rect) {
      console.log(rect.id )      // 节点的ID
      console.log(rect.dataset)   // 节点的dataset
      console.log(rect.left)      // 节点的左边界坐标
      console.log(rect.right)    // 节点的右边界坐标
      console.log(rect.top )    // 节点的上边界坐标
      console.log(rect.bottom )   // 节点的下边界坐标
      console.log(rect.width)   // 节点的宽度
      console.log(rect.height)    // 节点的高度
    }).exec()

/** 当然还可以选择所有 */
    // wx.createSelectorQuery().selectAll('.a-class').boundingClientRect(function (rects) {
    //   rects.forEach(function (rect) {
    //     rect.id      // 节点的ID
    //     rect.dataset // 节点的dataset
    //     rect.left    // 节点的左边界坐标
    //     rect.right   // 节点的右边界坐标
    //     rect.top     // 节点的上边界坐标
    //     rect.bottom  // 节点的下边界坐标
    //     rect.width   // 节点的宽度
    //     rect.height  // 节点的高度
    //   })
    // }).exec()
    // wx.getSystemInfo({
    //   success:function(res){
    //     console.log(res)


        
    //   },
    //   fail: function (res) { console.log(res)},
    //   complete: function (res) { console.log(res)}
    // })
 
  },
  onReady: function () {
  
 
    // var query = wx.createSelectorQuery()
    // query.select('#myImage').boundingClientRect()
    // query.exec(function (res) {
    //   console.log("2" + res[0])       // #the-id节点的上边界坐
    // })
  }
})