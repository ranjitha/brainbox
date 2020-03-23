
export default class View {

  /**
   * @constructor
   *
   */
  constructor( json) {
    this.json = json || []
  }

  getSectionById(id){
    return this.json.find( value => value.id===id)
  }

  setSection(section){
    let index = this.json.findIndex((obj => obj.id == section.id))
    if(index>=0){
      this.json[index] = section
    }
    else{
      console.log("record not found", section)
    }
  }

  add(section){
    this.json.push(section)
  }

  forEach(callback){
    return this.json.forEach(callback)
  }
}
