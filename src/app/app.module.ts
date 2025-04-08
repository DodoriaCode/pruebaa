import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskFormModule } from './components/task-form/task-form.module';
import { TaskListModule } from './components/task-list/task-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TaskListModule,
    TaskFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
