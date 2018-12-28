// pages/detail/detail.js
// pages/shop/shop.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    info:{},
    query:{}
  },
  addCart(e) {
  
  },
  onLoad(option) {
    this.setData({
      query:option
    });
    console.log(11,this.data.query)
    this.getDetail()
    // GetOpenId().then(res=>{
    //   this.getDetail()
    // })
  },
  onHide(){

  },
  toIndex(){
    console.log(111)
    wx.switchTab({
      url: '../index/index'
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
  buy(){

  },
  subData(){
   
    Request.subOrder({productId:this.data.query.pid,campusId:this.data.updata.cid}).then(res=>{
      this.modalContent.hideModal();
      this.setData({
        loading:false
      })
      wx.navigateTo({
        url: '../result/result?oid='+res.data.orderId+'&type=1'
      })
    }).catch(err=>{
      this.setData({
        loading:false
      })
    })
    
  },
  getDetail(){
    Request.goosDetail({goodsId:this.data.query.id}).then(res=>{
      let info = (res.message && res.message.goodsDTO)?res.message.goodsDTO:{};
      info.timeText = (info.state == 1?info.beginTime:info.endTime).replace(/\s+/g, "").replace(/(月|日)/g,':').split(':');
      console.log(info)
      this.setData({
        info:info
      })
    })
  },
  onShareAppMessage(){
    return {
      title: '礼品详情',
      path: '/pages/detail/detail'
    }
  }
})
