import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TASKS_MOCK } from "src/app/components/mock/task.mock";
import { Task } from "src/app/models/task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'taskList';
  taskAdded$ = new Subject<Task>();

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
    this.taskAdded$.next(task);
  }

  loadMockDataIfEmpty() {
    const current = this.getTasks();
    if (current.length === 0) {
      this.saveTasks(TASKS_MOCK);
    }
  }

}
