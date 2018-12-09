import {config} from '../config.js'
const tips = {
    1:"请求失败",
    1005:'appkey失效,请联系客服',
    3000:'期刊不存在'
};
class HTTP{
      request(params){
          if(!params.method){
            params.method = 'GET';
          }
          wx.request({
              url:config.api_base_url+params.url,
              data: params.data,
              header:{
                  "content-type":'application/json',
                  appkey:config.appkey
              },
              method: params.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              success: (res)=>{
                let code = res.statusCode.toString();
                  if(code.startsWith('2')){
                    params.success && params.success(res.data)
                  }else{
                      console.log(res)
                    let error_code = res.data.error_code;
                    this._show_error_code(error_code)
                  }
              },
              fail: ()=>{
                this._show_error_code(1)
              },
              complete: ()=> {
              }
          })

      }
      _show_error_code(errorCode){
          if(!errorCode)errorCode=1;
          wx.showToast({
              title:tips[errorCode],
              icon:'none',  // 真鸡有效           
              duration: 2000
          })
      }
}
export { HTTP }