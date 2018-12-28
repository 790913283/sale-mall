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
// http://118.178.224.153:8080/xq/user/first.do
const mpproduct = "https://mp.aa.net/mall"; //生产
const mptest = "http://118.178.224.153:8080/xq"; //测试
const mpdev = "https://mpdev.aa.net/mall"; //开发
// const baseUrl = `${mptest}/lbwx/`;
const baseUrl = `${mptest}/`;
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
  buyList: params => {
    return Http('/user/first.do', params)
  }
}

const ProductApi = {
  goosDetail:params => {
    return Http('/goods/detail.do', params)
  }
}


module.exports = {
  Http,
  GetOpenId,
  WxSetting,
  WxtUserInfo,
  WxAuth,
  LoginApi,
  IndexApi,
  ProductApi
}