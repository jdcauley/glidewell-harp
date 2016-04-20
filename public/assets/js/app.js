(function($){

	var G = {
		amountGen: function(min, incr){
			return Math.floor(Math.random()*incr)*5+min;
		}
	};

	var firstAmount = G.amountGen(35, 5),
			secAmount = G.amountGen(75, 10);

	$('.donation-val1').html('$'+ firstAmount);
	$('.donation-val2').html('$'+ secAmount);
	$('.donation-val1').attr('href', 'https://secure.actblue.com/contribute/page/rossfornc?refcode=website_splash&recurring=true&express_lane=true&reccuring=true&amount='+firstAmount);
	$('.donation-val2').attr('href', 'https://secure.actblue.com/contribute/page/rossfornc?refcode=website_splash&recurring=true&express_lane=true&reccuring=true&amount='+secAmount);

})(jQuery);
