import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AreaLogadaComponent } from '../area-logada/area-logada.component';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FormsModule, CommonModule, AreaLogadaComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  email: string = '';
  senha: string = '';
  autenticado: boolean = false;

  autenticar() {
    this.autenticado = true;
  }
}
