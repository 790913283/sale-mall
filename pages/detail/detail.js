// pages/detail/detail.js
// pages/shop/shop.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    productInfo:{}
  },
  getType(e){
    this.setData({
      index:Number(e.detail.value)
    })
  },
  addCart(e) {
  
  },
  onLoad(option) {
    this.setData({
      query:option
    });
    // GetOpenId().then(res=>{
    //   this.getDetail()
    // })
  },
  onHide(){

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
    Request.productDetail({productId:this.data.query.pid}).then(res=>{
      let info = (res.data && res.data.info)?res.data.info:{}
      info.content = info.content?info.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto;margin:auto;"'):'';
      // info.buyMode = 2
      this.setData({
        productInfo:info
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
