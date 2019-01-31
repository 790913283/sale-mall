// pages/sales/sales.js
const app = getApp();
const API = require('../../api/index.js');
const LoginTo = API.LoginTo;
const Request = Object.assign({},API.MasterApi)
Page({
  data: {
    image:app.globalData.Image,
    masterInfo:{},
    orderList:Array.from({length:3},()=>{
      return {
        goodsList:Array.from({length:2},()=>{})
      }
    }),
    query:{},
  },
  onLoad(option) {
    this.setData({
      query:option
    });
    LoginTo().then(res=>{
      this.getDetail();
    }).catch(err=>{
      console.error(err)
    })
  },
  onHide(){

  },
  tpPage(){
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

  getDetail(){
    Request.masterDetail({}).then(res=>{
      let list = res.message.returnList || [];
      console.log(res.message)
      this.setData({
        masterInfo:Object.assign({},res.message.monthAccount,res.message.account),
        orderList:list
      })
    }).catch(err=>{
      console.error(err)
    })
  }
})