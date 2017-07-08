function.scrollToAnchor(aid){
	var scroll = $(aid);
	$(".carousel").animate({
		scrollLeft: "+-" + scroll.offset().left
		}, slow);
}

$(document).ready(function(){
	$(".navigation ul li a").click(function(){
		$(".navigation ul li a").removeClass('active');
		$(this).addClass('active')
	})
	$($(".navigation ul li a")[0]).addClass('active');
})