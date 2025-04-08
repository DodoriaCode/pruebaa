import { Injectable } from "@angular/core";
import { Task } from "src/app/models/task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'taskList';

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveTasks(tasks: Task[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(task: Task) {
    const tasks = this.getTasks();
    task.id = Date.now();
    tasks.push(task);
    this.saveTasks(tasks);
  }
}
