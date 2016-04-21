(function($){

	var G = {
		amountGen: function(min, incr){
			return Math.floor(Math.random()*incr)*5+min;
		}
	};

	var firstAmount = G.amountGen(35, 5),
			secAmount = G.amountGen(75, 5);

	var DonateBtns = $('.donate-rand');

	DonateBtns.each(function(i){
		var btn = $(this),
				multiplier = ((i + 1) * 35),
				amount = G.amountGen(multiplier, 5);
		btn.text('$' + amount);
		btn.attr('href', 'https://secure.actblue.com/contribute/page/rossfornc?refcode=website_splash&recurring=true&express_lane=true&reccuring=true&amount='+amount);

	});

})(jQuery);
