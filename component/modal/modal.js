// components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    showFoot:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    promise:'',
    defer:{},
    show:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal(){
      this.setData({
        show:true
      })
      this.defer = {};
      this.defer.promise = new Promise((resolve, reject)=>{
        this.defer.resolve = resolve;
        this.defer.reject = reject;
      })
      return this.defer.promise
    },
    stop(){

    },
    hideModal(){
      this.defer.reject()
      this.setData({
        show:false
      })
    },
    confirm(event){
      let type =Number(event.currentTarget.dataset.value);
      this.setData({
        show:false
      })
      if(type == 1){
        this.defer.resolve();
        return
      }
      this.defer.reject()
    }
  }
})
