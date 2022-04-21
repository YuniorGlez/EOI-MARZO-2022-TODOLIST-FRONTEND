import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist-frontend';

  urlImage = "https://static1.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG"

  tasks: Task[] = []

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks){
      this.tasks = JSON.parse(localStorage.getItem('tasks') as string )
    }else{
      this.tasks = []
    }
  }


  reloadData(){

    const tasks = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
      }
    ]

    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.tasks = tasks

  }


  completeThisTask(task: Task) {
    task.completed = !task.completed;
    localStorage.setItem('tasks', JSON.stringify(this.tasks) )
  }

  deleteThisTask(task: Task) {

  }


}
