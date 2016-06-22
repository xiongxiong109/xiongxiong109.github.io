//渲染数据
var data=[
	{
		imgUrl:"img/show/colorBox.png",
		alt:"看你有多嗨",
		detail:"创意微信小游戏制作,包括微信jssdk的分享功能实现",
		barCode:"img/code/colorBox.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/aifahongbao.png",
		alt:"微信抢红包",
		detail:"爱法珑庭抢红包吸粉游戏,使用jquery,CSS3动画效果实现,OOP编写游戏逻辑",
		barCode:"img/code/AFhongbao.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/dianfangkuai.png",
		alt:"点方块小游戏",
		detail:"点方块小游戏制作,用基于zepto与animate.css的两个库自制了一个前端框架，包括了游戏的动画和转场等",
		barCode:"img/code/boxGame.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/100du.png",
		alt:"100度电商网站",
		detail:"PC端电商网站前端页面制作,模块化布局,对低版本浏览器采用优雅降级处理,浏览器兼容到ie6",
		url:"http://1.beartest123.sinaapp.com/100du/index.html",
		cls:"pc"
	},
	{
		imgUrl:"img/show/20111111.png",
		alt:"H5微场景制作",
		detail:"毕业季班级微场景制作",
		barCode:"img/code/20111111.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/anggerui.png",
		alt:"武汉昂格瑞公司网站制作",
		detail:"企业公司传统门户网站制作，仿网站模板制作，包括分页模块,整个页面纯前端实现",
		url:"http://1.beartest123.sinaapp.com/angerui/index.html",
		cls:"pc"
	},
	{
		imgUrl:"img/show/CSS3clock.png",
		alt:"纯CSS3时钟制作",
		detail:"用CSS3技术实现的石英钟",
		url:"http://1.bearwe.sinaapp.com/clock1.2/index.html",
		cls:"pc"
	},
	{
		imgUrl:"img/show/frontEnd.png",
		alt:"前端规范",
		detail:"根据平时项目中积累的一些经验，通过自制的简单移动端框架记录了一些移动开发的前端规范",
		barCode:"img/code/frontEnd.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/jiyidashi.png",
		alt:"记忆大师",
		detail:"微信翻牌小游戏",
		barCode:"img/code/flipCard.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/jqplayer.png",
		alt:"html5音乐播放器",
		detail:"基于jquery Player插件,仿照百度首页音乐制作的一款html5音乐播放器,支持切歌和滚动歌词",
		url:"http://1.beartest123.sinaapp.com/jQMPlayer/index.html",
		cls:"pc"
	},
	{
		imgUrl:"img/show/loushu.png",
		alt:"微楼书制作",
		detail:"爱法珑庭微楼书页面制作,微信页面,使用zepto与css3的animate，自主搭建的全屏滚动框架",
		barCode:"img/code/AFloushu.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/manhumeijia.png",
		alt:"O2O微信服务平台项目制作",
		detail:"O2O项目的前端制作,后台使用Python,前端框架使用App Framework",
		barCode:"img/code/manFox.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/mengbao.png",
		alt:"萌宝投票活动",
		detail:"微信吸粉投票活动",
		barCode:"img/code/babyVote.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/piano.png",
		alt:"html5+css3钢琴制作",
		detail:"使用H5+C3技术实现的钢琴,同时支持鼠标点击与键盘事件",
		url:"http://1.bearwe.sinaapp.com/piano/index.php",
		cls:"flex"
	},
	{
		imgUrl:"img/show/pinglun.png",
		alt:"响应式留言板",
		detail:"响应式留言板制作,前端后台独立完成,添加表情与点赞功能,通过一定的转码来防止xss攻击",
		url:"http://1.beartest123.sinaapp.com/talking1.5/index.html",
		cls:"flex"
	},
	{
		imgUrl:"img/show/pingyinwang.png",
		alt:"拼音王",
		detail:"html5小游戏制作,附带用户表单数据收集的后台系统以及排名数据存储",
		barCode:"img/code/pinyin.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/riji.png",
		alt:"行走日记",
		detail:"html5webApp制作,使用appFramework,配合本地存储和geolocation打造的一款小web app",
		barCode:"img/code/diary.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/xinghai.png",
		alt:"星海传说微楼书",
		detail:"微楼书制作,采用滚动框架和异步技术手写的微场景",
		barCode:"img/code/xinghai.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/yidongxiangce.png",
		alt:"移动端相册制作",
		detail:"移动端相册制作,采用原生js与css3技术实现的移动端项目制作,使用rem布局",
		barCode:"img/code/mobileAlbum.png",
		cls:"weChat"
	},
	{
		imgUrl:"img/show/scroll.png",
		alt:"移动端小框架",
		detail:"移动端框架制作,基于zepto与animate.css,实现了屏幕切换转场以及dom动画功能。",
		url:"https://github.com/xiongxiong109/bear_scroll",
		cls:"plugin"
	},
	{
		imgUrl:"img/show/preload.png",
		alt:"jquery_preload",
		detail:"jquery插件，实现图片预加载",
		url:"https://github.com/xiongxiong109/jquery-preload",
		cls:"plugin"
	},
	{	
		imgUrl:"img/show/seamless.png",
		alt:"jquery_seamless",
		detail:"jquery插件，实现无缝滚动的焦点图",
		url:"https://github.com/xiongxiong109/jquery-seamless",
		cls:"plugin"
	}
];

//最大加载时间
var timeOut=null;
document.onreadystatechange=function(){
	if(document.readyState=='complete'){
			//加载图片
			loaded();
			//禁用导航点击事件
			$(".filter").find('span').off("click");

			//最大加载时间结束后必须开始渲染页面
			timeOut=setTimeout(function(){
				createDom(data);
				$(".filter").find('span').on("click",toggleFilter);
			}, 4e3);

	}
}

//图片预加载函数
// 通过img标签不断加载data中的图片资源,当图片资源全部加载后返回true;否则的话就递归调用
var loadCnt=0;
function loaded(){
		var img=new Image();
		var p=$("<p>");
		p.css({
			"font-size":"28px",
			"text-align":"center",
			"padding-top":"50px"
		});

		img.onload=function(){
			if(loadCnt<data.length-1){
				loadCnt++;
				loaded();
				p.text("数据加载中("+Math.floor( (loadCnt/data.length)*100 )+"%)");
				$(".product-wrap").html(p);
			}
			else{
				clearTimeout(timeOut);
				createDom(data);
				//绑定筛选事件
				$(".filter").find('span').on("click",toggleFilter);
			}
		}
		img.src=data[loadCnt].imgUrl;
}
//创建节点函数
function createDom(data,obj){
	var str="";
	for(var i=0;i<data.length;i++){
		str+='<div class="pro-box">'
			+'<img src="'+data[i].imgUrl+'" alt="'+data[i].alt+'">'
			+'<div class="pro-content">'
			+'<span class="pro-tips">'+data[i].alt+'</span>'
			+'<p class="pro-detail">'+data[i].detail+'</p>';
		if(data[i].barCode){
			str+='<img src="'+data[i].barCode+'" alt="'+data[i].alt+'" class="barcode"/>';
		}
		else{
			str+='<a href="'+data[i].url+'" class="linker">点击访问</a>';
		}
		str+='</div></div>';
	}
	$(".product-wrap").html(str);
	//修正有二维码的页面样式
	$(".barcode").parent().find('.pro-detail').css("padding-top","10%");
	$(".pro-box").css("visibility","hidden");

	setTimeout(function(){
		waterFall( $(".pro-box")); //瀑布流布局
		$(".pro-box").css("visibility","visible");
		//修正bar的位置
		$(".pro-content").each(function(idx,ele){
			var span=$(this).find('.pro-tips').eq(0);
			$(this).css("top",$(this).height()-span.height()*1.5);
		});
		$(".product-wrap").hide().fadeIn();
	}, 100);

}

/*
针对某一组box进行瀑布流布局
这里固定为三列
*/
function waterFall($objs){
	var arrLeft=[];
	var arrTop=[];
	var len= $objs.length>=3 ? 3 : $objs.length;  //避免小于总个数小于三个时出错
	for(var i=0;i<len;i++){//存储初始的数组
		arrTop.push($objs.eq(i).outerHeight(true));
		arrLeft.push($objs.eq(i).position().left);
	}
	// 无缝转换为绝对定位
	$objs.css({
		position:"absolute",
		margin:0
	});
	for(var i=0;i<3;i++){
		$objs.eq(i).css({
			"top":6,
			"left":arrLeft[i]
		});
	}
	for(var i=3;i<$objs.length;i++){
		var minHeight=Math.min.apply(null,arrTop);
		var cnt=arrTop.indexOf(minHeight);
		$objs.eq(i).css({
			top:arrTop[cnt],
			left:arrLeft[cnt]
		});
		arrTop[cnt]+=$objs.eq(i).outerHeight(true)+6;
	}
	var maxHeight=Math.max.apply(null,arrTop);
	$(".product-wrap").height(maxHeight+30);
}
//数组查找索引
Array.prototype.indexOf=function(num){
	for(var i=0;i<this.length;i++){
		if(this[i]==num){
			return i;
		}
	}
	return -1;
}

function toggleFilter(){
	var $span=$(".filter").find('span');
		if(! $(this).hasClass('active')){//避免多次点击同一个按钮导致加载过快

			$span.removeClass('active');
			$(this).addClass('active');
			//实现筛选功能
			var filter=$(this).data('class');
			if( filter=='all' ){
				createDom(data);
			}
			else{
				var data1=[];
				for(var i=0;i<data.length;i++){
					if(data[i].cls==filter){
						data1.push(data[i]);
					}
				}
				if(data1.length==0){
					var p=$("<p>暂无查询结果 :-(</p>");
					p.css({
						"font-size":"28px",
						"text-align":"center",
						"padding-top":"50px"
					});
					$(".product-wrap").html(p);
				}
				else{
					createDom(data1);
				}
			}
		}
}


//动态绑定hover事件,用js来代替css3的效果
$(".product-wrap").delegate(".pro-box","mouseenter",function(){
	$(this).find('.pro-content').stop().animate({"top":0});
});
$(".product-wrap").delegate(".pro-box","mouseleave",function(){
	var span=$(this).find('.pro-tips');
	$(this).find('.pro-content').stop().animate({"top":$(this).height()-span.height()*1.5});
});
