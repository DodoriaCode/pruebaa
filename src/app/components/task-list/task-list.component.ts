import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class TaskListComponent implements OnInit, OnDestroy {

  statusFilter = '';
  displayedColumns: string[] = ['title', 'description', 'status', 'dueDate', 'character'];
  private subscriptions = new Subscription();
  dataSource = new MatTableDataSource<Task>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.loadMockDataIfEmpty();
    this.loadTasks();

    const sub = this.taskService.taskAdded$.subscribe(() => {
      this.loadTasks();
    });
    this.subscriptions.add(sub);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadTasks() {
    this.taskService.loadMockDataIfEmpty();
    const tasks = this.taskService.getTasks();
    this.dataSource.data = tasks;
    this.applyFilter();
  }

  applyFilter() {
    const tasks = this.taskService.getTasks();
    this.dataSource.data = this.statusFilter
      ? tasks.filter(t => t.status === this.statusFilter)
      : tasks;
  }
}

