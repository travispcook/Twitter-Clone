$(document).ready(function() {
	
	$(".tweet-content .tweet-compose").click(function() {
		$(".tweet-controls").show("fast");
  		$(this).addClass("tweet-compose-expand");
	});


	$(".tweet-content .tweet-compose").focusout(function() {
	  var length = 	$(this).keyup().val().length;
		if(length <= 0 ) {
		$(".tweet-controls").hide("fast");
		$(this).removeClass("tweet-compose-expand");
		}
	
	});

	$(".tweet-content .tweet-compose").keyup(function() {
		var max= 140;
		var length = $(this).val().length;
		var characters = max - length;
		
		if (length >= max) {
			$(".char-count") .text("-" + (length - max));
			$(".tweet-controls button") .removeClass("alive");
		}
		
		else {
			$(".tweet-controls button").addClass("alive");
			$(".char-count").text(characters);
		}
		
		if (length >= max-10) {
			$(".char-count").addClass("char-count-red");
		}
  
		else{
			$(".char-count").removeClass("char-count-red");
		}
		if (length <= 0) {
			$(".tweet-controls button") .removeClass("alive");
		}
	});

	$(".tweet-controls button").click(function() {
		var tweettext   = $(".tweet-content .tweet-compose").val(),
				newTweet    = $('.tweet:first-child').clone(),
				//newTweet	= $('.tweet').clone().eq(0),  ***alt method***
				newUserName = $('#myUserName').html(),
				myName		= $('#myName').html(),
				myAvatar	= $('#myAvatar').attr('src');

		newTweet.find('.fullname').html(myName);
		newTweet.find('.username').html(newUserName);
		newTweet.find('.tweet-text').html(tweettext);
		newTweet.find('.avatar').attr('src', myAvatar);
		

		newTweet.prependTo('.stream');

	});


});