
import "../less/index.less"


$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    let  $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  let  $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    let  $this = $(this);
    let  $offset = $this.parent().offset();
    let  $circle = $this.find('.ripplesCircle');

    let  x = e.pageX - $offset.left;
    let  y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
    $(this).removeClass('is-active');
  });

  $("#usernameInput").focus()
});
