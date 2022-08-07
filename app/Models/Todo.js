export class Todo {
    constructor({ id, description }) {
        this.id = id
        this.description = description || ''
        // this.completed = completed || false
    }

    get Template() {
        return `
        <div class="text-white d-flex align-items-center justify-content-between">
            <div class="mb-0">
              <input class="me-3" type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todosController.toggleTodo('${this.id}')" >
              <b>${this.description}</b>        
              </div>
            <div>
              <button class="btn text-white selectable" onclick="app.todosController.deleteTodo('${this.id}')">
                <i class="mdi mdi-delete-forever"></i>
              </button>
            </div>
        </div>
    `
    }
}
