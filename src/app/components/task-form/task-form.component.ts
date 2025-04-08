import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RickMortyService } from 'src/app/services/rickmorty/rickmory.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;
  characters: string[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly rickMortyService: RickMortyService,
    private readonly taskService: TaskService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['Pendiente'],
      dueDate: ['', Validators.required],
      character: [''],
    });
  }

  ngOnInit() {
    this.rickMortyService
      .getCharacters()
      .subscribe((chars) => (this.characters = chars));
  }

  submit() {
    if (this.form.valid) {
      this.taskService.addTask(this.form.value);
      this.form.reset({ status: 'Pendiente' });
    }
  }
}
