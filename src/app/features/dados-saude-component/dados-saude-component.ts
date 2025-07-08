import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DadosSaudeService } from '../../core/dadosSaude.service';
import { DadoSaude } from '../../core/interfaces/dadosSaude.interface';
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
    const novoDado: DadoSaude = {
      dataColeta: new Date().toISOString(),
      pressaoArterial: form.value.pressaoArterial,
      frequenciaCardiaca: `${form.value.frequenciaCardicacao} bpm`,
      temperaturaCorporal: `${form.value.temperaturaCorporal}°C`,
      saturacaoOxigenio: `${form.value.saturacaoOxigenio}%`,
      peso: `${form.value.peso}kg`
    };

    const historico: DadoSaude[] = JSON.parse(localStorage.getItem('historicoSaude') || '[]');
    historico.push(novoDado);
    localStorage.setItem('historicoSaude', JSON.stringify(historico));

    this.mensagemSucesso = 'Dados salvos com sucesso!';
    form.resetForm();
  }
  }
}