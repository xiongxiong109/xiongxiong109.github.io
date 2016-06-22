;(function($){
	$.debounce=function(fn,debounce){
		var timer=null;
		return function(){
			clearTimeout(timer);
			timer=setTimeout(fn,debounce);
		}
	}
})(Zepto);