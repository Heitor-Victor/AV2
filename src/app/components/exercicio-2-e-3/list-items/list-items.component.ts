import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css',
})
export class ListItemsComponent {
  listaDeTarefas = [
    { tarefa: 'Limpar o banheiro', concluido: false },
    { tarefa: 'Fazer o jantar', concluido: false },
    { tarefa: 'Comprar sabão', concluido: false },
  ];

  adicionarTarefa(atividade: string) {
    this.listaDeTarefas.push({ tarefa: atividade, concluido: false });
  }
  deletarTarefa(index: number) {
    this.listaDeTarefas.splice(index, 1);
  }
  concluirTarefa(index: number) {
    this.listaDeTarefas[index].concluido = true;
  }
}
