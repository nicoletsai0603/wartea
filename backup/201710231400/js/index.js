// JavaScript Document
$(function(){
	
	var navswitch = 0, menuopen = 0;
	var current = 0, 
		itemcount = $('#slide li').size(), 
		realserial = itemcount-1,
		slidedot = $('#dot a'),
		inout = 0,
		autospeed = 4000,	
		speed = 600,
		winWidth= $('body').width(),
		dotwidth = 0-(itemcount*32+20)/2,
		RWD = navigator.userAgent,
		TT;	
	/* === MENU ============================================ */
	
	if( RWD.match(/iPhone|iPad|iPod|Android|BlackBerry/i) ){
		$('#mobile-nav-btn').on('touchstart',mobileNav);
	} else {
			$('#mobile-nav-btn').on('click',mobileNav);
	}
	
	function mobileNav(){
		if( menuopen == 0 ){
			$('.four').css('z-index','1');
			$('nav').stop(true,false).slideDown(300,function(){ menuopen = 1});
			$('#mobile-nav-btn').addClass('close');
		} else if ( menuopen == 1) {
			$('.four').css('z-index','1000');
			$('nav').stop(true,false).slideUp(300,function(){ menuopen = 0});
			$('#mobile-nav-btn').removeClass();
		}
	}
	
	/*$('#mobile-nav-btn').click(function(){
		if( menuopen == 0 ){
			$('nav').stop(true,false).slideDown(300,function(){ menuopen = 1});
			$('#mobile-nav-btn').addClass('close');
			} else if ( menuopen == 1) {
				$('nav').stop(true,false).slideUp(300,function(){ menuopen = 0});
				$('#mobile-nav-btn').removeClass();
				}
		
	})*/
	/*var RWD = navigator.userAgent;
	if( RWD.match(/iPhone|iPad|iPod|Android|BlackBerry/i) ){
		$('#showLeftPush').on('touchstart',function(){PUSHMENU();return false;});
		$('footer').remove();
		

		} else {
			$("#menu").menuAim({
			activate: function(a){$(a).addClass("active")},  
			deactivate: function(a){$(a).removeClass("active")}, 
			enter: function(a) {$(a).addClass("active")},
			exit: function(a) {$(a).removeClass("active")},
			submenuDirection: "below"
			});
			
			$('#showLeftPush').on('click',function(){PUSHMENU();return false;});
			

	}
	
	$('#mobile-left > ul > li > a').click(MOBILEMENU)
	
	MENULAYOUT();
	
	function MENULAYOUT(){
		winWidth= $('body').width();
		colwidth = $('#collection').width();
		nnn = $('.root-item').offset().left;
		$('.sub-list').css({'left':0-nnn,'width':winWidth})
		$('#collection').css({'height':colwidth*0.471});
		$('#collection li').css({'height':colwidth*0.471});

	}
	
	function MOBILEMENU(){
		var nowdiv = $(this).siblings('.multilevel');
		//alert(nowdiv)
		
		if ( nowdiv.hasClass('show')){
			nowdiv.removeClass('show');
			$(this).parent('li').removeClass('open');
			
			} else {
				$(this).parent('li').siblings('li').removeClass('open')
				$(this).parent('li').siblings('li').find('.multilevel').removeClass('show')
				nowdiv.addClass('show');
				$(this).parent('li').addClass('open');
				}
		
	}
	
	$(window).resize(MENULAYOUT)*/
	
	/* === SLIDESHOW ============================================ */
	
	
	
	
	/*
	$('#prev').on('click',CHANGE(-1));
	$('#next').on('click',CHANGE(1));
	*/
	$('#dot').css('margin-left',dotwidth);
	$('#slide li').eq(0).addClass('current').siblings('li').hide();
	$('#prev').mouseenter(function(){inout = 1;	})	
	$('#prev').mouseleave(function(){inout = 0;	})	
	$('#next').mouseenter(function(){inout = 1;	})	
	$('#next').mouseleave(function(){inout = 0;	})
	$('#dot').mouseenter(function(){inout = 1;	})	
	$('#dot').mouseleave(function(){inout = 0;	})
	$('#prev').click(function(){ CHANGE(-1);return false;});
	$('#next').click(function(){ CHANGE(1);return false;});
	$('#dot a').click(function(){ 
		var clicknow = $(this).index('#dot a');
		//alert(clicknow);
		$('#slide li').eq(current).fadeOut(speed);
		$('#slide li').eq(clicknow).fadeIn(speed,function(){ current = clicknow});
		$('#dot a').eq(clicknow).addClass('current').siblings('a').removeClass('current');
		return false;
	});

	
	function CHANGE(e){
		var e = e, newone = current+e ;
		if( e==-1 && current==0 ){
			//$('#slide ul').eq(realserial).addClass('current').siblings().removeClass('current');
			$('#slide li').eq(current).fadeOut(speed);
			$('#slide li').eq(realserial).fadeIn(speed,function(){ current = realserial});
			$('#dot a').eq(realserial).addClass('current').siblings('a').removeClass('current');
			
			
			} else if ( e==1 && current == realserial){
				$('#slide li').eq(current).fadeOut(speed);
				$('#slide li').eq(0).fadeIn(speed,function(){ current = 0});
				$('#dot a').eq(0).addClass('current').siblings('a').removeClass('current');
				
				} else {
					$('#slide li').eq(current).fadeOut(speed);
					$('#slide li').eq(newone).fadeIn(speed,function(){ current = newone});
					$('#dot a').eq(newone).addClass('current').siblings('a').removeClass('current');
					}
		
		
		}
	
	/* auto play*/
		


	slidedot.mouseenter(function(){	inout = 1;})
	slidedot.mouseleave(function(){	inout = 0;})
	
	//alert(itemcount)
	function AUTOPLAY(){
		
		var NN = current+1;
		
		if( inout == 1 ){
			clearTimeout(TT);
			
			} else {
			if(current < itemcount-1){				
				$('#slide li').eq(current).fadeOut(speed);
				$('#slide li').eq(NN).fadeIn(speed,function(){ current = NN});
				$('#dot a').eq(NN).addClass('current').siblings('a').removeClass('current');


		}else{
			$('#slide li').eq(current).fadeOut(speed);
			$('#slide li').eq(0).fadeIn(speed,function(){ current = 0});
			$('#dot a').eq(0).addClass('current').siblings('a').removeClass('current');

			}
		}
		TT = setTimeout(AUTOPLAY, autospeed);
	}
	
	TT = setTimeout(AUTOPLAY, autospeed);
	
	
		
	//gotop
	
	/*
	var GOTOPBTN = $('#gotop');
	
	GOTOPBTN.click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000);
		
		return false;
    });

	$(window).scroll(function(){
		   if($(this).scrollTop()>250){
				 GOTOPBTN.stop(true,true).fadeIn(500);
		   } else {
				 GOTOPBTN.stop(true,true).fadeOut(500);
		   }
	});
		*/

   

})