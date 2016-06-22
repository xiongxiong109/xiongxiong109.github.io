//表盘动画
$(function(){

	var $circlePanel=$(".panel-circle");
	var $box=$circlePanel.find(".circle-box");
	var $handle=$(".circle-handle");
	var circleTop=$circlePanel.offset().top+$circlePanel.height();
	var offset=0.9; //滚动临界值
	var curLevel=2; //当前前端等级
	var debounceCircle=$.debounce(circleScroll, 50);

	debounceCircle();
	$(window).on('scroll', debounceCircle );

	 //滚动窗口
	function circleScroll(){
		var scrollTop=$(window).height()+$(window).scrollTop();

		if( scrollTop >= circleTop*offset ){
			animateBox();
			$(window).off('scroll', debounceCircle );
		}
	}

	//盒子动画
	function animateBox(){
		$box.each(function(idx,ele){
			$(ele).css('opacity',1).addClass( 'box-level'+(idx+1) );
		});

		setTimeout(function(){

			var $wave=$('<div class="wave"></div>');
			$box.eq(curLevel)
			.addClass('cur-level')
			.append($wave.clone())
			.append($wave);

			$handle.animate({
				'rotateZ':'-45deg'
			},500,'cubic-bezier(.7,-0.6,.35,1.4)',function(){
				$handle.addClass('circle-shake');
			});

		},1e3);
	}

});