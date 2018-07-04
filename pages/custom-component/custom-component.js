Component({
  behaviors: [],
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    myProperty: {
      type: String,
      value: "11",//传过来的属性的默认值
      observer: function (newVal, oldVal) { }
    },
    myProperty2: String // 简化的定义方式
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    // text:123
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})