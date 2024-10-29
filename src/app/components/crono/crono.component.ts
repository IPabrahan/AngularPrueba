import { Component } from '@angular/core';

@Component({
  selector: 'app-crono',
  standalone: true,
  imports: [],
  templateUrl: './crono.component.html',
  styleUrl: './crono.component.css'
})
export class CronoComponent {
  cont: number = 0;
  isPaused: boolean = true;

  ngOnInit() {

  }

  constructor() {
    setInterval(
      () => {
        if (!this.isPaused) {
          this.cont++;
        }
      }
      , 1000
    )
  }

  reset(): void {
    this.cont = 0;
    this.isPaused = true;
  }
  play(): void {
    this.isPaused = false;

  }
  pause(): void {
    this.isPaused = true;
  }
}
