import {HTTP} from '../utils/http-p.js'
import { isEmpty } from '../utils/tool.js';

class BookModel extends HTTP{
       getHotList(){
           return this.request({
               url:'/book/hot_list'
           }); 
       }
       getBookDetail(bid){
        return this.request({
                url:`/book/${bid}/detail`
        })
       }
       getBookShotComment(bid){
           return this.request({
               url:`/book/${bid}/short_comment`
           })
       }
       getBookFavr(bid){
           return this.request({
            url:`/book/${bid}/favor`
           })
       }
    
      
}
export{ BookModel }