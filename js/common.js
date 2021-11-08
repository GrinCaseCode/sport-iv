$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

$('.table-wrap, .table-rating').jScrollPane(
{
	showArrows: true,
	horizontalDragMaxWidth: 99999,

	autoReinitialise: true
}
);

$(".rating_estimate .rating__item").click(function() {
	$(this).parent().removeClass("rating_1");
	$(this).parent().removeClass("rating_2");
	$(this).parent().removeClass("rating_3");
	$(this).parent().removeClass("rating_4");
	$(this).parent().removeClass("rating_5");
	var rating = $(this).attr("data-rating");
	$(this).parent().addClass("rating_" + rating);
});


if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".nav-page__list a").mPageScroll2id({
		offset:60
	});



	if ($(window).width() < 1200) {
		$(".best-diets__item .title-section").click(function() {
			$(this).siblings(".best-diets__wrap").slideToggle(200);
		});

	}

	if ($(window).width() < 992) {
		$(".btn-tab").click(function(e) {
			e.preventDefault();
			$(this).siblings(".tabs-simple").find("li:not(.active)").slideToggle(200);
			$(this).toggleClass("active");
		});

		$(".tabs-simple li a").click(function(e) {
			e.preventDefault();
			if ($(this).parent().hasClass("active")) {
			
		} else {
			$(this).parent().siblings(".active").removeClass("active");
			$(this).parent().addClass("active");
			$(this).parent().siblings().slideUp(200);
			$(this).parent().parent().siblings(".btn-tab").removeClass("active");
		}

			
		});


	}

	$(".main-card .title-min").click(function() {
		$(this).toggleClass("active");
		$(this).siblings(".man_card__content").slideToggle(200);
	});

	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	$(".nav-page__title").click(function() {
		$(".nav-page__list").slideToggle(200);
		$(this).toggleClass("active");
	});

	//слайдер

	$('.slider-team').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.874 0C3.567 0 0 3.414 0 8.4975V21.501C0 26.5845 3.567 30 8.874 30H21.126C26.433 30 30 26.5845 30 21.501V8.4975C30 3.414 26.433 0 21.126 0H8.874ZM8.874 2.25H21.126C25.1505 2.25 27.75 4.7025 27.75 8.4975V21.501C27.75 25.296 25.1505 27.75 21.126 27.75H8.874C4.8495 27.75 2.25 25.296 2.25 21.501V8.4975C2.25 4.7025 4.8495 2.25 8.874 2.25ZM13.723 8.5815L8.08717 14.1934C8.04506 14.2343 8.00614 14.2785 7.97082 14.3256L8.07705 14.2035C8.0239 14.2559 7.97664 14.3131 7.93564 14.3742C7.91774 14.4019 7.90033 14.4305 7.88419 14.4599C7.87095 14.4828 7.8589 14.5068 7.84773 14.5312C7.83753 14.5546 7.82768 14.5782 7.81862 14.6021C7.80933 14.6254 7.80123 14.6492 7.79394 14.6733C7.76863 14.7582 7.75264 14.8474 7.74775 14.9395C7.74609 14.9599 7.74555 14.9799 7.74555 15L7.7505 15.0585L7.75643 15.1526C7.76453 15.2123 7.77731 15.2704 7.7944 15.3268C7.80123 15.3508 7.80933 15.3746 7.81821 15.3981C7.82768 15.4218 7.83753 15.4454 7.84814 15.4685C7.8589 15.4932 7.87095 15.5172 7.88386 15.5407C7.90033 15.5695 7.91774 15.5981 7.93635 15.6259C7.94669 15.6423 7.95821 15.6584 7.97017 15.6743C8.00293 15.7172 8.03802 15.7576 8.07578 15.7954L8.07705 15.7965L13.723 21.4185C13.942 21.6375 14.2301 21.747 14.5166 21.747C14.8046 21.747 15.0941 21.6375 15.3131 21.4155C15.7511 20.9745 15.7496 20.2635 15.3101 19.8255L11.595 16.125H21.1292C21.7502 16.125 22.2542 15.621 22.2542 15C22.2542 14.379 21.7502 13.875 21.1292 13.875H11.595L15.3101 10.1745C15.7496 9.7365 15.7511 9.0255 15.3131 8.5845C14.8751 8.1435 14.164 8.1435 13.723 8.5815Z" fill="#946FDE"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.126 0C26.433 0 30 3.414 30 8.4975V21.501C30 26.5845 26.433 30 21.126 30H8.874C3.567 30 0 26.5845 0 21.501V8.4975C0 3.414 3.567 0 8.874 0H21.126ZM21.126 2.25H8.874C4.8495 2.25 2.25 4.7025 2.25 8.4975V21.501C2.25 25.296 4.8495 27.75 8.874 27.75H21.126C25.1505 27.75 27.75 25.296 27.75 21.501V8.4975C27.75 4.7025 25.1505 2.25 21.126 2.25ZM16.277 8.5815L21.9128 14.1934C21.9549 14.2343 21.9939 14.2785 22.0292 14.3256L21.923 14.2035C21.9761 14.2559 22.0234 14.3131 22.0644 14.3742C22.0823 14.4019 22.0997 14.4305 22.1158 14.4599C22.129 14.4828 22.1411 14.5068 22.1523 14.5312C22.1625 14.5546 22.1723 14.5782 22.1814 14.6021C22.1907 14.6254 22.1988 14.6492 22.2061 14.6733C22.2314 14.7582 22.2474 14.8474 22.2522 14.9395C22.2539 14.9599 22.2544 14.9799 22.2544 15L22.2495 15.0585L22.2436 15.1526C22.2355 15.2123 22.2227 15.2704 22.2056 15.3268C22.1988 15.3508 22.1907 15.3746 22.1818 15.3981C22.1723 15.4218 22.1625 15.4454 22.1519 15.4685C22.1411 15.4932 22.129 15.5172 22.1161 15.5407C22.0997 15.5695 22.0823 15.5981 22.0637 15.6259C22.0533 15.6423 22.0418 15.6584 22.0298 15.6743C21.9971 15.7172 21.962 15.7576 21.9242 15.7954L21.923 15.7965L16.277 21.4185C16.058 21.6375 15.7699 21.747 15.4834 21.747C15.1954 21.747 14.9059 21.6375 14.6869 21.4155C14.249 20.9745 14.2504 20.2635 14.6899 19.8255L18.405 16.125H8.87085C8.24985 16.125 7.74585 15.621 7.74585 15C7.74585 14.379 8.24985 13.875 8.87085 13.875H18.405L14.6899 10.1745C14.2504 9.7365 14.249 9.0255 14.6869 8.5845C15.1249 8.1435 15.8359 8.1435 16.277 8.5815Z" fill="#946FDE"/></svg><div/>',
		touchThreshold: 1000,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.tabs-schedule a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container-schedule").find(".tab-pane-schedule").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	$('.tabs-results a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-results").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


