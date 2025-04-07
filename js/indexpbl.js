// JavaScript Document
$(document).ready(function(e) {
	
	var myDate = new Date();  
	var MM=(myDate.getMonth()+1); //获取当前月份
	var num=0;
 
	
	var dqyclassname=MM-1;

	/////////////////////////////////////
	
	
	/*导航下拉*/
	$("#menu").hover(
	    function(){
		   $(".bgmenu").fadeIn(500);
	   },
		function(){
		  $(".bgmenu").hide();
		}
	);
	
	// 领导信箱
	$("#ldxxbt").click(function(){
		var html=$("#zoom1").html();
		jQuery.msgbox({
			closeImg: 'images/x.jpg',
			height:250,
			width:500,
			content:html,
			type :'text'
		});
	})
	
	// 电子邮箱
	$("#dzyx").click(function(){
		var html=$("#zoom2").html();
		jQuery.msgbox({
			closeImg: '/images/x.jpg',
			height:250,
			width:500,
			content:html,
			type :'text'
		});
	})
	
	
 
	
	
	//点击切换幻灯片
	$('.box').on("click","a",function(){
		var href=$(this).attr("data-url");
		var title=$(this).attr("title");
		var src=$(this).attr("name");
		$("#banartitle").attr("href",href);
		$("#banartitle").html(title);
		$("#bigbanar").css({
			"background":"url("+src+") center top no-repeat"
		});
		//clearInterval(time),function(){time = window.setInterval(function(){hdlb();},1000);}
	});	
	

	/***不需要自动滚动，去掉即可***/
	
	//用于判断当前月
	switch(MM)
	{
		case 5:
		case 6:
		case 7:
		case 8:
			$('.swaplist').css({left:"1200px"});//交换图片放在显示区域右侧
			$('.mainlist').animate({left:"-1200px"},'slow');//默认图片滚动	
		  break;
	    case 9:
		case 10:
		case 11:
		case 12:
			$('.swaplist').css({left:"-2400px"});//交换图片放在显示区域右侧
			$('.mainlist').animate({left:"1200px"},'slow');//默认图片滚动	
		  break;
	}
	
	linum = $('.mainlist li').length;//图片数量
	w = linum * 300;//ul宽度
	$('.piclist').css('width', w + 'px');//ul宽度
	
	$(".piclist li").each(function(i) {  //添加背景图片
       $(".piclist li").eq(i).addClass("hdbg"+i+"");
    });
	
	$('.swaplist').html($('.mainlist').html());//复制内容
	//用于判断当前月结束
	

	$('.og_next').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){//多于4张图片
			ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				$('.swaplist').css({left: '1200px'});//交换图片放在显示区域右侧
				$('.mainlist').animate({left: ml - 1200 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-1200)*-1){//默认图片最后一屏时
					$('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist').css({left: '1000px'})//默认图片放在显示区域右
				$('.swaplist').animate({left: sl - 1200 + 'px'},'slow');//交换图片滚动
				if(sl==(w-1200)*-1){//交换图片最后一屏时
					$('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$(".og_prev").click(function(){
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));
			
			if(ml<=0 && ml>w*-1){
				$('.swaplist').css({left: w * -1 + 'px'});
				$('.mainlist').animate({left: ml + 1200 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist').animate({left: (w - 1200) * -1 + 'px'},'slow');
				}
			}else{
				
				$('.mainlist').css({left: (2400 - 1200) * -1 + 'px'});
	
				
				$('.swaplist').animate({left: sl + 1200 + 'px'},'slow');
				if(sl==0){
					$('.mainlist').animate({left: '0px'},'slow');
				}
			}
		}
	})    
	
 

   // var he=($(".swaplist a").length)-1;
//	var neweq=he-5
//	num=neweq;
	
	
    var he=$(".swaplist a").length;
	var neweq=he-1;
	var topNum=he-32;   //调用8条
	var newhe=he;
	num=neweq;

	
	//判断当月是否有信息  linknum();
	//function linknum()
//	{
//		he=($(".hdbg"+dqyclassname+" a").length)-1;
//		if(he==-1)
//		{
//			dqyclassname=(dqyclassname-1);
//			linknum();
//		}
//	}
	
	hdlb(); //开启幻灯
	//自动切换当前月4条幻灯
	function hdlb(){

		
		//if(newhe==topNum)
//		{
//			newhe=neweq;
//		}
//		else
//		{
//			newhe--;
//		}
//        
		 
		
		var obj=$(".swaplist").find("a").eq(num);

		var href=obj.attr("data-url");
		var title=obj.attr("title");
		var src=obj.attr("name");
		$("#banartitle").attr("href",href);
		$("#banartitle").html(title);
		$("#bigbanar").css({
			"background":"url("+src+") center top no-repeat"
		});
		
		$("#bigbanar").click(function(){
			top.location.href=href;
		})
		
	    if(num==0)
		{
			num=neweq;
		}
		else
		{
			 num--;
		}
		
		
	}
	time = window.setInterval(function(){hdlb();},4000);  //循环播放 幻灯片
	
	
	
	
	$(".picbox .piclist li p .more").on("click",function(){
		top.location.href=$(this).attr("data-url");
	})
	
	var itemnum=0;
	$(".nenu24hours").find("li").each(function(i) {
		itemnum++;
        $(this).addClass("item-"+itemnum);
    });
	
});
