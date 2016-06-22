/*首页生成时间轴*/

var data=[
	{
		time:"2015.06",
		content:"上海房品汇网络信息技术有限公司--[新媒体,研发],web前端工程师。主要负责html5微信页面制作，微信营销推广的小游戏制作等等。"
	},
	{
		time:"2015.03",
		content:"上海漫狐网络有限公司--[O2O],前端工程师(h5)。微信服务号O2O预约平台制作。"
	},
	{
		time:"2014.09",
		content:"三峡日报传媒集团--[新媒体],web前端程序员,负责专题页面制作，实现满足需求的各种前端效果，提高用户体验。"
	},
	{
		time:"2014.08",
		content:"宜昌毅胜软件科技有限公司--[外包],html5实习生。开始爬坑,学习别人的h5游戏制作思路,优化前端页面，提升交互设计效果。"
	},
	{
		time:"2014.07",
		content:"广州博看文思科技有限公司--[移动互联网开发],html5实训生。参与html、css、js的前端基础培训,包括html5、css3的移动端培训等。"
	},
	{
		time:"2011.09",
		content:"三峡大学--[电子信息工程],本科,四年的大学生涯,练就了一代屌丝学霸。"
	},
];

createTimeLine(data);

/*生成时间轴数据函数*/
function createTimeLine(data){
	var strContent="";
	for(var i=0;i<data.length;i++){
		strContent+='<div class="content-box">'
					+'<div class="timeLine-ball-wrap">'
					+'<span class="timeLine-ball"></span>'
					+'<span class="timeLine-date" data-time="'+data[i].time+'">'+data[i].time+'</span>'
					+'</div>'
					+'<p class="content animated fadeInUp">'+data[i].content+'</p>'
					+'</div>';
	}
	$(".timeLine-content").html(strContent);
	$(".timeLine-date:first").addClass('active');
	fixPosition();
}

function fixPosition(){
	var top=0;
	for(var i=0;i<$(".content").length;i++){
		top+=$(".content").outerHeight(true);
	}
	$(".timeLine-wrap").height( top+5 );
}