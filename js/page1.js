$(function(){	
	var nowPage=1;
	var nextPage=2;
	var timer=null;
	
	inImage1();	
	/*自动轮播*/
	function autoPlay(){
		timer = setInterval(function(){
			if(nowPage==1){
				outImage1();
				inImage2();
				nextPage=2;
			}else if(nowPage==2){
				outImage2();
				inImage3();
				nextPage=3
			}else if(nowPage==3){
				outImage3();
				inImage1();
				nextPage=1;
			}
			nowPage=nextPage;
		},3000);
		console.log("autoplay");
	}
	autoPlay();
	
	
	/*鼠标悬停，停止轮播*/
	/*$(".page1").find(".content").find("li").hover(function(){
			clearInterval(timer);
		},function(){
			autoPlay();
	});*/
			
			
	
	/*点击效果*/
	$(".page1").find(".skip").find(".circle1").click(function(){
		if(nowPage==2){
			outImage2();
		}else if(nowPage==3){
			outImage3()
		}
		inImage1();
		nowPage=1;
		nextPage=2;
	});
	$(".page1").find(".skip").find(".circle2").click(function(){
		if(nowPage==1){
			outImage1()
		}else if(nowPage==3){
			outImage3();
		}
		inImage2();
		nowPage=2;
		nextPage=3;
	});
	$(".page1").find(".skip").find(".circle3").click(function(){
		if(nowPage==1){
			outImage1();
		}else if(nowPage==2){
			outImage2();
		}
		inImage3();
		nowPage=3;
		nextPage=1;
	});
	
	
	
	/*页面1显示*/
	function inImage1(){
		$(".page1").find(".content").find(".first").fadeIn(1000);
		$(".page1").find(".content").find(".first-content").find(".img2").stop().animate({width:"46.8%",height:"48.5%",left:"25%",top:"13%"},1000,function(){
			$(".page1").find(".content").find(".first-content").find(".img1").animate({left:"20%","opacity":1},1000);
			$(".page1").find(".content").find(".first-content").find(".img3").animate({right:"23%","opacity":1},1000);
		});
	}
	/*页面1退出*/
	function outImage1(){
		$(".page1").find(".content").find(".first").fadeOut(1000);
		$(".page1").find(".content").find(".first-content").find(".img2").animate({width:"0%",height:"0%",left:"48%",top:"40%"},1000);
		$(".page1").find(".content").find(".first-content").find(".img1").animate({left:"0%","opacity":0},1000);
		$(".page1").find(".content").find(".first-content").find(".img3").animate({right:"0%","opacity":0},1000);
	}
	
	/*页面2显示*/
	function inImage2(){
		$(".page1").find(".content").find(".second").fadeIn(1000);
		$(".page1").find(".content").find(".second-content").find(".img1").animate({left:"23%","opacity":1},1000);
		$(".page1").find(".content").find(".second-content").find(".img2").stop().animate({right:"22%","opacity":1},1000,function(){
			$(".page1").find(".content").find(".second-content").find(".img3").animate({bottom:"35%","opacity":1},1000);
		});
	}
	/*页面2退出*/
	function outImage2(){
		$(".page1").find(".content").find(".second").fadeOut(1000);
		$(".page1").find(".content").find(".second-content").find(".img1").animate({left:"0%","opacity":0},1000);
		$(".page1").find(".content").find(".second-content").find(".img2").stop().animate({right:"0%","opacity":0},1000)
		$(".page1").find(".content").find(".second-content").find(".img3").animate({bottom:"0%","opacity":0},1000);
	}
	
	/*页面3显示*/
	function inImage3(){
		$(".page1").find(".content").find(".third").fadeIn(1000);
		$(".page1").find(".content").find(".third-content").find(".img1").animate({top:"15%","opacity":1},1000);
		$(".page1").find(".content").find(".third-content").find(".img2").animate({bottom:"32%","opacity":1},1000);
	}
	/*页面3退出*/
	function outImage3(){
		$(".page1").find(".content").find(".third").fadeOut(1000);
		$(".page1").find(".content").find(".third-content").find(".img1").animate({top:"0%","opacity":0},1000);
		$(".page1").find(".content").find(".third-content").find(".img2").animate({bottom:"0%","opacity":0},1000);
	}

});
