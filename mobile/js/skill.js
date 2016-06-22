//���������
;(function(){

	var canvas=document.querySelector("#skill");
	var cnt=canvas.getContext("2d");
	var centerX=canvas.width/2;
	var centerY=canvas.height/2; //ԭ������
	var r=canvas.width*0.5; //���ư뾶
	var pointArr=[]; //��������
	var skillArr=[0.85,0.58,0.4,0.85,0.8]; //���ܰٷֱ�
	var skillData=[],tempArr=[];
	var angleNum=5,start=0; //����εĽ���,������忪ʼ��ֵ
	var skillTimer=null;

	drawSkill();

	window.onresize=drawSkill;

	function drawSkill(){
		start+=0.01;
		fixCanvas();
		cnt.clearRect(0, 0, canvas.width,canvas.height);
		drawAngle();

		drawPanel();
		skillTimer=requestAnimationFrame(drawSkill);

		if(start>=Math.max.apply(null,skillArr)){
			cancelAnimationFrame(skillTimer);
		}

	}

	function fixCanvas(){
		canvas.width=canvas.height=canvas.parentNode.offsetHeight*0.6;
		centerX=canvas.width/2;
		centerY=canvas.height/2;
		r=canvas.width*0.5;
	}

	/*��������������*/

	function drawAngle(){
		pointArr=[];
		skillData=[];
		tempArr=[];
		cnt.save();
		cnt.strokeStyle="#9de1fb";
		cnt.lineWidth=1;
		cnt.lineJoin="round";

		//��������
		for(var i=0;i<angleNum;i++){
			var rad=i*( 360/angleNum )*Math.PI/180-(90-360/angleNum)*Math.PI/180;
			var disX=centerX+r*Math.cos(rad),
					disY=centerY+r*Math.sin(rad);
			pointArr.push({
				x:centerX+r*Math.cos(rad),
				y:centerY+r*Math.sin(rad)
			});

			skillData.push({
				x:centerX+r*Math.cos(rad)*skillArr[i],
				y:centerY+r*Math.sin(rad)*skillArr[i]
			});

			tempArr.push({
				x:centerX+r*Math.cos(rad)*Math.min(start, skillArr[i]),
				y:centerY+r*Math.sin(rad)*Math.min(start, skillArr[i])
			});

			cnt.moveTo(centerX, centerY);
			cnt.lineTo( disX, disY );
		}

		cnt.stroke();

		// �������
		cnt.lineWidth=1;
		cnt.strokeStyle="#52ba9e";
		cnt.beginPath();
		cnt.moveTo(pointArr[0].x, pointArr[0].y);
		for(var i=1;i<pointArr.length;i++){
			cnt.lineTo( pointArr[i].x, pointArr[i].y );
		}
		cnt.closePath();
		cnt.stroke();

		// cnt.restore();
	}

	/*���Ƽ������*/
	function drawPanel(){
		cnt.save();

		cnt.lineWidth=1;
		cnt.strokeStyle="#72c6af";
		cnt.fillStyle="rgba(156,213,197,0.5)";
		cnt.beginPath();
		cnt.moveTo( tempArr[0].x, tempArr[0].y );
		for(var i=1;i<tempArr.length;i++){
			cnt.lineTo( tempArr[i].x, tempArr[i].y );
		}
		cnt.closePath();
		cnt.stroke();
		cnt.fill();
		cnt.restore();

		//����С��
		cnt.save();
		cnt.fillStyle="#49b89a";
		for(var i=0;i<skillData.length;i++){
			cnt.beginPath();
			cnt.moveTo(skillData[i].x,skillData[i].y);
			cnt.arc(skillData[i].x, skillData[i].y, 2, 0, Math.PI*2,false);
			cnt.closePath();
			cnt.fill();
		}
		cnt.restore();

	}
})();