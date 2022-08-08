import { ProxyState } from "../AppState.js";
import { getTodoForm } from "../Components/TodoForm.js"
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTodos() {
    let template = ''
    // let todos = ProxyState.todos
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('tasks').innerHTML = template
    document.getElementById('form').innerHTML = getTodoForm()
    document.getElementById('total-tasks').innerHTML = `
    <div class="text-white">
      <div class="d-flex justify-content-center">
        <div>
            ${ProxyState.todos.filter(t => t.completed).length}
            <b>/</b> ${ProxyState.todos.length}
        </div>
        <div>    
      </div>
    </div>
    `
}

export class TodosController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        this.getTodos()
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error('[Get Todos]', error)
            Pop.error(error)
        }
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            let form = window.event.target

            let newTodo = {
                description: form.description.value
            }
            await todosService.createTodo(newTodo)
            form.reset()
        } catch (error) {
            console.error('[Create Todo]', error)
            Pop.error(error)
        }

    }

    async deleteTodo(todoId) {
        try {
            const yes = await Pop.confirm('Delete Task')
            if (!yes) { return }
            await todosService.deleteTodo(todoId)
        } catch (error) {
            console.error('[Delete Todo]', error)
            Pop.error(error)
        }
    }

    async toggleTodo(todoId) {
        try {
            await todosService.toggleTodo(todoId)
        } catch (error) {
            console.error('Toggle Todo', error)
            Pop.error(error)
        }
    }
}









