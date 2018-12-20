import {config} from '../config.js'
const tips = {
    1:"请求失败",
    1005:'appkey失效,请联系客服',
    3000:'期刊不存在'
};
// 对象解钩
class HTTP{
      request({url,data={},method='GET'}){
        return new Promise((resolve,reject)=>{
            this._request(url,resolve,reject,data,method)

        })
      }
      _request(url,resolve,reject,data,method){
          wx.request({
                url:config.api_base_url+url,
                data,
                header:{
                    "content-type":'application/json',
                    appkey:config.appkey
                },
                method,
                success: (res)=>{
                  const code = res.statusCode.toString();
                    if(code.startsWith('2')){
                        resolve(res.data)
                    }else{
                      reject();
                      const error_code = res.data.error_code;
                      this._show_error_code(error_code)
                    }
                },
                fail: ()=>{
                 reject();
                  this._show_error_code(1)
                },
                complete: ()=> {
                }
            })
      }
      _show_error_code(errorCode){
          if(!errorCode)errorCode=1;
          const tip = tips[errorCode];
          wx.showToast({
              title:tip?tip:tips[1],
              icon:'none',  // 真鸡有效           
              duration: 2000
          })
      }
}
export { HTTP }