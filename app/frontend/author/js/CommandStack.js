

/**
 * @class
 *
 * An implementation of a command stack. A stack manages the executing, undoing, and redoing of Commands. Executed
 * commands are pushed onto a a stack for undoing later. Commands which are undone are pushed onto a redo stack.
 * Whenever a new command is executed, the redo stack is flushed.
 *
 * You can retrieve the current used CommandStack just by calling <code>canvas.getCommandStack()</code>
 *
 */
export default class CommandStack {

    /**
     * Create a new CommandStack objects which can be execute via the CommandStack.
     *
     */
    constructor() {
      this.undostack = []
      this.redostack = []
      this.maxundo = 50
      this.eventListeners = []
    }

    /**
     *
     * Remove the undo / redo history. This is useful if the user has been save the
     * document.
     *
     * @returns {this}
     **/
    markSaveLocation () {
      this.undostack = []
      this.redostack = []

      // fire an empty command to inform all listener that the stack has been changed
      this.notifyListeners(new draw2d.command.Command(), draw2d.command.CommandStack.POST_EXECUTE)

      return this
    }

    /**
     *
     *
     * Executes the specified Command if possible. Prior to executing the command, a
     * draw2d.command.CommandStackEvent for {@link #PRE_EXECUTE} will be fired to event listeners.
     * Similarly, after attempting to execute the command, an event for {@link #POST_EXECUTE}
     * will be fired.
     *
     * @param {draw2d.command.Command} command The command to execute.
     * @returns {this}
     **/
    push(document) {

      this.undostack.push(document)

      // cleanup the redo stack if the user execute a new command.
      // I think this will create a "clean" behaviour of the unde/redo mechanism.
      //
      this.redostack = []

      // monitor only the max. undo stack size
      //
      if (this.undostack.length > this.maxundo) {
        this.undostack = this.undostack.slice(this.undostack.length - this.maxundo)
      }
      this.notifyListeners(command)

      return this
    }


    /**
     *
     * Undo on command from the stack and store them on the redo command stack.
     * @returns {this}
     **/
    undo () {
      let command = this.undostack.pop()
      if (command) {
        this.notifyListeners(command, draw2d.command.CommandStack.PRE_UNDO)
        this.redostack.push(command)
        command.undo()
        this.notifyListeners(command, draw2d.command.CommandStack.POST_UNDO)
      }

      return this
    }

    /**
     *
     * Redo a command after the user has undo a command
     *
     * @returns {this}
     **/
    redo() {
      let command = this.redostack.pop()

      if (command) {
        this.notifyListeners(command, draw2d.command.CommandStack.PRE_REDO)
        this.undostack.push(command)
        command.redo()
        this.notifyListeners(command, draw2d.command.CommandStack.POST_REDO)
      }

      return this
    }

    /**
     *
     * Indicates whenever a REDO is possible.
     *
     * @returns {Boolean} <code>true</code> if it is appropriate to call {@link #redo()}.
     */
    canRedo () {
      return this.redostack.length > 0
    }

    /**
     *
     * indicator whenever a undo is possible.
     *
     * @returns {Boolean} <code>true</code> if {@link #undo()} can be called
     **/
    canUndo () {
      return this.undostack.length > 0
    }

    /**
     * Adds a listener to the command stack, which will be notified whenever a command has been processed on the stack.
     *
     * @param event
     * @param func
     * @returns {this}
     */
    on(event, listener) {
      if (event !== "change")
        throw "only event of kind 'change' is supported"

      if (listener instanceof draw2d.command.CommandStackEventListener) {
        this.eventListeners.add(listener)
      }
      else if (typeof listener.stackChanged === "function") {
        this.eventListeners.add(listener)
      }
      else if (typeof listener === "function") {
        this.eventListeners.add({stackChanged: listener})
      }
      else {
        throw "Object doesn't implement required callback interface [draw2d.command.CommandStackListener]"
      }

      return this
    }

    /**
     *
     * @param listener
     * @returns {this}
     */
    off (listener) {
      this.eventListeners.grep(entry => (entry === listener || entry.stackChanged === listener))
      return this
    }

    /**
     *
     * Notifies command stack event listeners that the command stack has changed to the
     * specified state.
     *
     * @param {draw2d.command.Command} command the command
     * @param {Number} state the current stack state
     * @private
     **/
    notifyListeners(command, state, action) {
      let event = new draw2d.command.CommandStackEvent(this, command, state, action)
      let size = this.eventListeners.getSize()

      for (let i = 0; i < size; i++) {
        this.eventListeners.get(i).stackChanged(event)
      }
    }
}

