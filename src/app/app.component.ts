import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponentComponent } from './components/exercicio-1/contador-component/contador-component.component';
import { ListItemsComponent } from './components/exercicio-2-e-3/list-items/list-items.component';
import { FormCadastroComponent } from './components/exercicio-4/form-cadastro/form-cadastro.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ControleAcessoComponent } from './components/exercicio-5/controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './components/exercicio-6/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/exercicio-6/componente-filho/componente-filho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContadorComponentComponent,
    ListItemsComponent,
    FormCadastroComponent,
    ReactiveFormsModule,
    FormsModule,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AV2';
}
