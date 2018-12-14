import {HTTP} from '../utils/http.js'
//创建ClassicModel类
class ClassicModel extends HTTP{  // 做法类似于vueX  ClassicModel继承了HTTP类  属于HTTP子类
    getLastest(callBack){  // 子类的方法
        this.request({  // 调用父类的request
            url:'/classic/latest',
            success:(res)=>{
                callBack(res)
            }
          }); 
    }
}
export { ClassicModel }