import axios from "axios"



export default class Userinfo {


  constructor(permissions){

    if(permissions.authentication.enabled === false){
      $("#userinfo_toggler").remove()
    }
    else {
      axios.get("../userinfo").then((response) => {
        console.log(response)
        $("#userinfo_toggler .dropdown-menu").html(` 
          <div class="userContainer">
          <img  src="../_common/images/toolbar_user.svg"/>
          <div>${response.data.displayName}</div>
          <button class="logoutButton">Logout</button>
          </div>
        `)

        $("#userinfo_toggler .logoutButton").on("click", () => { window.location.replace("../logout");})
      })
    }
  }
}
