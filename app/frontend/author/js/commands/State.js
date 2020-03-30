

export default class State{

  constructor(view){
    // the data BEFORE any changes happens
    this.snapshotBefore = view.getDocument().clone()
    this.snapshotAfter = null
    this.view = view
  }

  undo(){
    this.snapshotAfter = this.view.getDocument().clone()
    this.view.setDocument(this.snapshotBefore)
  }

  redo(){
    this.view.setDocument(this.snapshotAfter)
  }
}
