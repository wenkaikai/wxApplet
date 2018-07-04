Page({
  data: {
    obj: {
      a: "one",
      b: "two"
    }
  },
  exFun(v) {
    console.log(v)
  },
  fun1(){
    console.log("父组件的事件");
  }
})