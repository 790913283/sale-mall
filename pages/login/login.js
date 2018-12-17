//logs.js
const API = require('../../api/index.js');
const app = getApp();
const LoginApi = API.LoginApi;
const WxSetting = API.WxSetting;
const WxtUserInfo = API.WxtUserInfo;
Page({
  data: {
    image:app.globalData.Image,
    seconds:60,
    loading:false,
    form:{
      phone:'',
      vcode:'',
    },
  },
  onLoad() {
    
  },
  getInput(e){
    let name = 'form.'+e.currentTarget.dataset.name;
    this.setData({
      [name]:e.detail.value
    })
  },
  sendSms(){
    if(!this.data.form.phone || this.data.form.phone.length != 11){
      wx.showToast({
        title:'请输入11位手机号',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if(this.data.seconds>0 && this.data.seconds<60) return
    this.timeOut();
    LoginApi.sms({openId:'',phoneNum:this.data.form.phone}).then(res=>{
      wx.showToast({
        title:'发送成功',
        icon: 'none',
        duration: 2000
      })
    }).catch(err=>{})
  },
  timeOut(){
    let t = setTimeout(() => {
      if(this.data.seconds == 0){
        clearTimeout(t)
        this.setData({
          seconds:60
        })
        return
      }
      this.setData({
        seconds:this.data.seconds-1
      })
      this.timeOut()
    }, 1000);
  },
  login(e){
    let query = Object.assign({phone:this.data.form.phone,vcode:this.data.form.vcode},{openId:''})
    if(!query.phone || !query.vcode || query.phone.length != 11){
      wx.showToast({
        title:!query.phone?'请输入11位手机号':'请输入验证码',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if(this.data.loading) return
    WxSetting().then(res=> WxtUserInfo()).then(res=>{
      query.userInfo = JSON.stringify(res.userInfo)
      this.loginInfo(query)
    }).catch(err=>{
      this.loginInfo(query)
    })
    
  },
  loginInfo(query){
    this.setData({
      loading:true
    })
    LoginApi.regist(query).then(res=>{
      this.setData({
        loading:false
      })
      wx.reLaunch({
        url: '../index/index'
      })
    }).catch(err=>{
      this.setData({
        loading:false
      })
    })
  },
  onShareAppMessage(){
    return {
      title: '乐宁积分商城登录',
      path: '/pages/login/login'
    }
  }
})
