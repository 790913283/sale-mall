// pages/order/order.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    query:{},
    loading:false,
    pageNo:1,
    total:0,
    orderList:[],
    top:0
  },
  onLoad(option) {
    this.data.query = option;
    GetOpenId().then(res=>{
      this.getList()
    })
  },
  goResult(e){
    let oid = e.currentTarget.dataset.oid;
    wx.navigateTo({
      url: '../result/result?oid='+oid+'&type=2'
    })
  },
  getList(flag){
    Request.orderList({productId:this.data.query.pid,pageNo:this.data.pageNo}).then(res=>{
      let list = (res.data && res.data.list)?res.data.list:[];
      this.setData({
        orderList:flag?list:this.data.orderList.concat(list),
        total:res.data.pageTotal,
        loading:false
      })
    }).catch(err=>{
      this.setData({
        loading:false,
        pageNo:this.data.pageNo == 1 ?1:(this.data.pageNo-1)
      })
    })
  },
  onReachBottom(){
    this.setPage()
  },
  setPage(flag){
    if(this.data.loading || this.data.pageNo == this.data.total) return
    this.setData({
      loading:true,
      pageNo:flag?1:this.data.pageNo+1
    })
    this.getList(flag)
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading()
    this.data.pageNo = 1
    this.setPage(true)
    setTimeout(()=>{
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    },500);
  }
})
