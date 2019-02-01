// pages/order/order.js
const app = getApp();
const API = require('../../api/index.js');
const LoginTo = API.LoginTo
const Request = Object.assign({},API.OrderApi)
Page({
  data: {
    image:app.globalData.Image,
    query:{},
    loading:false,
    pageNo:1,
    total:0,
    orderList:[],
    orderStatus:[
      {id:1,name:'全部订单'},{id:2,name:'待付款'},{id:3,name:'待发货'},{id:4,name:'待收货 '},{id:5,name:'退货'},
    ],
    type:1
  },
  onLoad(option) {
    this.data.query = option;
    LoginTo().then(res=>{
      this.setData({
        type:Number(this.data.query.type)
      })
      this.getList()
    }).catch(err=>{
      console.error(err)
    })
  },
  toCancel(){
    wx.navigateTo({
      url: '../service/service'
    })
  },
  goDetail(e){
    let oid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../orderdetail/orderdetail?id='+oid
    })
  },
  getType(e){
    let type = Number(e.currentTarget.dataset.status);
    if(type == this.data.type) return
    this.getList(type)
  },
  getList(tp){
    if(this.data.loading) return
    this.data.loading = false;
    if(tp){
      this.setData({
        type:tp
      })
    }
    wx.showLoading()
    Request.orderList({type:this.data.type,prevOrderId:''}).then(res=>{
      let list = (res.message && res.message.length)?res.message:[];
      this.data.loading = true;
      this.setData({
        orderList:list,
        loading:false
      })
      wx.hideLoading()
    }).catch(err=>{
      this.data.loading = false;
      wx.hideLoading()
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
