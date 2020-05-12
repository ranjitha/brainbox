import "font-awesome/css/font-awesome.css"

import "../less/index.less"


$(window, document, undefined).ready(function() {


  function getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
    let regexS = "[\\?&]" + name + "=([^&#]*)"
    let regex = new RegExp(regexS)
    let results = regex.exec(window.location.href)
    // the param isn't part of the normal URL pattern...
    //
    if (results === null) {
      // maybe it is part in the hash.
      //
      regexS = "[\\#]" + name + "=([^&#]*)"
      regex = new RegExp(regexS)
      results = regex.exec(window.location.hash)
      if (results === null) {
        return null
      }
    }
    return results[1]
  }

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

  $("#backButton").on("click", ()=>{
    let back = getParam("returnTo")
    if(back){
      location.href = "../"+back
    }
    else{
      location.href = "../"
    }
  })
});
