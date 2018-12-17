// pages/detail/detail.js
// pages/shop/shop.js
const app = getApp();
const API = require('../../api/index.js');
const GetOpenId = API.GetOpenId
const Request = Object.assign({},API.ProductApi)
Page({
  data: {
    image:app.globalData.Image,
    indicatorDots: false,
    autoplay: false,
    loading:false,
    interval: 5000,
    duration: 1000,
    sort:'integral',
    per:'0rpx',
    next:'0rpx',
    query:{},
    productInfo:{},
    updata:'',
    buyStatus:-1,//1立即兑换2确定-1请求等待3无库存
    isScroll:false,
    adultList:[
      {img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'}
    ]
  },
  getType(e){
    this.setData({
      index:Number(e.detail.value)
    })
  },
  onLoad(option) {
    this.setData({
      query:option
    });
    this.modalContent = this.selectComponent("#modal-school");
    GetOpenId().then(res=>{
      this.getDetail()
    })
  },
  onHide(){
    this.data.updata = ''
    // this.modalContent.hideModal().catch(err=>{
    //   this.setData({
    //     buyStatus:1
    //   })
    // })
  },
  buy(){
    if(this.buyStatus == -1 || this.buyStatus == 3) return
    if(this.data.buyStatus == 2){
      this.subData()
      return
    }
    this.setData({
      buyStatus:2
    })
    this.modalContent.showModal().catch(err=>{
      this.data.updata = ''
      this.setData({
        buyStatus:1
      })
    })
  },
  subData(){
    if(!this.data.updata) {
      wx.showToast({
        title: '请选择校区',
        icon:'none',
        duration: 2000
      })
      return
    }
    if(this.data.loading) return
    this.setData({
      loading:true
    })
    Request.subOrder({productId:this.data.query.pid,campusId:this.data.updata.cid}).then(res=>{
      this.modalContent.hideModal();
      this.setData({
        loading:false
      })
      wx.navigateTo({
        url: '../result/result?oid='+res.data.orderId+'&type=1'
      })
    }).catch(err=>{
      this.setData({
        loading:false
      })
    })
    
  },
  getData(e){
    this.data.updata = e.detail;
  },
  getDetail(){
    Request.productDetail({productId:this.data.query.pid}).then(res=>{
      let info = (res.data && res.data.info)?res.data.info:{}
      info.content = info.content?info.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto;margin:auto;"'):'';
      // info.buyMode = 2
      this.setData({
        productInfo:info,
        buyStatus:info.maxBuyNumber<=0?3:1,
        adultList:[{img:info.pictureUrl}]
      })
    })
  },
  onShareAppMessage(){
    return {
      title: '礼品详情',
      path: '/pages/detail/detail'
    }
  }
})
