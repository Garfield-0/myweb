window.onload = function() {
	left_scroll();
	right_scroll();
}

function left_scroll() {
	//获取移动的UL
	var moveul = document.querySelector(".jd_content_left ul");
	//获取ul父盒子的高度
	var parentHeight = document.querySelector(".jd_content_left").offsetHeight;
		console.log(parentHeight);
	var ulHeight = moveul.offsetHeight;
	var headerHeight = document.querySelector(".jd_list_header").offsetHeight;
	//	console.log(ulHeight);
	var minDistance = parentHeight - ulHeight;
	var maxDistance = 0;

	var depleyDistance = 150;
	//	console.log(minheight);

	var starY = 0;
	var moveY = 0;
	var distanceY = 0;

	var setTransition = function() {
		moveul.style.transition = "all .3s";
	}
	var outTransition = function() {
		moveul.style.transition = "";
	}
	var setTranform = function(movedistance) {
		moveul.style.transform = "translateY(" + movedistance + "px)";
	}

	moveul.addEventListener("touchstart", function(event) {
		starY = event.touches[0].clientY;
		console.log(event);
	});
	moveul.addEventListener("touchmove", function(event) {
		moveY = event.touches[0].clientY - starY;
		if((moveY + distanceY) > (maxDistance + depleyDistance)) {
			moveY = 0;
			distanceY = maxDistance + depleyDistance;
		} else if((moveY + distanceY) < (minDistance - depleyDistance)) {
			moveY = 0;
			distanceY = minDistance - depleyDistance;
		}
		//		moveul.style.transition="";
		outTransition()
		//		moveul.style.transform = "translateY("+(moveY+distanceY)+"px)";
		setTranform(moveY + distanceY);
	});
	moveul.addEventListener("touchend", function(event) {
		distanceY += moveY;
		if(distanceY > maxDistance) {
			distanceY = maxDistance;
		} else if(distanceY < minDistance) {
			distanceY = minDistance;
		}
		//		moveul.style.transition = "all .3s";
		setTransition();
		//		moveul.style.transform = "translateY("+distanceY+"px)";
		setTranform(distanceY);
	});

	var liArr = document.querySelectorAll(".jd_content_left ul li");
	var liHeight = document.querySelector(".jd_content_left ul li").offsetHeight;

	for(var i = 0; i < liArr.length; i++) {
		liArr[i].dataset["index"] = i;
	}
	fox_clik(moveul, function(e) {
		console.log(e);
		console.log(e.target);
		console.log(e.target.parentNode);

		for(var i = 0; i < liArr.length; i++) {
			liArr[i].className = "";
		}
		e.target.parentNode.className = "current";
		var currentIndex = e.target.parentNode.dataset["index"];
		console.log('索引值为:' + currentIndex);

		//计算移动的距离
		var moveDistance = liHeight * currentIndex * -1;
		if(moveDistance > maxDistance) {
			moveDistance = maxDistance;
		} else if(moveDistance < minDistance) {
			moveDistance = minDistance;
		}
		//		moveul.style.transition = "all .3s";
		setTransition();
		//		moveul.style.transform = "translateY("+moveDistance+"px)";
		setTranform(moveDistance);
	})
}

//右边内容部分滑动

function right_scroll() {

	var moveright = document.querySelector(".jd_list_right");
	var moverightHeight = moveright.offsetHeight;
	console.log(moverightHeight);
	var contenHeight = document.querySelector(".jd_content_right").offsetHeight;
	console.log(contenHeight);
	var startRightY = 0;
	var moveRightY = 0;
	var rightDistance = 0;

	var maxmoveHeight = 0;
	var headerHeight = document.querySelector(".jd_list_header").offsetHeight;
	var minmoveHeight = contenHeight - moverightHeight;
	console.log(minmoveHeight);
	var deplayheight = 150;

	moveright.addEventListener("touchstart", function(event) {
		startRightY = event.touches[0].clientY;
		console.log(startRightY);
	});
	moveright.addEventListener("touchmove", function(event) {
		moveRightY = event.touches[0].clientY - startRightY;
		console.log(moveRightY);
		if((rightDistance + moveRightY) > (maxmoveHeight+deplayheight)) {
			moveRightY = 0;
			rightDistance = maxmoveHeight+deplayheight;
		} else if((rightDistance + moveRightY) < (minmoveHeight-deplayheight)) {
			moveRightY = 0;
			rightDistance = minmoveHeight-deplayheight;
		}
		moveright.style.transition = "all .3s";
		moveright.style.transform ="translateY("+(rightDistance + moveRightY)+"px)";
	});
	moveright.addEventListener("touchend", function(event) {
		rightDistance += moveRightY;
		if(rightDistance>maxmoveHeight){
			rightDistance=maxmoveHeight
		}else if(rightDistance<minmoveHeight){
			rightDistance = minmoveHeight;
		}
		moveright.style.transition = "all .3s";
		moveright.style.transform = "translateY("+rightDistance+"px)";
	});

}