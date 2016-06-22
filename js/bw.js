/* 浏览器设备检测js
* 使用揭示模块模式编写 
* author: xiongxiong109
*/

var bw = (function(){

	var ua = navigator.userAgent;

	//判断所有移动端
	function isMobile(){
		return /AppleWebKit.*Mobile/i.test(ua) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/i.test(ua);
	}
	//判断是否微信
	function isWeixin(){
		return /MicroMessenger/i.test(ua);
	}

	//判断是否安卓
	function isAndroid(){
		return /Android/i.test(ua);
	}

	//判断是否苹果
	function isIOS(){
		return /iPhone|iPod|iPad/i.test(ua);
	}

	return {
			mobile:isMobile(),
			ios:isIOS(),
			android:isAndroid(),
			weChat:isWeixin()
	}

})();