import { BackgroundImagesController } from "./Controllers/BackgroundImagesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { QuotesController } from "./Controllers/QuotesController.js"
import { TempsController } from "./Controllers/TempsController.js"
import { ClockController } from "./Controllers/ClockController.js";


class App {
  backgroundImagesController = new BackgroundImagesController()
  todosController = new TodosController()
  quotesController = new QuotesController()
  tempsController = new TempsController()
  clockController = new ClockController()

}

window["app"] = new App();
