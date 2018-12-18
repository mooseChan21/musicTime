 const isEmpty  = function(obj){
    if(typeof (obj) == "undefined" || obj == null || obj == undefined || obj == "undefined" || (""+obj).toUpperCase() == "NULL" || ""+obj == ""){ 
      return true ;
    }else if(Object.prototype.toString.call(obj) == "[object Object]"){
      let i ;
      for(i in obj){
        return false
      }
      return true;
    }
    return false ;
  };
  
  export {
    isEmpty
  }