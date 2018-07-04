Component({
  properties: {
    //配置页面传过来的值,key值要一一对应
    'value': {
      type: String, //必填，目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ""     //可选，默认值，如果页面没传值过来就会使用默认值
    },
    'valueq': {
      type: Object, //必填，目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ""     //可选，默认值，如果页面没传值过来就会使用默认值
    }
  },
  methods: {
    fun(){
      this.triggerEvent("action");
    }
      //triggerEvent函数接受三个值：事件名称、数据、选项值  
      // 当调用fun（）时，则会执行index.js里的exFun
  },
})