import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  statusFilter = '';
  displayedColumns: string[] = ['title', 'description', 'status', 'dueDate', 'character'];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
    this.applyFilter();
  }

  applyFilter() {
    this.filteredTasks = this.statusFilter
      ? this.tasks.filter(t => t.status === this.statusFilter)
      : this.tasks;
  }
}

