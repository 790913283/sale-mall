const util = require('../utils/util.js');
const HTTP_CODE = {
  400: "错误请求",
  401: "未授权，请重新登录",
  403: "拒绝访问",
  404: "请求错误,未找到该资源",
  405: "请求方法未允许",
  408: "请求超时",
  500: "服务器端出错",
  501: "网络未实现",
  502: "网络错误",
  503: "服务不可用",
  504: "网络超时",
  505: "http版本不支持该请求"
};

const mpproduct = "https://mp.learningbee.net/mall"; //生产
const mptest = "https://mptest.learningbee.net/mall"; //测试
const mpdev = "https://mpdev.learningbee.net/mall"; //开发
// const baseUrl = `${mptest}/lbwx/`;
const baseUrl = `${mpdev}/`;
// const baseUrl = `${mpproduct}/`;
// const openid = 'oVP3EwtegMYxJ3NaTnY64ugt29Uk';
// const AppId = 'wx3993a0615c5782b9';
// const Secret = 'ab3ca1011d631b7dcd479426e4130dc5';
const pageList = ['pages/index/index']; 
const handlerError = (res, reject,resolve) => {
  let pages = getCurrentPages() //获取加载的页面
  let currentPage = pages[pages.length - 1] //获取当前页面的对
  let url = currentPage.route //当前页面url
  console.log(url)
  if(pageList.indexOf(url) > -1){
    resolve(res)
    return
  }
  reject(res)
  wx.showToast({
    title: res.data.msg_zh,
    icon: 'none',
    duration: 2000
  })
  if (res.data.code == '401') {
    wx.redirectTo({
      url: '../login/login'
    })
    return
  }
}

const Http = (url, params, type, flag) => {
  let param = JSON.parse(JSON.stringify(params));
  let stroage = wx.getStorageSync('openId');
  param.openId = stroage.openid;
  return new Promise((resolve, reject) => {
    let req = flag ? url : baseUrl + url
    wx.request({
      url: `${req}`,
      data: param,
      method: type || 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        if (res.data.code == 200 || flag) {
          if (flag == 'openId') {
            wx.setStorageSync(flag, res.data.data.info)
          }
          resolve(res.data?res.data:res)
          return
        }
        handlerError(res,reject,resolve)

      },
      complete(res) {
        if (HTTP_CODE[res.statusCode]) {
          wx.showToast({
            title: HTTP_CODE[res.statusCode],
            icon: 'none',
            duration: 2000
          })
          reject(res)
        }

      },
      fail(res) {
        reject(res)
      }

    })
  })

}



const WxLogin = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + AppId + '&secret=' + Secret + '&js_code=' + res.code + '&grant_type=authorization_code';
        // resolve(url)
        // console.log(res)
        let url = `${baseUrl}getMineOpenId?code=${res.code}`;
        resolve(url)
      },
      fail: res => {
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'none',
          duration: 2000
        })
        reject(res)
      }
    })
  })
}

const WxSetting = () =>{
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: res => {
        resolve(res)
      },
      fail: res => {
        reject(res)
      }
    })
  })
}
const WxtUserInfo = () =>{
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: res => {
        resolve(res)
      },
      fail: res => {
        reject(res)
      }
    })
  })
}

const WxAuth = () => {
  return new Promise((resolve, reject) => {
    wx.authorize ({
      scope: 'scope.userInfo',
      success: res => {
        resolve(res)
      },
      fail: res => {
        reject(res)
      }
    })
  })
}

const GetOpenId = () => {
  let openId = wx.getStorageSync('openId');
  if (openId) {
    return new Promise((resolve, reject) => {
      resolve(openId)
    })
  }
  return WxLogin().then(url => Http(url, {}, 'GET', 'openId'))
}

const LoginApi = {
  regist: params => {
    return GetOpenId().then(()=>Http('api/registerBinding', params))
  },
  sms: params => {
    return GetOpenId().then(()=>Http('api/sendVCode', params))
  },
  loginout:params => {
    return GetOpenId().then(()=>Http('api/signOut', params))
  },
  islogin:params=>{
    return Http('api/isLogin', params)
  }
}

const IndexApi = {
  userInfo: params => {
    return Http('api/getUserInfo', params)
  }
}

const ProductApi = {
  productList: params => {
    return Http('api/getProductList', params)
  },
  productDetail: params => {
    return Http('api/getProductInfo', params)
  },
  subOrder: params => {
    return Http('api/subOrder', params)
  },
  orderList: params => {
    return Http('api/getOrderList', params)
  },
  orderInfo: params => {
    return Http('api/getOrderInfo', params)
  }
}

const AccountApi = {
  accountList: params => {
    return Http('api/getUserIntegralList', params)
  },
  accountTotal: params => {
    return Http('api/getUserIntegral', params)
  },
  saveStatus: params => {
    return Http('api/saveUserIntegralView',params)
  }
}

const CampusApi = {
  campusList: params => {
    return Http('api/getCampusList', params)
  },
  getStock:params => {
    return Http('api/getCampusProduct', params)
  }
}

module.exports = {
  Http,
  GetOpenId,
  WxSetting,
  WxtUserInfo,
  WxAuth,
  LoginApi,
  AccountApi,
  IndexApi,
  ProductApi,
  CampusApi
}