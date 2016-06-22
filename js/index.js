// create canvas

var stage=new createjs.Stage("canvas");
canvas.parentNode.style.height=document.documentElement.clientHeight-88+"px";
canvas.width=canvas.parentNode.clientWidth;
canvas.height=canvas.parentNode.clientHeight;

var bgView=new createjs.Container();
stage.addChild(bgView);

var circleView=new createjs.Container();
stage.addChild(circleView);

createBox();
//创建随机小球
function createBox(){

	
	//随机半径
	var r=Math.random()*2+2;
	//随机位置
	var x=Math.random()*canvas.width/2+r;
	var y=Math.random()*canvas.height/2+r;
	var opacity=Math.random()*0.5+0.2;
	//随机颜色
	// var color=Math.random()*1000000;
	// var cl="#"+Math.floor(color);
	var cl="#ddd";
	var ball=new createjs.Shape();
	ball.graphics
	.beginFill(cl)
	.drawCircle(x,y,r);
	ball.alpha=opacity;
	ball.regX=ball.regY=r/2;
	circleView.addChild(ball);
}
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",tick);

function tick(){
	createBox();
	for(var i=0;i<circleView.getNumChildren();i++){
		var s=circleView.getChildAt(i);
		s.scaleX+=0.05;
		s.scaleY+=0.05;
		s.alpha-=0.02;
		if(s.alpha<=0){
			circleView.removeChild(s);
		}
	}
	stage.update();
}
// canvas end

// text
$(".canvas-title-wrap p").on("animationEnd webkitAnimationEnd",function(){

	$(this).css("text-shadow","0px 0px 0px #fff");

});
//兼容处理,火狐里面无法监听到animationEnd事件
setTimeout(function(){
	$(".canvas-title-wrap p").css("text-shadow","0px 0px 0px #fff");
},2e3);

// tech 滚动屏幕播放动画
var $Img=$(".img-wrap").find('img');
$Img.hide();
var hasShowed=false; //开关变量,如果已经show了动画就不再触发
//onload是为了确保刷新页面时页面已经停留在出发位置而鼠标没有滚动，仍然要能够播放动画
var aniTimer=null;
var isFirst=true;
$(window).on("load scroll",function(){
	if( $(window).scrollTop()){
		if( !hasShowed ){

			hasShowed=true;
			$Img.show();
			$Img.each(function(idx,ele){
				$(this).addClass( $(this).data('animate') );
			});

		}

		$("#goBack").stop().fadeIn();

	}
	else{
		clearTimeout(aniTimer);
		$Img.fadeOut(400,function(){

			hasShowed=false;
			$Img.each(function(idx,ele){
				$(this).removeClass( $(this).data('animate') );
			});

		});
		$("#goBack").hide();
		isFirst=true;

	}
	

});

//goback
$("#goBack").on("click",function(){
	$("body, html").stop().animate({
		"scrollTop":"0"
	});
});

//show circle
var hoverTimer=null;
var time=1000;
$(".tech-wrap").hover(function(){
	if(isFirst){//判断是否是第一次执行,当鼠标滚动出屏幕再次进入该页面时，视作第一次执行
		isFirst=false;
		time=3000;
	}
	else{
		time=500;
	}
	hoverTimer=setTimeout(function(){

		$(".html5").stop().animate({
			"right":"60%"
		});
		$(".css3").stop().animate({
			"left":"60%"
		},function(){
			$(".tech-text-wrap").fadeIn();
		});

	}, time);


},function(){
	clearInterval(hoverTimer);
	$(".html5").stop().animate({"right":"25%"});
	$(".css3").stop().animate({"left":"25%"});
	$(".tech-text-wrap").fadeOut();

});

//视差滚动
$(".tech-wrap").on("mousemove",function(e){
	var dis=e.clientX / $(".tech-wrap").width(); //0-1的变化

	var safari=$(".safari");
	var chrome=$(".chrome");
	var firefox=$(".firefox");

	if(dis<=0.5){//左滑,图片右移
		safari.css("right",(30-(0.5-dis)*8)+"%");
		chrome.css("left",((0.5-dis)*25)+"%");
		firefox.css("left",(30+(0.5-dis)*8+"%"));
	}
	else{//右滑
		safari.css("right",(30+(dis-0.5)*8)+"%");
		chrome.css("left",(-(dis-0.5)*25)+"%");
		firefox.css("left",(30-(dis-0.5)*8+"%"));
	}

});
// 视差滚动结束

//时间轴显示
$(".timeLine-content").css("visibility","hidden");
$(window).on("load scroll",function(){

	if( $(window).scrollTop()+$(window).height() >=$(".timeLine-wrap").offset().top+$(".timeLine-wrap").height()/2 ){
		$(".timeLine-content").css("visibility","visible").hide().show().addClass('animated zoomInUp');
	}
	else{
		$(".timeLine-content").css("visibility","hidden").hide().removeClass('animated zoomInUp');
	}
});

// tab选项卡

//添加星星