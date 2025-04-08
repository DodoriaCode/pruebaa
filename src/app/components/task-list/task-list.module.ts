import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { TaskListComponent } from './task-list.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    PipesModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
  ],
  exports: [TaskListComponent],
})
export class TaskListModule {}
