function banner(argument) {

	//	获取设备的宽度

	var width = document.querySelector(".jd_banner").offsetWidth;
	//	console.log(width);

	//	获取ul
	var ulWidth = document.querySelector(".jd_banner_box");
	//	ulWidth.style.transition = "all .3s";

	//	获取li
	var liArr = document.querySelectorAll(".banner_index li");
	console.log(liArr);

	// 索引值写成1 因为索引值0张banner是为了实现无限轮播  不想被用户看到
	var index = 1;
	
	//抽出相同的的代码封装成函数，方便之后代码维护
	var setTransition = function(){
		ulWidth.style.transition = "all .3s";
	}
	var outTransition = function(){
		ulWidth.style.transition = "";
	}
	
	var setTransfrom = function(distance){
		ulWidth.style.transform = "translateX(" + distance+ "px)";
	}
	//开始轮播定时器
	var timeID = setInterval(function() {
		index++;
		//		if(index>=9){
		//			index=1;
		//		}
//		ulWidth.style.transition = "all .3s";
		setTransition();
//		ulWidth.style.transform = "translateX(" + index * width * -1 + "px)";
		setTransfrom( index * width * -1 );
		//		for (var i = 0; i < liArr.length; i++) {
		//			liArr[i].className = "";
		//		}
		//		liArr[index-1].className = "current";
	}, 1000);
	ulWidth.addEventListener("webkitTransitionEnd", function() {
		//		console.log("过度结束了");

		if(index > 8) {
			index = 1;
//			ulWidth.style.transition = "";
			outTransition();
//			ulWidth.style.transform = "translateX(" + index * width * -1 + "px)";
			setTransfrom( index * width * -1 );
		} else if(index < 1) {
			index = 8;
//			ulWidth.style.transition = "";
			outTransition();
//			ulWidth.style.transform = "translateX(" + index * width * -1 + "px)";
			setTransfrom( index * width * -1 );
		}
		for(var i = 0; i < liArr.length; i++) {
			liArr[i].className = "";
		}
		liArr[index - 1].className = "current";
	});

	//使用touch实现手指拖动功能
	var startX = 0;
	var moveX = 0;
	var distanceX = 0;

	//触摸开始
	ulWidth.addEventListener("touchstart", function(event) {
		clearInterval(timeID);
//		ulWidth.style.transition = "";
		outTransition();
		startX = event.touches[0].clientX;
		//		console.log(startX);
	});
	ulWidth.addEventListener("touchmove", function(event) {
		moveX = event.touches[0].clientX - startX;
		//		console.log(moveX);
//		ulWidth.style.transform = "translateX(" + (moveX + index * -1 * width) + "px)";
		setTransfrom(moveX + index * -1 * width);
	});
	ulWidth.addEventListener("touchend", function(event) {
		var maxdistance = width / 3;
		if(Math.abs(moveX) > maxdistance) {
			if(moveX > 0) {
				index--;
			} else {
				index++;
			}
//			ulWidth.style.transition = "all .3s";
			setTransition();
//			ulWidth.style.transform = "translateX(" + (index * -1 * width) + "px)";
			setTransfrom(index * -1 * width);
		} else {
//			ulWidth.style.transition = "all .3s";
			setTransition();
//			ulWidth.style.transform = "translateX(" + (index * -1 * width) + "px)";
			setTransfrom(index * -1 * width);
		}
		timeID = setInterval(function(){
			index++;
//			ulWidth.style.transition = "all .3s";
			setTransition();
//			ulWidth.style.transform = "translateX("+index*width*-1+"px)";
			setTransfrom(index * -1 * width);
		},1000)
	})
}