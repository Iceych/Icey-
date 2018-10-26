//等页面加载完成之后再执行js代码
$(function() {
	var nowpage = 0;
	//	获取屏幕的宽高
	var width = window.innerWidth;
	var height = window.innerHeight-59;
	$(".main").width(width);
	$(".main").height(5*height);
	$(".page").width(width);
	$(".page").height(height);
	//不是jq自带的,是引入的插件
	//手指触屏滑动事件
	
	var currentIndex = 0;
	var nextIndex = 1;
	function move() {
		$(".bar span").eq(currentIndex).removeClass("current");
		$(".bar span").eq(nextIndex).addClass("current");
		currentIndex = nextIndex;
		nextIndex++;
		console.log(currentIndex)
		if(nextIndex >5 ) {
			nextIndex = 5;
		}

	}

	function moveback() {
		console.log(currentIndex)
		nextIndex--;
		$(".bar span").eq(currentIndex).removeClass("current");
		$(".bar span").eq(nextIndex).addClass("current");	
		currentIndex = nextIndex;
		if(nextIndex < 1) {
			nextIndex = 1;
		}

	}
	
	/*鼠标滚动事件
	 *
	 * */
	var nowpage=0;
    var distence=0;
    
        setInterval(function(){
        	$(".main").mousewheel(function(event, delta){
    			distence+=delta;
    		});
    		if (distence>3&&nowpage>0) {
    			moveback();
	        	nowpage--;
	        	
	       } else if(distence<-3&&nowpage<5){
	       		
	       		move();
	        	nowpage++;
	        }
	        distence=0;
        	$(".main").animate({top:-nowpage*height+59},700,function(){
        		console.log("top:"+$(".main").css("top"));
        		//	animate({要做的动画效果},{duration:动画时长,complete:动画执行完要做的事)
				if(nowpage==1){
					$(".page2").find(".content").find(".first-li").animate({left:"0%","opacity":1},1000);
					$(".page2").find(".content").find(".second-li").animate({left:"25%","opacity":1},1000);
					$(".page2").find(".content").find(".third-li").animate({right:"25%","opacity":1},1000);
					$(".page2").find(".content").find(".fourth-li").animate({right:"0%","opacity":1},1000);
				}else{
					
					$(".page2").find(".content").find(".first-li").animate({left:"-25%","opacity":0},1000);
					$(".page2").find(".content").find(".second-li").animate({left:"0%","opacity":0},1000);
					$(".page2").find(".content").find(".third-li").animate({right:"0%","opacity":0},1000);
					$(".page2").find(".content").find(".fourth-li").animate({right:"-25%","opacity":0},1000);

				}
				if(nowpage==2){
					function move() {
						$(".bottomline1").fadeOut(300);
						$(".bottomline2").fadeOut(300,function(){
							$(".bottomline3").fadeIn(300);
						});
					}
					function moveback() {
						//	$找到元素,支持对应的css选择器
						//	eq是找到对应的几个元素
						//	fadeout是淡出效果，参数是时间
						$(".bottomline3").fadeOut(300,function(){
							$(".bottomline1").fadeIn(300);
							$(".bottomline2").fadeIn(300);
						});
					}
					$("#p2").click(function() {
						move();
					})
					$("#p3").click(function() {
						moveback();
					})
					$("#p1").fadeIn(2000);
					$("#p2").fadeIn(2000);
					$("#p3").fadeIn(2000)
					$(".bottomline1 .box1").fadeIn(125,function(){
						$(".bottomline1 .box2").fadeIn(125,function(){
							$(".bottomline1 .box3").fadeIn(125,function(){
								$(".bottomline1 .box4").fadeIn(125,function(){
									$(".bottomline2 .box1").fadeIn(125,function(){
										$(".bottomline2 .box2").fadeIn(125,function(){
											$(".bottomline2 .box3").fadeIn(125,function(){
												$(".bottomline2 .box4").fadeIn(125,function(){			
												})
											})
										})
									})
								})
							})
						})
					})
				}
				if(nowpage==3){
					$(".page4 .top").fadeIn(1000)
				    $(".page4 .bottom").fadeIn(2000)
					        var page4_currIndex=0;
							var page4_nextIndex=1;
							function move(){
					  		$(".page4 .bodong").eq(page4_currIndex).fadeOut(400);
					  	            $(".page4 .bodong").eq(page4_nextIndex).fadeIn(400);
					  	            page4_currIndex=page4_nextIndex;
					  	            page4_nextIndex++;
					  	            if(page4_nextIndex>2){
					  	            	page4_nextIndex=0;
					  	            }
					  	}
						 $(".page4 .anniu").click(
				    	function(){
			//	    		console.log($(this).index())
				    		page4_nextIndex=$(this).index();
				    		move();
				    		$(this).css("background","#314871");
				    	})
						 $(".page4 .anniu").mouseover(function(){
						 	$(this).css("background","#263552");
						 })
						 $(".page4 .anniu").mouseleave(function(){
						 	$(this).css("background","#1a253b");
						 })
				}
				if(nowpage==4){
					$(".page5 .top").fadeIn(0);
					$(".page5 .bottom").fadeIn(0);
					$(".page5 .top").animate({left:"35%"},{duration:1000});
					$(".page5 .bottom").animate({left:"0%"},{duration:1000});
		//					$(".xian").removeClass("xian");
					$(".page5 .xian1").addClass("xian");
				}
				if(nowpage==5){
					$(".page6 .right").animate({left:"58%"},{duration:1000});
					$(".page6 .left").animate({left:"25%"},{duration:1000});
				}
        	});
    	},1000);
        console.log("nowpage:"+nowpage);  
    	
})