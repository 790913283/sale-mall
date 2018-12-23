// pages/shop/shop.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    cartList:[]
  },
  onLoad() {
    // GetOpenId().then(res=>{
    //   this.getList()
    // })
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    // this.getList()
    setTimeout(()=>{
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },500);
  },
  getList(){
    wx.showLoading()
    Request.productList({sort:this.data.sort,isPage:0}).then(res=>{
      this.setData({
        shopList:(res.data && res.data.list)?res.data.list:[]
      })
      wx.hideLoading()
    }).catch(err=>{
      wx.hideLoading()
    })
  },
  showDefault(e){
    let index = Number(e.currentTarget.dataset.index);
    let item = `shopList[${index}].pictureUrl`;
    this.setData({
      [item]:''
    })
  },
  setSort(e){
    let status = Number(e.currentTarget.dataset.status);
    let sort = status == this.data.status?this.data.mapSort[this.data.sort]:this.data.mapStatus[status-1];
    this.setData({
      sort:sort,
      status:status
    })
    this.getList()
  },
  onShareAppMessage(){
    return {
      title: '积分商城',
      path: '/pages/shop/shop'
    }
  }
})
