window.onload = function () {
	new_element3 = document.createElement('script');
	new_element3.setAttribute('type', 'text/javascript');
	new_element3.setAttribute('src', 'http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js');
	document.head.appendChild(new_element3);

	// $(function () {
	// 	$("div.md-sidebar-toc ul").find('a').attr('role', 'button');
	// 	// $("div.md-sidebar-toc").find('ul').attr('class', 'btn-toolbar-vertical');
	// 	// $("div.md-sidebar-toc").find('ul').attr('role', 'toolbar');
	// 	$("div.md-sidebar-toc li").addClass('list-group')
	// 	// $("div.md-sidebar-toc a").addClass('dropdown-header')
	// 	$("div.md-sidebar-toc a").addClass('list-group-item')
	// 	$($("div.md-sidebar-toc a").next()).parent().children().filter('a').addClass('glyphicon glyphicon-chevron-right');
	// 	$("div.md-sidebar-toc li").find('ul').slideUp();
	// 	$("div.md-sidebar-toc li").on('click', function () {
	// 		//同级别元素删除selected属性
	// 		$(this).siblings().removeAttr('class', 'selected');
	// 		//将除了selected外的所有标签箭头恢复为收起状态
	// 		$(".md-sidebar-toc li ").filter("[class!=selected]").children().filter('a.glyphicon').attr('class', 'glyphicon glyphicon-chevron-right list-group-item');
	// 		// 子菜单收起
	// 		$(this).siblings().find('ul').slideUp();
	// 		//点击当前元素添加selected
	// 		$(this).addClass('selected');
	// 		//当前子菜单展开
	// 		$(this).find('ul:first').slideDown(500)
	// 		//箭头改为展开
	// 		$(this).find('a.glyphicon:first').attr('class', 'glyphicon glyphicon-chevron-down list-group-item');

	// 	});
	// })

	$(function () {
		// $("div.md-sidebar-toc ul").find('a').attr('role', 'button');
		$("div.md-sidebar-toc").find('ul').attr('class', 'sub-menu');
		// $("div.md-sidebar-toc").find('ul').attr('role', 'toolbar');
		// $("div.md-sidebar-toc li").addClass('list-group')
		// // $("div.md-sidebar-toc a").addClass('dropdown-header')
		$("div.md-sidebar-toc a").addClass('list-a')
		$($("div.md-sidebar-toc a").next()).parent().children().filter('a').addClass('glyphicon glyphicon-chevron-right');
		$("div.md-sidebar-toc li").find('ul').slideUp();
		$("div.md-sidebar-toc li").on('click', function () {
			//同级别元素删除selected属性
			$(this).siblings().removeAttr('class', 'selected');
			//将除了selected外的所有标签箭头恢复为收起状态
			$(".md-sidebar-toc li ").filter("[class!=selected]").children().filter('a.glyphicon').attr('class', 'glyphicon glyphicon-chevron-right list-a');
			// 子菜单收起
			$(this).siblings().find('ul').slideUp();
			//点击当前元素添加selected
			$(this).addClass('selected');
			//当前子菜单展开
			$(this).find('ul:first').slideDown(500)
			//箭头改为展开
			$(this).find('a.glyphicon:first').attr('class', 'glyphicon glyphicon-chevron-down list-a');

		});
	})

}