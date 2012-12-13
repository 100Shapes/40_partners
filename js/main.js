$body = $('body');

$('a.jump-link').click(function(evnt) {
  evnt.preventDefault();
  $body.animate({
    scrollTop: $(this.hash).offset().top
  }, 500);
  return false;
});