
export default class View {

  /**
   * @constructor
   *
   */
  constructor( json) {
    this.json = json || []
  }

  get(id){
    return this.json.find( value => value.id===id)
  }

  set(section){
    let index = this.json.findIndex((obj => obj.id == section.id))
    if(index>=0){
      this.json[index] = section
    }
    else{
      console.log("record not found", section)
    }
  }

  get length(){
    return this.json.length
  }

  index(id){
    return this.json.findIndex((obj => obj.id == id))
  }

  add(section){
    this.json.push(section)
  }

  move(fromIndex, toIndex) {
    this.json.splice(toIndex, 0, this.json.splice(fromIndex, 1)[0]);
  };

  forEach(callback){
    return this.json.forEach(callback)
  }
}
