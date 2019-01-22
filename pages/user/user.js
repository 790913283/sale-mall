// pages/user/user.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    leftList:[{name:'苹果'},{name:'香蕉'},{name:'蔬菜'}],
    mainList:Array.from({length:5},(v,i)=>{return i}),
    idx:0,
    query:{}
  },
  getType(e) {
    let idx = Number(e.currentTarget.dataset.index);
    this.setData({
      idx:idx,
      mainList:Array.from({length:5+idx},(v,i)=>{return i}),
    })
  },
  onLoad(option) {
    this.setData({
      query:option
    });
    // this.getDetail()
    // GetOpenId().then(res=>{
    //   this.getDetail()
    // })
  },
  onHide(){

  },
  toOrder(e){
    let type = Number(e.currentTarget.dataset.type)
    wx.navigateTo({
      url: '../order/order?type='+type
    })
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    // this.getList()
    setTimeout(()=>{
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },500);
  },

  getDetail(){
    Request.goosDetail({goodsId:this.data.query.id}).then(res=>{
      let info = (res.message && res.message.goodsDTO)?res.message.goodsDTO:{};
      info.timeText = (info.state == 1?info.beginTime:info.endTime).replace(/\s+/g, "").replace(/(月|日)/g,':').split(':');
      this.setData({
        info:info
      })
    })
  },
  onShareAppMessage(){
    return {
      title: '分类',
      path: '/pages/cate/cate'
    }
  }
})