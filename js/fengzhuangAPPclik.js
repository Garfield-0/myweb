//参数1：绑定的dom元素
//参数2：回调函数

function fox_clik(element,callback){
	
	//记录开始时间
	var starTime = 0;
	//判断是否触发事件
	var isMove = false;
	//设置最大时间
	var maxTime = 250;
	
	element.addEventListener('touchstart',function(e){
		starTime=Date.now();
		isMove=false;
	});
	element.addEventListener('touchmove',function(e){
		isMove = true;
	});
	element.addEventListener('touchend',function(e){
		if (isMove==true) {
			return;
		}
		if ((Date.now()-starTime)>maxTime) {
			return;
		}
		callback(e);
	});
}
