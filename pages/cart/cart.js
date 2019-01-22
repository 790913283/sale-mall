// pages/shop/shop.js
const app = getApp();
const API = require('../../api/index.js');
const LoginTo = API.LoginTo
const Request = Object.assign({},API.CartApi)
Page({
  data: {
    image:app.globalData.Image,
    start:0,
    end:0,
    selectList:[],
    cartList:[],
    cartTotal:0
  },
  onShow() {
    LoginTo().then(res=>{
      this.getList()
    }).catch(err=>{
      console.error(err)
    })
    
  },
  touchend(e){
    let idx = Number(e.currentTarget.dataset.index);
    this.data.end = e.changedTouches[0].pageX;
    let dis = this.data.start - this.data.end;
    if(Math.abs(dis)<50) return
    let item = `cartList[${idx}].isDel`
    this.setData({
      [item]:dis>0?true:false
    })
  },
  touchstart(e){
    this.data.start = e.changedTouches[0].pageX; 
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
    Request.cartList({}).then(res=>{
      let list = (res.message && res.message.list)?res.message.list:[]
      this.serList(list)
      wx.hideLoading()
    }).catch(err=>{
      console.error(err)
      wx.hideLoading()
    })
  },
  serList(list){
    this.setData({
      cartList:list.map(v=>{
        v.isDel = false;
        v.origin = v.count;
        v.isSelect = false;
        return v
      })
    })
  },
  delGoods(e){
    let id = e.currentTarget.dataset.id;
    let _this = this;
    let idx = this.data.selectList.indexOf(id);
    wx.showModal({
      title: '',
      content: '确定删除该商品吗?',
      success(res) {
        if (res.confirm) {
          Request.delCart({goodsIds:id}).then(res=>{
            _this.setData({
              cartList:(res.message && res.message.list)?res.message.list:[]
            })
            if(idx>-1){
              _this.data.selectList.splice(idx,1)
              _this.setData({
                selectList:_this.data.selectList
              })
              this.setTotal()
            }
          }).catch(err=>{
            console.error(err)
          })
        }
      }
    })
    
  },
  selectGood(e){
    let id = e.currentTarget.dataset.id;
    let idx = this.data.selectList.indexOf(id);
    if(idx>-1){
      this.data.selectList.splice(idx,1)
    }else{
      this.data.selectList.push(id)
    }
    this.setData({
      selectList:this.data.selectList
    })
    this.setTotal()
  },
  setNum(e){
    let type= Number(e.currentTarget.dataset.type);
    let idx = Number(e.currentTarget.dataset.index);
    let item = `cartList[${idx}].count`
    if(type == 1 && this.data.cartList[idx].count == 1) return
    this.setData({
      [item]:this.data.cartList[idx].count+(type == 1?-1:1)
    })
    this.debounce(this.addNum,500,this,idx)
    
  },
  addNum(idx){
    Request.increaseCart({goodsId:this.data.cartList[idx].goodsId,count:this.data.cartList[idx].count-this.data.cartList[idx].origin}).then(res=>{
      let list = (res.message && res.message.list)?res.message.list:[]
      this.serList(list)
      this.setTotal()
    }).catch(err=>{
      let item = `cartList[${idx}].count`;
      this.setData({
        [item]:this.data.cartList[idx].origin
      })
      console.error(err)
    })
  },
  setTotal(){
    let total = this.data.cartList.reduce((p,c)=>{
      return p+(this.data.selectList.indexOf(c.goodsId)>-1?(c.intPrice*c.count):0)
    },0);
    this.setData({
      selectList:this.data.selectList,
      cartTotal:(total/100).toFixed(2)
    })
  },
  debounce(fn, delay,context,arg) {
    clearTimeout(fn.dId);
    fn.dId = setTimeout(function(){
    fn.call(context,arg);
  },delay);
  },
  showDefault(e){
    let index = Number(e.currentTarget.dataset.index);
    let item = `shopList[${index}].pictureUrl`;
    this.setData({
      [item]:''
    })
  },
  onShareAppMessage(){
    return {
      title: '积分商城',
      path: '/pages/shop/shop'
    }
  }
})
