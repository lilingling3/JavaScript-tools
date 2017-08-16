EventUtil={
  addListener:function(target,type,handler){
    if(target.addEventListener){
        target.addEventListener(type,handler);
    }else if(target.attachEvent){
        target.attach("on"+type,function(){
               //让handler中的this指向目标元素
              handler.call(target);
        
        });
    }else{
        target["on"+type]=handler;
    }
  },
 removeListener:function(target,type,handler){   
      if(target.removeEventListener){    
        target.removeEventListener(type,handler);          
     }else if(target.detachEvent){
        target.detachEvent("on"+type,handler);
     }else{
        target["on"+type]=null;
     }
  },
 getEvent:function(e){      //获取事件对象
     var evt=window.event||e;
     return evt;
 },
 getTarget:function(e){      //获得目标对象
     var evt=EventUtil.getEvent(e);
     var target;
     if(evt.target){ target=evt.target;}
     else {target=evt.srcElement;} // IE
     return target;
 },
 stopPropagation:function(e){  //停止冒泡
     var evt=EventUtil.getEvent(e);
     if(evt.stopPropagation) {evt.stopPropagation();}
     else {evt.cancelBubble=true;}
 },
 preventDefault:function(e){   //阻值默认行为的发生
     var evt=EventUtil.getEvent(e);
     if(evt.preventDefault){ evt.preventDefault(); }
     else {e.returnValue=false;}
 },
getRelatedTarget: function(event){
    if (event.relatedTarget){
         return event.relatedTarget;
    } else if (event.toElement){
        return event.toElement;
    } else if (event.fromElement){
         return event.fromElement;
    } else {
         return null;
    }
},
getCharCode: function(event){
    if (typeof event.charCode == "number"){
        return event.charCode;
    } else {
        return event.keyCode;
    }
},
// 自动切换焦点
tabForward: function (event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (target.value.length == target.maxLength){
        var form = target.form;
        for (var i=0, len=form.elements.length; i < len; i++) {
            if (form.elements[i] == target) {
                if (form.elements[i+1]){
                    form.elements[i+1].focus();
                }
            return;
        }
    }
 }
},
}
/**
 *
 * 
 getEvent: function(event){
    return event ? event : window.event;
},
getTarget: function(event){
   return event.target || event.srcElement;
},
preventDefault: function(event){
    if (event.preventDefault){
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
},
stopPropagation: function(event){
    if (event.stopPropagation){
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
 */
