
export default class Document {

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

  remove(id){
    let index = this.json.findIndex((obj => obj.id == id))
    return this.json.splice(index, 1);
  }

  add(section, index){
    if(typeof index === "number"){
      this.json.splice(index,0,section)
    }
    else {
      this.json.push(section)
    }
  }

  move(fromIndex, toIndex){
    this.json.splice(toIndex, 0, this.json.splice(fromIndex, 1)[0]);
  };

  forEach(callback){
    return this.json.forEach(callback)
  }

  clone(){
    return new Document(JSON.parse(JSON.stringify(this.json)))
  }
}
