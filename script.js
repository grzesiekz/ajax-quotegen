var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";
var textOnHover = 'Generate';

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
	if (!input.quoteAuthor) {
		input.quoteAuthor = "Unknown author";
	}
	var tweetText = "Quote of the day - " + input.quoteText + "~"+ input.quoteAuthor;
	if (tweetText.length > 140) {
	getQuote();
	} else {
		var tweet = tweetLink + tweetText;
		$('.quote').text(input.quoteText);
		$('.author').text("~ " + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
}

$(function() {
	getQuote();
	$('.trigger')
		.click(function() {
		getQuote();
	})
		.mouseenter(function() {
		$(this).text(textOnHover);
	})
		.mouseleave(function() {
		$(this).text('New random quote');
	})
});