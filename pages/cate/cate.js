// pages/cate/cate.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    leftList:[],
    mainList:[],
    list:[],
    query:{},
    id:''
  },
  getType(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      id:id,
      mainList:this.data.list.filter(v => id == v.parentId),
    })
  },
  onLoad(option) {
    this.setData({
      query:option
    });
    this.getCate()
    // GetOpenId().then(res=>{
    //   this.getDetail()
    // })
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

  getCate(){
    Request.getCate({}).then(res=>{
      let list = res.message || [];
      let cate = list.filter(v=>v.level == 1);
      this.data.list = list;
      this.setData({
        leftList:cate,
        id:cate[0].id,
        mainList:list.filter(v => cate[0].id == v.parentId)
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
