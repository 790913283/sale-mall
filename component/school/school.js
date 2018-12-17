// component/school/school.js
const app = getApp();
const API = require('../../api/index.js');
const Request = Object.assign({}, API.CampusApi);
const util = require('../../utils/util.js');
Component({
  properties: {
    pid:String,
    mode:Number
  },
  data: {
    image: app.globalData.Image,
    promise: '',
    defer: {},
    show: false,
    inputTxt: '',
    schoolList: [],
    schoolCopy: [],
    showLoc: false,
    selected: -1,
    loading: false,
    timer: ''
  },
  lifetimes: {
    attached() {
      // this.getLocation()
    },
    detached() {
      this.setData({
        showLoc: false
      })
    },
  },
  methods: {
    callback(e) {
      this.getLocation(true)
    },
    getLocation(flag) {
      let _this = this
      wx.getLocation({
        type: 'gcj02',
        success(res) {
          _this.setData({
            showLoc: false
          })
          if (flag && _this.data.schoolCopy.length) {
            _this.sortData(res, _this.data.schoolCopy)
            return
          }
          _this.getList(res)
        },
        fail() {
          _this.setData({
            showLoc: true
          })
          if (flag) return
          _this.getList(false)
        }
      })
    },
    filterList(kw) {
      let k = (kw || '').replace(/\s+/g, "");
    
      this.setData({
        schoolList: this.data.schoolCopy.filter(v => {
          return v.campusAddress.indexOf(k) > -1 || v.campusCnName.indexOf(k) > -1 || v.campusId == this.data.selected
        })
      })
    },
    getInput(e) {
      var keyWord = e.detail.value;
      this.throttle(this.filterList, this, 400, keyWord);
    },
    throttle(fn, context, delay, text) {
      clearTimeout(fn.timeoutId);
      fn.timeoutId = setTimeout(function () {
        fn.call(context, text);
      }, delay);
    },
    getList(data) {
      let all = [Request.campusList({campusType: 1,isPage: 0})];
      if(this.data.mode == 1){
        all.push(Request.getStock({productId: this.data.pid}))
      }
      Promise.all(all).then(res=>{
        let list = (res[0].data && res[0].data.list) ? res[0].data.list : [];
        let x = [];
        let stockList = (res[1] && res[1].data && res[1].data.list) ? res[1].data.list : [];
        if (data) {
          list = list.map(v => {
            v.distance = this.getDistance(data.latitude, data.longitude, Number(v.latitude), Number(v.longitude))
            v.mindis = v.distance.toFixed(2);
            return v
          }).sort((a, b) => {
            return a.distance - b.distance
          })
        }
        stockList.forEach(v=> x[v.campusId] = v);
        list.forEach(v => x[v.campusId] && Object.assign(v, x[v.campusId]))
        this.data.schoolCopy = JSON.parse(JSON.stringify(list))
        this.setData({
          schoolList: list
        })
      }).catch(err=>{})
    },
    sortData(data, list) {
      this.setData({
        schoolList: list.map(v => {
          v.distance = this.getDistance(data.latitude, data.longitude, Number(v.latitude), Number(v.longitude))
          v.mindis = v.distance.toFixed(2);
          return v
        }).sort((a, b) => {
          return a.distance - b.distance
        })
      })
    },
    getDistance(lat1, lng1, lat2, lng2) {
      var radLat1 = lat1 * Math.PI / 180.0;
      var radLat2 = lat2 * Math.PI / 180.0;
      var a = radLat1 - radLat2;
      var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
      s = s * 6378.137; // EARTH_RADIUS;
      s = Math.round(s * 10000) / 10000;
      return s;
    },
    showModal() {
      this.getLocation()
      this.setData({
        show: true,
        selected: '',
      })
      this.defer = {};
      this.defer.promise = new Promise((resolve, reject) => {
        this.defer.resolve = resolve;
        this.defer.reject = reject;
      })
      return this.defer.promise
    },
    stop() {

    },
    selectItem(e) {
      let cid = e.currentTarget.dataset.cid;
      let idx = Number(e.currentTarget.dataset.idx);
      let item = this.data.schoolList[idx];
      if(this.data.mode == 1 && (!item.canStock || item.canStock <= 0)) return
      this.setData({
        selected: cid
      })
      this.triggerEvent('toParent', {
        cid: cid
      });
    },
    hideModal() {
      this.defer.reject()
      this.setData({
        show: false,
        inputTxt: '',
        schoolList: JSON.parse(JSON.stringify(this.data.schoolCopy))
      })
    },
    confirm(event) {
      let type = Number(event.currentTarget.dataset.value);
      this.setData({
        show: false
      })
      if (type == 1) {
        this.defer.resolve();
        return
      }
      this.defer.reject()
    }
  }
})