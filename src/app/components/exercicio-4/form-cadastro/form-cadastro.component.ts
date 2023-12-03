import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css',
})
export class FormCadastroComponent {

  CadastroForm!: FormGroup;
  checkCampos: number = 0;
  userName: string = '';
  constructor(private formBuilder: FormBuilder) {
    this.CadastroForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  onInputChange(event: Event){
    this.checkCampos = 0
  }
  CadastrarUser(event: Event) {
    
    if ((this.CadastroForm.value.email !== ''&& this.CadastroForm.value.email !== null) && (this.CadastroForm.value.password !== ''&& this.CadastroForm.value.password !== null) && (this.CadastroForm.value.name !== ''&& this.CadastroForm.value.name !== null)) {
      const newUser: {
        name: string;
        email: string;
        password: string;
      } = this.CadastroForm.value;
      this.CadastroForm.reset();
      console.log(newUser);
      this.checkCampos = 1;
      this.userName = newUser.name;
      event.preventDefault();
    } else {
      this.checkCampos = 2;
    }
    
  }
}
