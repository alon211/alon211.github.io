// new_element1 = document.createElement('link');
// new_element1.setAttribute('rel', 'stylesheet');
// new_element1.setAttribute('href', 'CSS/sidebar.min.css');

new_element1 = document.createElement('link');
new_element1.setAttribute('rel', 'stylesheet');
new_element1.setAttribute('href', 'https://cdn.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.10/dist/css/bootstrap.min.css');
document.head.appendChild(new_element1);
new_element2 = document.createElement('script');
new_element2.setAttribute('type', 'text/javascript');
new_element2.setAttribute('src', 'https://code.jquery.com/jquery-3.1.1.min.js');
document.head.appendChild(new_element2);
var new_element3 = document.createElement('link');
new_element3.setAttribute('rel', 'stylesheet');
new_element3.setAttribute('href', 'CSS/1.css');
document.head.appendChild(new_element3);



// 	function drawerCollapse() {
// 		var state = $("#drawer").attr("data-state");
// 		if (state == 'close') {
// 			//设置打开
// 			$(".md-sidebar-toc").css("width", "225px");
// 			$(".page-content").css("margin-left", "225px");
// 			$("#drawer").attr("data-state", 'open');
// 			$(".menu-p").css("display", "");
// 			$(".collapse").css("display", "");
// 			$(".arrow").css("display", "");
// 		} else {
// 			//设置关闭
// 			$(".md-sidebar-toc").css("width", "75px");
// 			$(".page-content").css("margin-left", "75px");
// 			$("#drawer").attr("data-state", 'close');
// 			$(".menu-p").css("display", "none");
// 			$(".collapse").css("display", "none");
// 			$(".arrow").css("display", "none");
// 		}
// 	}

// new_element2 = document.createElement('script');
// new_element2.setAttribute('type', 'text/javascript');
// new_element2.setAttribute('src', 'js/docsify-sidebar-collapse.min.js');
// document.head.appendChild(new_element2);
// new_element1 = document.createElement('link');
// new_element1.setAttribute('rel', 'stylesheet');
// new_element1.setAttribute('href', 'CSS/sidebar.min.css');
// document.head.appendChild(new_element2);
// @import "http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css"
// @import "https://code.jquery.com/jquery-3.1.1.min.js"
// @import "http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"