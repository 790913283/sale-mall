// pages/orderdetail/orderdetail.js
const app = getApp();
const API = require('../../api/index.js');
const LoginTo = API.LoginTo;
const Request = Object.assign({},API.OrderApi)
Page({
  data: {
    image:app.globalData.Image,
    query:{},
    orderInfo:{},
    loading:false,
  },
  onLoad(option) {
    this.data.query = option;
    LoginTo().then(res=>{
      this.getDetail();
    }).catch(err=>{
      console.error(err)
    })
  },
  goResult(e){
    let oid = e.currentTarget.dataset.oid;
    wx.navigateTo({
      url: '../result/result?oid='+oid+'&type=2'
    })
  },
  getDetail(){
    Request.orderDetail({orderId:this.data.query.id}).then(res=>{
      let info = res.message?res.message:{}
      this.setData({
        orderInfo:info
      })
    }).catch(err=>{
    })
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading()
    setTimeout(()=>{
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    },500);
  }
})
