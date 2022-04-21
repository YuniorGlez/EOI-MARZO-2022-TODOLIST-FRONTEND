import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist-frontend';
  newTodoTitle = "";
  loading : boolean = false;

  urlImage = "https://static1.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG"

  tasks: Task[] = [];

  constructor(private tasksService : TasksService ) {
    this.loadTodos()
  }


  loadTodos(){
    this.loading = true;
    this.tasksService.loadTasks().then(tasks => {
      this.tasks = tasks
      this.loading = false;
    })
  }

  saveNewTask(){
    this.tasksService.saveNewTask(this.newTodoTitle)
      .then(newTask => {
        this.tasks.unshift(newTask)
        this.newTodoTitle = ""
      })
      .catch(err => {
        console.log({err})
        if(err && err.response && err.response.data && err.response.data.errors && err.response.data.errors.title){
          alert('Tienes un error en el título Hulio');
          alert(err.response.data.errors.title.message)
        }
      })
  }

  completeThisTask(task: Task) {
    task.completed = !task.completed;
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  deleteThisTask(task: Task) {
    this.loading = true;

    this.tasksService.delete(task._id as string)
      .then(response => {
          this.tasks = this.tasks.filter(t => t._id !== task._id)
          this.loading = false;
      })
  }


}
