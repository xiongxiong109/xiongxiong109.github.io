// snap table
var svg=Snap("100%","100%");

createPixel();
//绘制x,y轴,分割横线
function createPixel(){

	var pX=svg.paper.line(70,10,70,360).attr({
		stroke:"#555",
		strokeWidth:5
	});
	var pY=svg.paper.line(68,360,940,360).attr({
		stroke:"#555",
		strokeWidth:5
	});

	var pXText=svg.paper.text(900,380,"skill").attr({
		stroke:"#555"
	});
	var pYText=svg.paper.text(10,15,"power").attr({
		stroke:"#555"
	});
	//画十条线
	for(var i=0;i<10;i++){
		var x1=75;
		var y1=y2=(358-10)/10*i;
		var x2=940;
		var line=svg.paper.line(x1,y1,x2,y2).attr({
			stroke:"#000",
			strokeWidth:"1",
			"stroke-dasharray":"10",
			"stroke-dashoffset":"1000"
		});
	}
	//画y轴分布线
	for(var i=0;i<10;i++){
		var num=svg.paper.text(20,(358-10)/10*i,(100-10*i)+"%").attr({
			fill:"transparent"
		});
		if((10-i)<=5){
			num.attr({
				fill:"#555"
			});
		}
		else if((10-i)<=7){
			num.attr({
				fill:"#550000"
			});
		}
		else{
			num.attr({
				fill:"#cd0000"
			});
		}
	}
}

//绘制数据
var data=[
	{//html
		text:['ps','html5','html5Plus','git','canvas','svg','php','MySQL'],
		power:[80,90,70,85,80,80,75,80]
	},
	{//css
		text:['css','css3','less','sprite','BootStrap','jQueryMobile','AF'],
		power:[95,90,80,88,85,80,88]
	},
	{//js
		text:['nativejs','jquery','createjs','Phaser','seajs','coffee','typeScript','angular','node'],
		power:[90,88,85,72,80,78,68,85,70]
	}
];
/*起点[55,358],终点[940,358]
x:75 ~ 940
y:358 ~ 10
根据text的数目均分x轴,根据power与100的百分比求得y轴坐标
*/
var polyLine;
var skillText=[];
var totalX=865; //总宽度
var totalY=348;//总高度
createPointsArr(data[0]);

function createPointsArr(data){
	if(polyLine){
		polyLine.remove();
	}
	if(skillText.length>=0){//
		for(var i=0;i<skillText.length;i++){
			skillText[i].remove();
		}
	}
	var perBoxW=totalX / data.text.length;
	var pointsArr=[];//存储计算出来的坐标
	for(var i=0;i<data.text.length;i++){
		var px=75+perBoxW*i;
		var py=348-data.power[i] / 100 * 348; //y轴反向
		pointsArr.push(px,py);
		skillText[i]=svg.paper.text(75+perBoxW*i,380,data.text[i]).attr({
			"stroke":"#7195F2"
		});
	}
	polyLine=svg.paper.polyline(pointsArr).attr({
		stroke:"#6EBAF0",
		strokeWidth:0,
		fill:"none",
		"stroke-dasharray":"1000",
		"stroke-dashoffset":"1000"
	});
	polyLine.animate({
		strokeWidth:3,
		"stroke-dashoffset":"0"
	},1000,mina.easeOut);

}


$("#table").append($(svg.node));

//切换绘图
$(".tab-btn").find('li').on("click",function(){
	$(".tab-btn").find('li').removeClass('active');
	$(this).addClass('active');
	var idx=$(this).index();
	createPointsArr(data[idx]);
});