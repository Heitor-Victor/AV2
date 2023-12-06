import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dados-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dados-alunos.component.html',
  styleUrl: './dados-alunos.component.css'
})
export class DadosAlunosComponent implements OnInit {
  dados: any;
  constructor(private apiService: ApiService) { }
  alunos: Array<any> = [];
  
  mediaGlobal: number = 0;
  ngOnInit(): void {
    this.apiService.getAlunos().subscribe(data => {
      this.dados = data;
      console.log(this.dados);
      this.alunos = this.dados;
      console.log(this.alunos);     
      console.log((this.alunos[0].rendimentoEscolar))
    });
    
  }
  
}
