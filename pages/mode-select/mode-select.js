Page({
  data: {
    objectArray: [
      {
        id: 333,
        name: '美国'
      },
      {
        id: 444,
        name: '中国'
      },
      {
        id: 555,
        name: '巴西'
      },
      {
        id: 666,
        name: '日本'
      }
    ]
  },
  bindPickerChange: function (e) {
    console.log(e)
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    var index = e.detail.value;
    var currentId = this.data.objectArray[index].id; // 这个id就是选中项的id
    console.log(currentId);
    this.setData({
      index: e.detail.value
    })
  }
})