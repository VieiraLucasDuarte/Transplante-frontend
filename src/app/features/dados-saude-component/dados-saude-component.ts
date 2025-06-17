import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DadosSaudeService } from '../../core/dadosSaude.service';
// import { DadosSaudeService } from '../../core/DadosSaude.service';

@Component({
  selector: 'app-dados-saude-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './dados-saude-component.html',
  styleUrl: './dados-saude-component.scss'
})
export class DadosSaudeComponent {

  humorSelecionado: string = '';
  mensagemSucesso = '';

  constructor(
    private serviceDadosVitias: DadosSaudeService
  ) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.serviceDadosVitias.saveDadosSaude(form.value).subscribe(x => {
        console.log(x);
      })
    }
  }
}