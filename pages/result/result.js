// pages/result/result.js
const app = getApp();
const API = require('../../api/index.js');
import QR from "../../utils/wxqrcode.js"
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    typeList:['兑换成功','领取二维码','领取成功'],
    type:1,
    query:{},
    orderInfo:{}
  },
  onLoad(option) {
    this.data.query = option;
    this.setData({
      type:Number(option.type)
    })
    GetOpenId().then(res=>{
      this.getDetail()
    })
  },
  setCode(){
    let _img = QR.createQrCodeImg(this.data.query.oid,{
      size: 400
    })
    this.setData({
      qrcode:_img
    })
  },
  getDetail(){
    Request.orderInfo({orderId:this.data.query.oid}).then(res=>{
      let info = (res.data && res.data.info)?res.data.info:{};
      wx.setNavigationBarTitle({
        title: info.orderStatus == 5?'领取成功':this.data.typeList[this.data.type-1]
      })
      this.setData({
        orderInfo:info
      })
      if(info.orderStatus == 2){
        this.setCode();
        return
      }
      
    })
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.getDetail()
    setTimeout(()=>{
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },500);
  }
})
