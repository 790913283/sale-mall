// pages/detail/detail.js
// pages/shop/shop.js
const app = getApp();
const API = require('../../api/index.js');
const LoginTo = API.LoginTo
const Request = Object.assign({},API.ProductApi,API.CartApi)
Page({
  data: {
    image:app.globalData.Image,
    info:{},
    query:{},
    loading:false
  },
  onLoad(option) {
    this.setData({
      query:option
    });
    LoginTo().then(res=>{
      this.getDetail()
    })
  },
  onHide(){

  },
  toIndex(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  toCart(){
    wx.switchTab({
      url: '../cart/cart'
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
  addCart(){
    if(this.data.loading) return
    this.setData({
      loading:true
    })
    
    Request.addCart({goodsId:this.data.info.goodsId,count:1}).then(res=>{
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
