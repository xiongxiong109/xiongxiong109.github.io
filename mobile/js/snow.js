;(function(){
	var canvas=document.getElementById('snowCanvas');
	var cnt=canvas.getContext("2d");

	var snowArr=[];//雪花数组

	fixCanvas();
	initSnowArr();

	snowDown();


	function fixCanvas(){
		canvas.width=canvas.parentNode.offsetWidth;
		canvas.height=canvas.parentNode.offsetHeight;
	}

	//初始化雪花数组
	function initSnowArr(){
		for(var i=0;i<20;i++){
			var json=randSnow();
			snowArr.push(json);
		}
	}

	function randSnow(){
		return {
			size:Math.random()*14+6, //雪花尺寸大小px
			// rotate:45, //雪花旋转角度
			// rotateSpeed:Math.random()*2+2, //雪花旋转速度
			speedX:Math.random()+0.05, //x轴下落速度
			speedY:Math.random()+0.05, //y轴下落速度
			curX:Math.random()*(canvas.width*0.5)-canvas.width*0.2,//当前坐标x
			curY:Math.random()*(-canvas.height*0.5)-canvas.height*0.3//当前坐标y
		}
	}
	//持续改变雪花数组中的雪花值
	function changeSnowArr(){
		for(var i=0;i<snowArr.length;i++){
			snowArr[i].curX+=snowArr[i].speedX;
			snowArr[i].curY+=snowArr[i].speedY;
			if(snowArr[i].curX >= canvas.width || snowArr[i].curY >= canvas.height){
				snowArr[i]=randSnow();
			}
			// snowArr[i].rotate+=snowArr[i].rotateSpeed;
		}
	}
	/*雪花下落函数*/
	function snowDown(){
		changeSnowArr();
		// console.log(snowArr); //随机化snowArr数组
		var img=new Image();
		img.src='img/snow.png';
		img.onload=function(){
			cnt.clearRect(0,0,canvas.width,canvas.height);
			for(var i=0;i<snowArr.length;i++){
				// cnt.rotate(snowArr[i].rotate);
				cnt.drawImage(img,snowArr[i].curX,snowArr[i].curY, snowArr[i].size, snowArr[i].size);
			}
		}
		requestAnimationFrame(snowDown);
	}
})();