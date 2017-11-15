//加载完毕事件
window.onload = function() {
	//顶部通栏滚动效果
	headerScroll();

	//倒计时效果
	outDownTime(3 * 60 * 60);

	//轮播图效果
	banner();
}

//通栏
function headerScroll(argument) {
	var topHeight = document.querySelector(".jd_nav").offsetTop;
	var meHeight = document.querySelector(".jd_nav").offsetHeight;
	var headerDom = document.querySelector(".jd_header_box");
	var headerHeight = headerDom.offsetHeight;
	//	console.log(topHeight);
	//	console.log(meHeight);
	var maxHeight = topHeight + meHeight - headerHeight;
	console.log("max" + maxHeight + "");
	headerDom.style.backgroundColor = "rgba(201,21,35,0)";

	window.onscroll = function() {
		//		console.log('123');
		var scrollDitance = window.document.body.scrollTop;
		console.log(scrollDitance);
		var prent = scrollDitance / maxHeight;
		if(prent > 1) {
			prent = 1
		}
		console.log(prent);
		headerDom.style.backgroundColor = "rgba(201,21,35," + prent + ")";
	}

}

//倒计时
function outDownTime(argument) {
	//定义总时间
	var totalHour = 3;
	//转化为秒
	var totalSec = argument;
	//获取元素
	var liArr = document.querySelectorAll(".jd_content:nth-child(1) .list li");
	//	console.log(liArr);

	//开启定时器

	var timeID = setInterval(function() {
		totalSec--;

		if(totalSec <= 0) {
			clearInterval(timeID);
		}
		//转化时、分、秒
		var hour = Math.floor(totalSec / 3600);
		var minute = Math.floor(totalSec % 3600 / 60);
		var sec = totalSec % 60;

		//修改Dom元素
		//修改小时十位的dom
		liArr[0].innerHTML = Math.floor(hour / 10);
		//修改个位
		liArr[1].innerHTML = hour % 10;

		//修改分钟dom
		liArr[3].innerHTML = Math.floor(minute / 10);
		liArr[4].innerHTML = minute % 10;

		//修改秒钟dom
		liArr[6].innerHTML = Math.floor(sec / 10);
		liArr[7].innerHTML = sec % 10;
	}, 1000);
}

//轮播图方法
/*function banner(argument) {

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

	//开始轮播定时器
	var timeID = setInterval(function() {
		index++;
		//		if(index>=9){
		//			index=1;
		//		}
		ulWidth.style.transition = "all .3s";
		ulWidth.style.transform = "translateX(" + index * width * -1 + "px)";
		//		for (var i = 0; i < liArr.length; i++) {
		//			liArr[i].className = "";
		//		}
		//		liArr[index-1].className = "current";
	}, 1000);
	ulWidth.addEventListener("webkitTransitionEnd", function() {
		//		console.log("过度结束了");

		if(index > 8) {
			index = 1;
			ulWidth.style.transition = "";
			ulWidth.style.transform = "translateX(" + index * width * -1 + "px)";
		} else if(index < 1) {
			index = 8;
			ulWidth.style.transition = "";
			ulWidth.style.transform = "translateX(" + index * width * -1 + "px)";
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
		ulWidth.style.transition = "";
		startX = event.touches[0].clientX;
		//		console.log(startX);
	});
	ulWidth.addEventListener("touchmove", function(event) {
		moveX = event.touches[0].clientX - startX;
		//		console.log(moveX);
		ulWidth.style.transform = "translateX(" + (moveX + index * -1 * width) + "px)";
	});
	ulWidth.addEventListener("touchend", function(event) {
		var maxdistance = width / 3;
		if(Math.abs(moveX) > maxdistance) {
			if(moveX > 0) {
				index--;
			} else {
				index++;
			}
			ulWidth.style.transition = "all .3s";
			ulWidth.style.transform = "translateX(" + (index * -1 * width) + "px)";
		} else {
			ulWidth.style.transition = "all .3s";
			ulWidth.style.transform = "translateX(" + (index * -1 * width) + "px)";
		}
		timeID = setInterval(function(){
			index++;
			ulWidth.style.transition = "all .3s";
			ulWidth.style.transform = "translateX("+index*width*-1+"px)";
		},1000)
	})
}*/