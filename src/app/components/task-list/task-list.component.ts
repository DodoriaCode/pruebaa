import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, AfterViewInit, OnDestroy {
  statusFilter = '';
  displayedColumns: string[] = ['title', 'description', 'status', 'dueDate', 'character'];
  dataSource = new MatTableDataSource<Task>();
  private subscriptions = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Asegura que tengamos datos iniciales
    this.taskService.loadMockDataIfEmpty();

    // Suscribirse a los cambios de tareas
    const sub = this.taskService.getTasks$().subscribe(tasks => {
      this.updateTable(tasks);
    });

    this.subscriptions.add(sub);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  applyFilter(): void {
    const tasks = this.taskService.getTasks();
    this.updateTable(tasks);
  }

  private updateTable(tasks: Task[]): void {
    this.dataSource.data = this.statusFilter
      ? tasks.filter(task => task.status === this.statusFilter)
      : tasks;
  }
}
