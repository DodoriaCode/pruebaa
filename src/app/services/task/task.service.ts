import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TASKS_MOCK } from 'src/app/components/mock/task.mock';
import { Task } from 'src/app/models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly storageKey = 'taskList';
  private tasksSubject: BehaviorSubject<Task[]>;

  constructor() {
    const tasks = this.loadTasks();
    this.tasksSubject = new BehaviorSubject<Task[]>(tasks.length ? tasks : TASKS_MOCK);
    this.saveTasks(this.tasksSubject.value); // Guarda los mocks si se usaron
  }

  /** Retorna las tareas como Observable */
  getTasks$(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  /** Retorna las tareas actuales (sincrónico) */
  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  /** Agrega una nueva tarea */
  addTask(task: Task): void {
    const newTask = { ...task, id: Date.now() };
    const updatedTasks = [...this.tasksSubject.value, newTask];
    this.updateState(updatedTasks);
  }

  /** Actualiza una tarea existente */
  updateTask(updatedTask: Task): void {
    const updatedTasks = this.tasksSubject.value.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.updateState(updatedTasks);
  }

  /** Carga datos de mock si el storage está vacío */
  loadMockDataIfEmpty(): void {
    if (!this.tasksSubject.value.length) {
      this.updateState(TASKS_MOCK);
    }
  }

  /** Guarda en localStorage y emite cambios */
  private updateState(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
    this.saveTasks(tasks);
  }

  private loadTasks(): Task[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
