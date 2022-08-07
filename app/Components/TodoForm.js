import { Todo } from "../Models/Todo.js";

export function getTodoForm(todo = new Todo({})) {
  let submitAction = 'app.todosController.createTodo()'
  if (todo.id) {
    submitAction = `app.todosController.editTodo('${todo.id})`
  }

  return `
      <form onsubmit="${submitAction}">
        <label for="description"></label>
        <input type="text" name="description" id="description" class="w-100">
        <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Enter New Task</button>
      </form>
    `
}