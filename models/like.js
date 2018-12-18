import {HTTP} from '../utils/http.js'
class LikeModel extends HTTP{  // 继承
    like(behavior,art_id,category){
        let url = behavior?'/like':'/like/cancel';
        this.request({  // 继承了HTTP实例方法
            url:url,
            method:'POST',
            data:{
                art_id:art_id,
                type:category
            }             
        })
    }
    getClassicLikeStatus(id,type,callBack){
        let url = `/classic/${type}/${id}/favor`;
        this.request({  // 继承了  HTTP实例方法
            url:url,
            success:(res)=>{
                callBack(res);
            }
        })
    }
}
export {LikeModel}
