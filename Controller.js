class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  run() {
    // we ask an instance of the Model class to read the folder with all the themes and create a menu.
    // along the way we pass the Controller method this.printTopicsController
    // since we need to send the menu for output to an instance of the view class
    // after the asynchronous read folder completes
    // Here this.printTopicsController is a callback 
    this.model.readTopics(this.printTopicsController)
  }

  printTopicsController(topicsMenu) {
    // Here we need to ask an instance of the View class to display the menu to the user
    // and also wait for the answer
  }

  
}

module.exports = Controller