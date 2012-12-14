var $body, $more, $bio, expandedHeight;

$body = $('body');
$more = $('.read-more');
$bio = $('.bio');

// JUMP links
$('.jump-link').click(function(evnt) {
	evnt.preventDefault();
	$body.animate({
		scrollTop: $(this.hash).offset().top
	}, 500);
	return false;
});


// Read more
expandedHeight = 607;

$more.click(function(evnt) {

	$bio
		.css({
			// Set height to prevent instant jumpdown when max height is removed
			"height": $bio.height(),
			"max-height": 9999
		})
		.animate({
			"height": expandedHeight
		});

	$more.fadeOut();

	return false;
});

