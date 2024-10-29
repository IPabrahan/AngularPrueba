import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { task } from '../../model/task';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  @ViewChild("texto") el_texto: ElementRef | undefined;
  @Output() taskCreated = new EventEmitter<task>()

  createTask() {
    if (!this.el_texto) return false;
    let title = this.el_texto?.nativeElement.value.trim();
    if (!title) return false;
    let timestamp = Date.now();
    let newNote: task = { id: Math.random() * timestamp, title: title };
    this.taskCreated.emit(newNote);
    this.el_texto.nativeElement.value = "";
    return false;
  }
}
