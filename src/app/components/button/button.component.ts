import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  text: string = 'Texto';
  @Input()
  color: number = 1;
  @Output()
  presionar = new EventEmitter<any>()

  @Output()
  cacota = new EventEmitter<any>()
  // fn: any = () => { };

  aleatorio(): void {
    this.color = (Math.floor(Math.random() * (13 - 1 + 1)) + 1)
    console.log(this.color)
  }

  emitirEvento() {
    // this.presionar.emit("He pulsado el boton")
    this.color == 13 ? this.color = 1 : this.color++
    console.log(this.color)
  }

}
