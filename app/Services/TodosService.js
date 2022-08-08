import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async toggleTodo(todoId) {
        let todo = ProxyState.todos.find(t => t.id == todoId)

        if (!todo) {
            throw new Error('Bad Todo id')
        }

        todo.completed = !todo.completed
        let todoIndex = ProxyState.todos.indexOf(todo)

        let res = await sandboxApi.put(`/zach/todos/${todoId}`, todo)
        let updatedTodo = new Todo(res.data)
        ProxyState.todos.splice(todoIndex, 1, updatedTodo)
        ProxyState.todos = ProxyState.todos
    }

    // async editTodo(todoData) {
    //     let res = await sandboxApi.put(`/zach/todos/${todoData.id}`, todoData)
    //     let todo = new Todo(res.data)
    //     let todoIndex = ProxyState.todos.findIndex(t => t.id == todoData.id)
    //     ProxyState.todos.splice(todoIndex, 1, todo)
    //     ProxyState.todos = ProxyState.todos
    // }

    async getTodos() {
        let res = await sandboxApi.get('/zach/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
    }

    async createTodo(todoFormData) {

        let res = await sandboxApi.post('/zach/todos', todoFormData)
        let todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }

    async deleteTodo(todoId) {
        let url = `/zach/todos/${todoId}`
        await sandboxApi.delete(url)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
    }

}

export const todosService = new TodosService()






