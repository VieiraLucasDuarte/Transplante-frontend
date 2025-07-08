import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DadosSaudeService } from '../../../core/dadosSaude.service';
import { DadosVitais } from '../../../core/interfaces/dadosSaude.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-historico-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historico-component.html',
  styleUrl: './historico-component.scss'
})

export class HistoricoComponent implements OnInit {
  // historico: DadosVitais[] = [];
  historico: any[] = [];
  constructor(
    private serviceDadosVitias: DadosSaudeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.preenche();
    if (isPlatformBrowser(this.platformId)) {
      const dados = localStorage.getItem('historicoSaude');
      const dadosSalvos = dados ? JSON.parse(dados) : [];
      this.historico = [...this.historico, ...dadosSalvos]
    }
  }

  findDadosSaude() {
    this.serviceDadosVitias.getDadosSaude().subscribe(x => {
      this.historico = x;
      console.log(this.historico, 'hist');
    })
  }

  filtroSelecionado: 'hoje' | 'semana' | 'mes' = 'hoje';
  preenche() {
    this.historico = [
      { dataColeta: '12/06/2025', pressaoArterial: '120/80', frequenciaCardiaca: '72 bpm', temperaturaCorporal: '36.5°C', saturacaoOxigenio: '98%', peso: '70kg' },
      { dataColeta: '11/06/2025', pressaoArterial: '118/78', frequenciaCardiaca: '70 bpm', temperaturaCorporal: '36.6°C', saturacaoOxigenio: '97%', peso: '70.2kg' },
      { dataColeta: '10/06/2025', pressaoArterial: '121/79', frequenciaCardiaca: '74 bpm', temperaturaCorporal: '36.4°C', saturacaoOxigenio: '99%', peso: '70.1kg' },
      { dataColeta: '09/06/2025', pressaoArterial: '117/76', frequenciaCardiaca: '68 bpm', temperaturaCorporal: '36.7°C', saturacaoOxigenio: '98%', peso: '69.9kg' },
      { dataColeta: '08/06/2025', pressaoArterial: '119/77', frequenciaCardiaca: '71 bpm', temperaturaCorporal: '36.5°C', saturacaoOxigenio: '97%', peso: '70kg' },
      { dataColeta: '07/06/2025', pressaoArterial: '122/80', frequenciaCardiaca: '73 bpm', temperaturaCorporal: '36.6°C', saturacaoOxigenio: '96%', peso: '70.3kg' },
      { dataColeta: '06/06/2025', pressaoArterial: '116/75', frequenciaCardiaca: '69 bpm', temperaturaCorporal: '36.4°C', saturacaoOxigenio: '98%', peso: '70kg' },
      { dataColeta: '05/06/2025', pressaoArterial: '118/79', frequenciaCardiaca: '70 bpm', temperaturaCorporal: '36.5°C', saturacaoOxigenio: '97%', peso: '70.1kg' },
      { dataColeta: '04/06/2025', pressaoArterial: '120/81', frequenciaCardiaca: '75 bpm', temperaturaCorporal: '36.8°C', saturacaoOxigenio: '99%', peso: '70.2kg' },
      { dataColeta: '03/06/2025', pressaoArterial: '115/74', frequenciaCardiaca: '67 bpm', temperaturaCorporal: '36.3°C', saturacaoOxigenio: '98%', peso: '69.8kg' }
    ];
  }

  exportarCSV() {
    const header = 'Data,Pressão,Frequência,Temperatura,Saturação,Peso';
    const rows = this.historico.map(item =>
      `${item.DataHora},${item.PressaoArterial},${item.FrequenciaCardiaca},${item.TemperaturaCorporal},${item.SaturacaoOxigenio},${item.Peso}`
    ).join('\n');

    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'historico.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
