
import "../less/index.less"
import axios from "axios"

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

  let userData={
    stereotype:"student",
    username: null
  }

  $('input').blur(function() {
    let  $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  let  $ripples = $('.ripples');

  $ripples.on('click.Ripples)', function(e) {

    let  $this = $(this);
    if($this.parent().prop("disabled")){
      return
    }
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

  $("#studentButton").on("click", ()=>{
    userData.stereotype = "student"
    $("#roleSelector").hide()
    $("#nicknameSelector").show()
    $("#usernameInput").focus()
  })

  $("#teacherButton").on("click", ()=>{
    userData.stereotype = "teacher"
    $("#roleSelector").hide()
    $("#nicknameSelector").show()
    $("#usernameInput").focus()
  })

  $("#usernameInput").on("keyup", (event)=>{
    axios.get("../api/register/validate/"+decodeURIComponent($("#usernameInput").val()))
      .then(()=>{
        $("#registerButton").prop('disabled', false)
        $("#usernameHint").html("")
        userData.username = $("#usernameInput").val()
      })
      .catch(()=>{
        $("#registerButton").prop('disabled', true)
        $("#usernameHint").html("enter a valid login name")
        userData.username = null
      })
  })

  $("#registerButton").on("click", (event)=>{
    axios.post("../api/register/", userData)
      .then((response)=>{
        let user = response.data
        $("#nicknameSelector").hide()
        $("#successPane").show()
        $("#successPane .username").html(user.username)
        $("#successPane .password").html(user.password)
      })
  })

  $("#gotoLoginButton").on("click", ()=>{
    location.href ="../login"
  })

  $("#backButton").on("click", ()=>{
    let back = getParam("returnTo")
    if(back){
      location.href = "../"+back
    }
    else{
      location.href = "../login"
    }
  })

});
