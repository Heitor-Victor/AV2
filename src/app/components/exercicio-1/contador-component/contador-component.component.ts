import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  standalone: true,
  imports: [],
  templateUrl: './contador-component.component.html',
  styleUrl: './contador-component.component.css'
})
export class ContadorComponentComponent {
  numeroContador = 0;

  incrementar() {
    this.numeroContador++
  }
  decrementar() {
    if (this.numeroContador > 0) {
      this.numeroContador--
    }
  }

}
