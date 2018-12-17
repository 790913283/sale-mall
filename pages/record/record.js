// pages/record/record.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId;
const AccountApi = API.AccountApi;
Page({
  data: {
    index:0,
    typeList:[
      {id:'',name:'全部'},{id:1,name:'获取'},{id:2,name:'使用'},{id:3,name:'过期'}
    ],
    accountist:[],
    accountInfo:{},
    image:app.globalData.Image
  },
  //事件处理函数
  goRecord() {
    wx.navigateTo({
      url: '../record/record'
    })
  },
  getType(e){
    this.setData({
      index:Number(e.detail.value)
    });
    this.getList()
  },
  onLoad() {
    this.init()
  },
  init(){
    wx.showLoading()
    GetOpenId().then(res=>this.meregePromise()).then(res=>{
      this.setData({
        accountList:(res[1].data && res[1].data.list)?res[1].data.list:[],
        accountInfo:(res[0].data && res[0].data.info)?res[0].data.info:{}
      })
      wx.hideLoading()
    }).catch(err=>{
      wx.hideLoading()
      console.error(err)
    })
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.init()
    setTimeout(()=>{
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },500);
  },
  getList(){
    let updata = {
      type:this.data.typeList[this.data.index].id,
      startTime:'',
      endTime:'',
      isView:''
    };
    wx.showLoading()
    GetOpenId().then(res=>AccountApi.accountList(updata)).then(res=>{
      this.setData({
        accountList:(res.data && res.data.list)?res.data.list:[],
      })
      wx.hideLoading()
    }).catch(err=>{
      wx.hideLoading()
      console.error(err)
    })
  },
  meregePromise(){
    let updata = {
      type:this.data.typeList[this.data.index].id,
      startTime:'',
      endTime:'',
      isView:''
    };
    let all = [AccountApi.accountTotal({}),AccountApi.accountList(updata)]
    return Promise.all(all)
  },
  onShareAppMessage(){
    return {
      title: '我的积分',
      path: '/pages/record/record'
    }
  }
})
