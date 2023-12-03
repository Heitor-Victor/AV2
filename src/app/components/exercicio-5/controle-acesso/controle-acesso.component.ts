import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controle-acesso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controle-acesso.component.html',
  styleUrl: './controle-acesso.component.css',
})
export class ControleAcessoComponent {
  controle = 0;

  atualizarAcesso(index: number) {
    this.controle = index;
  }
}
