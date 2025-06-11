import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dados-saude-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './dados-saude-component.html',
  styleUrl: './dados-saude-component.scss'
})
export class DadosSaudeComponent {
humorSelecionado: string = '';
  mensagemSucesso = '';
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.mensagemSucesso = 'Dados salvos com sucesso!';
      form.resetForm();
      this.humorSelecionado = '';
    }
  }
}