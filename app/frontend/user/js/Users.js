import axios from "axios"

class Users{
  constructor(){

  }

  list(){
    return axios.get("../backend/admin/user").then((response)=>{
      return response.data
    })
  }
}


let users = new Users()
export default users
