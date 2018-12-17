import {HTTP} from '../utils/http.js'
//创建ClassicModel类 继承HTTP
class ClassicModel extends HTTP{  // 做法类似于vueX  ClassicModel继承了HTTP类  属于HTTP子类
    getLastest(callBack){  // 子类的方法
        this.request({  // 调用父类的request
            url:'/classic/latest',
            success:(res)=>{
                callBack(res);
                wx.removeStorageSync('lastest');
                this._setLastestIndex(res.index);
            }
          }); 
    }
    getClassic(index,nextOrPrevious,callBack){
        this.request({
            url:'/classic/'+index+'/'+nextOrPrevious,
            success:(res)=>{
                callBack(res)
            }
        })
    } 
    isFirst(index){
        return index==1?true:false;
    }
    isLastest(index){
        let lastestIndex = this._getLastestIndex('lastest');
        return index==lastestIndex?true:false;
    }
    _setLastestIndex(index){
        wx.setStorageSync('lastest', index)
    }
    _getLastestIndex(){
        return wx.getStorageSync('lastest');
    }
}
export { ClassicModel }