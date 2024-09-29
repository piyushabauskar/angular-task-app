import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  // private taskService :TasksService

  //Dependency Injection Through constructor
  //this will automatically create a property named taskService, shortcut provided by TS no need to use line  number 18
  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
