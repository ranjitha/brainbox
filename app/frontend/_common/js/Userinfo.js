import axios from "axios"



export default class Userinfo {


  constructor(permissions){

    if(permissions.featureset.authentication === false){
      $("#userinfo_toggler").remove()
    }
    else {
      axios.get("../userinfo")
        .then((response) => {
          this.user = response.data
          let icon = this.user.role==="admin"?"../_common/images/toolbar_admin.svg":"../_common/images/toolbar_user.svg"
          let role = this.user.role==="admin"?"(Administrator)":""
          $("#userinfo_toggler img").attr("src",icon)
          $("#userinfo_toggler .dropdown-menu").html(` 
              <div class="userContainer">
                <img  src="${icon}"/>
                <div>${this.user.displayName}</div>
                <div>${role}</div>
                <button class="logoutButton">Logout</button>
              </div>
          `)
          $("#userinfo_toggler .logoutButton").on("click", () => { window.location.replace("../logout");})
        })
        .catch( () => {
          let loginButton = $("<button class='loginButton'>Login</button>")
          $("#userinfo_toggler").html(loginButton)
          loginButton.on("click", ()=>{
            window.location.replace("../login")
          })
        })
    }
  }

  getUser(){
    return this.user
  }
}
