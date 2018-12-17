import {HTTP} from '../utils/http.js'
//创建ClassicModel类 继承HTTP
class ClassicModel extends HTTP{  // 做法类似于vueX  ClassicModel继承了HTTP类  属于HTTP子类
    getLastest(callBack){  // 子类的方法
        this.request({  // 调用父类的request
            url:'/classic/latest',
            success:(res)=>{
                callBack(res)
            }
          }); 
    }
    getPrevious(index,callBack){//获取上一期
        this.request({
            url:'/classic/'+index+'/previous',
            success:(res)=>{
                callBack(res)
            }
        })
    }
    getNext(index,callBack){  //获取下一期
        this.request({
            url:'/classic/'+index+'/next',
            success:(res)=>{
                callBack(res)
            }
        })
    } 
    isFirst(index){
        return index==1?true:false;
    }
    isLastest(index){

    }
}
export { ClassicModel }