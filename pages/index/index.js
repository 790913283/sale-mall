//index.js
//获取应用实例
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId;
const Request = Object.assign({},API.IndexApi);
Page({
  data: {
    userInfo: {},
    image:app.globalData.Image,
    indicatorDots: false,
    autoplay: false,
    loading:false,
    interval: 5000,
    duration: 1000,
    current:1,
    cateList:Array.from({length:10},(v,i)=>{return {id:''}}),
    cate:[],
    adult:{},
    goodsList:[],
    activityList:[],
    topList:[]
  },
  //事件处理函数
  goDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id
    })
  },
  onLoad() {
    this.setData({
      cate:this.data.cateList.reduce((rows, key, index) => (index % 5 == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, [])
    })
    this.init()
  },
  init(){
    this.getList()
  },
  changeIndex(e){
    this.setData({
      current:e.detail.current+1
    })
  },
  addCart(e){

  },
  onShow(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  onPullDownRefresh(){
    wx.showNavigationBarLoading()
    this.init()
    setTimeout(()=>{
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh()
    },500);
  },
  getList(){
    Request.buyList({}).then(res=>{
      let menu = (res.message && res.message.muluDTOList && res.message.muluDTOList.length)?res.message.muluDTOList:[];
      menu.push({name:'全部',id:1})
      menu = menu.reduce((rows, key, index) => (index % 5 == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
      let goodsList = (res.message && res.message.nowGoodsList && res.message.nowGoodsList.length)?res.message.nowGoodsList:[];
      let topList = (res.message && res.message.shouyeList && res.message.shouyeList.length)?res.message.shouyeList:[];
      let adult = (res.message && res.message.guanggaoDTO)?res.message.guanggaoDTO:{};
      let activityList = (res.message && res.message.futureGoodsList && res.message.futureGoodsList.length)?res.message.futureGoodsList:[];
      this.setData({
       topList:topList,
       adult:adult,
       cate:menu,
       goodsList:goodsList,
       activityList:activityList
      })
      console.log(this.data.goodsList)
    }).catch(err=>{
      console.error(err)
    })
  },
  setCart(){

  },
  onReady() {
    
  },
  onShareAppMessage(){
    return {
      title: '个人中心',
      path: '/pages/index/index'
    }
  }

})
