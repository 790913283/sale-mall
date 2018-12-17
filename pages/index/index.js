//index.js
//获取应用实例
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId;
const IndexApi = API.IndexApi;
const LoginApi = API.LoginApi;
const WxSetting = API.WxSetting;
const WxtUserInfo = API.WxtUserInfo;
const AccountApi = API.AccountApi;
Page({
  data: {
    userInfo: {},
    image:app.globalData.Image,
    modalConfig:{
      title:'恭喜获得以下积分',
      foot:false
    },
    openId:'',
    isLogin:2, //初始状态
    scoreList:[],
    totalMount:{},
    ruleList:[
      {text:'到校体验上课',num:'+200'},
      {text:'报名/续报',num:'+1000'},
      {text:'学龄每增加一年',num:'+300'},
      // {text:'正式课程全勤(每季度)',num:'+300'},
      {text:'介绍朋友到校体验上课',num:'+300'},
      {text:'介绍朋友报名正式课程',num:'+1000'},
      {text:'参加每月推出活动',num:''}
    ]
  },
  //事件处理函数
  goRecord(e) {
    let type = e.currentTarget.dataset.type;
    if(type){
      this.modalContent.hideModal()
    }
    if(this.data.isLogin == 2) return
    wx.navigateTo({
      url: '../record/record'
    })
  },
  goLogin(){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  loginOut(){
    wx.navigateTo({
      url: '../order/order'
    })
    // LoginApi.loginout({openId:this.data.openId}).then(res=>{
    //   wx.redirectTo({
    //     url:'../login/login'
    //   })
    // })
  },
  onLoad() {
    this.modalContent = this.selectComponent("#modal");
    this.init()
  },
  init(){
    GetOpenId().then(res=>{
      this.data.openId = res.openid;
      return LoginApi.islogin({openId:this.data.openId})
    }).then(res=>{
      this.setData({
        isLogin:res.data.isLogin
      })
      this.getAccount();
      this.getTotal();
      this.getUserInfo(this.data.openId);
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
  getAccount(){
    let updata = {
      type:1,
      startTime:'',
      endTime:'',
      isView:0
    };
    GetOpenId().then(res=>AccountApi.accountList(updata)).then(res=>{
      let list = (res.data && res.data.list)?res.data.list:[];
      if(!list.length) return
      this.setData({
        scoreList:list,
      })
      this.modalContent.showModal().catch(err=>{
        AccountApi.saveStatus({})
      })
    }).catch(err=>{
      console.error(err)
    })
  },
  getTotal(){
    AccountApi.accountTotal({}).then(res=>{
      this.setData({
        totalMount:(res.data && res.data.info)?res.data.info:{}
      })
    }).catch(err=>{
      console.error(err)
    })
  },
  getInfo(e){
    this.goLogin()
  },
  getUserInfo(openid){
    WxSetting().then(res=> WxtUserInfo()).then(res=>{
      this.setData({
        userInfo:res.userInfo
      })
    }).catch(err=>{
      IndexApi.userInfo({openId:openid}).then(res=>{
        this.setData({
          userInfo:(res.data && res.data.userInfo)?res.data.userInfo : {}
        })
      })
    })
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
