$(document).ready(function() {

	/*$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});*/

	/*$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});*/

	$(".section_header_slide").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	/*$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});*/
	/*Проверка формы*/
	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

	//Скрытие Возможности для пациентов:
	$("#click_table").click(function(){$("#tarif_table").slideToggle(1000)});
	$("#click_table1").click(function(){$("#tarif_table").slideToggle(1000)});

	//hover для Ваши медицинские данные под контролем специалиста
	$(".img-hover3").hover(function(){
        $(".img-hover3").animate({position: "absolute",width: "92%"}, 400);        
        $(".img-hover2").animate({top: "161px", right: "-61px", width: "40%"}, 500);        
    }, function(){
        $(".img-hover3").animate({position: "absolute",width: "90%"}, 300);
        $(".img-hover2").animate({top: "161px", right: "-3px"}, 400);
     });
});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".logo_container span").animated("fadeInLeft", "fadeOutUp");
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".f1").animated("fadeInDown", "fadeOutDown");
	$(".f2").animated("fadeInUp", "fadeOutDown");
	$("#tarif_table").hide();
}); 
