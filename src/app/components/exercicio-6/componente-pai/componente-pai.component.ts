import { Component } from '@angular/core';
import { ComponenteFilhoComponent } from '../componente-filho/componente-filho.component';

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  imports: [ComponenteFilhoComponent],
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {
  listaDeItens = ["item 1", "item 2", "item 3", "item 4"];
}
