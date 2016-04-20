(function($){

	var G = {
		amountGen: function(min, incr){
			return Math.floor(Math.random()*incr)*5+min;
		}
	};

	var firstAmount = G.amountGen(35, 5),
			secAmount = G.amountGen(75, 10);

	$('#random1').html('$'+ firstAmount);
	$('#random2').html('$'+ secAmount);

})(jQuery);
