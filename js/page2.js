$(function(){
	/*page2*/
	/*page2第一个效果
	 * 
	 */
	//鼠标移入
	/*animate{要做的动画效果}，{duration：动画时长，complete：动画执行完了要做的事情}*/
	$(".first-li").mouseover(function(){
		$(".page2").find(".content").find(".first").stop().animate({height:"100%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".first-ico").css("background-position","bottom");
		}});
		$(".page2").find(".content").find(".first-content").find(".first-ask").find("a").css("display","block");
	});	
	//鼠标移出
	$(".first-li").mouseout(function(){
		$(".page2").find(".content").find(".first").stop().animate({height:"0%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".first-ico").css("background-position","top");
		}});
		$(".page2").find(".content").find(".first-content").find(".first-ask").find("a").css("display","none");
	});
	
	/*page2第二个效果
	 * 
	 */
	//鼠标移入
	$(".second-li").mouseover(function(){
		$(".page2").find(".content").find(".second").stop().animate({height:"100%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".second-ico").css("background-position","bottom");
		}});
		$(".page2").find(".content").find(".second-content").find(".second-ask").find("a").css("display","block");
	});	
	//鼠标移出
	$(".second-li").mouseout(function(){
		$(".page2").find(".content").find(".second").stop().animate({height:"0%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".second-ico").css("background-position","top");
		}});
		$(".page2").find(".content").find(".second-content").find(".second-ask").find("a").css("display","none");
	});
	
	/*page2第三个效果
	 * 
	 */
	//鼠标移入
	$(".third-li").mouseover(function(){
		$(".page2").find(".content").find(".third").stop().animate({height:"100%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".third-ico").css("background-position","bottom");
		}});
		$(".page2").find(".content").find(".third-content").find(".third-ask").find("a").css("display","block");
	});	
	//鼠标移出
	$(".third-li").mouseout(function(){
		$(".page2").find(".content").find(".third").stop().animate({height:"0%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".third-ico").css("background-position","top");
		}});
		$(".page2").find(".content").find(".third-content").find(".third-ask").find("a").css("display","none");
	});
	
	/*page2第四个效果
	 * 
	 */
	//鼠标移入
	$(".fourth-li").mouseover(function(){
		$(".page2").find(".content").find(".fourth").stop().animate({height:"100%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".fourth-ico").css("background-position","bottom");
		}});
		$(".page2").find(".content").find(".fourth-content").find(".fourth-ask").find("a").css("display","block");
	});	
	//鼠标移出
	$(".fourth-li").mouseout(function(){
		$(".page2").find(".content").find(".fourth").stop().animate({height:"0%"},{duration:300,complete:function(){
			$(".page2").find(".content").find(".fourth-ico").css("background-position","top");
		}});
		$(".page2").find(".content").find(".fourth-content").find(".fourth-ask").find("a").css("display","none");
	});
});
