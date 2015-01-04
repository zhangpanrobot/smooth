var smooth = document.querySelectorAll('.smooth');
var smoothLen = smooth.length;
var body = document.body;
// window.addEventListener('wheel', function(e) {
// 	for (var i = 0; i < smoothLen; i++) {
// 		var toViewPortTop = toWindowTop(smooth[i]) - body.scrollTop;
// 		if (e.wheelDelta < 0) {
// 			if (toViewPortTop > 0 && toViewPortTop < body.clientHeight) {
// 				//smooth[i].children[0].style.top
// 				//smooth[i + 1].style.zIndex = 1;
// 				//smooth[i].children[0].style.bottom = smooth[i].children[0].offsetTop
// 				//smooth[i + 1].children[0].style.top = 
// 				return;
// 			}
// 		} else {

// 		}
// 	}
// });
var lastY = lastY || 0;
document.body.addEventListener('touchmove', function(e) {
	var currentY = e.targetTouches[0].clientY;
	if (currentY > lastY) {
		// moved down
		console.log('on');
	} else if (currentY < lastY) {
		// moved up
		for (var i = 0; i < smoothLen; i++) {
			var toViewPortTop = toWindowTop(smooth[i]) - body.scrollTop;
			if (toViewPortTop > 0 && toViewPortTop < body.clientHeight) {
				//console.log(i);
				console.log(lastY - currentY);
				smooth[i].style.zIndex = 1;//下一层往上盖
				smooth[i -1].children[0].style.top = smooth[i - 1].children[0].offsetTop + lastY - currentY + 'px';
				//console.log(smooth[i + 1].children[0].offsetTop);
				smooth[i].children[0].style.top = smooth[i].children[0].offsetTop + lastY - currentY + 'px';
				break;
			}
		}
	}
	lastY = currentY;
});

function toWindowTop(e) {
	var top = e.offsetTop;
	var parentEle = e.parentNode;
	while (parentEle == null) {
		top += parentEle.offsetTop;
		parentEle = parentEle.parent;
	}
	return top;
}