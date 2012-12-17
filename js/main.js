var $body, $more, $bio, expandedHeight;

$body = $('body');
$more = $('.read-more');
$more_what = $('.read-more-what');
$what_expand = $('.what-expand');
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
expandedHeight_bio = 607;

$more.click(function(evnt) {
	evnt.preventDefault();

		$more.fadeOut();

	$bio
		.css({
			// Set height to prevent instant jumpdown when max height is removed
			"height": $bio.height(),
			"max-height": 9999
		})
		.animate({
			"height": expandedHeight_bio
		});

	return false;
});

expandedHeight_what = 490;

$more_what.click(function(evnt) {
	evnt.preventDefault();


	$more_what.fadeOut();

	$what_expand
		.css({
			// Set height to prevent instant jumpdown when max height is removed
			"height": $what_expand.height(),
			"max-height": 9999
		})
		.animate({
			"height": expandedHeight_what
		});


	return false;
});

