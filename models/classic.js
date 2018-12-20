import {HTTP} from '../utils/http.js'
import { isEmpty } from '../utils/tool.js';
//创建ClassicModel类 继承HTTP
class ClassicModel extends HTTP{  // 做法类似于vueX  ClassicModel继承了HTTP类  属于HTTP子类
    getLastest(callBack){  // 子类的方法
        this.request({  // 调用父类的request
            url:'/classic/latest',
            success:(res)=>{
                callBack(res);
                wx.removeStorageSync('lastest');
                this._setLastestIndex(res.index);
                wx.setStorageSync(this._getKey(res.index),res)  // 缓存最新一期数据
            }
          }); 
    }
    getClassic(index,nextOrPrevious,callBack){  // 切换期刊
      let classicIndex = nextOrPrevious=='next'?index+1:index-1;
      if(!isEmpty(wx.getStorageSync('classic-'+classicIndex))){  // 不为空
        let resObj = wx.getStorageSync('classic-'+classicIndex)
        callBack(resObj);
      }else{
        this.request({
            url:`/classic/${index}/${nextOrPrevious}`, 
            success:(res)=>{
                callBack(res);
                wx.setStorageSync(this._getKey(res.index),res);// 缓存期刊数据
            }
        })
      } 
    } 
    isFirst(index){
        return index==1?true:false;
    }
    isLastest(index){
        let lastestIndex = this._getLastestIndex('lastest');
        return index==lastestIndex?true:false;
    }
    _setLastestIndex(index){  //缓存最新一期index
        wx.setStorageSync('lastest', index)
    }
    _getLastestIndex(){
        return wx.getStorageSync('lastest');
    }
   _getKey(index){
        return 'classic-'+index
   }
}
export { ClassicModel }