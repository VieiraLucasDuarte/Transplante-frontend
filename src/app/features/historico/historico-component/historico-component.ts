import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DadosSaudeService } from '../../../core/dadosSaude.service';
import { DadosVitais } from '../../../core/interfaces/dadosSaude.interface';

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
    private serviceDadosVitias: DadosSaudeService
  ) { }

  ngOnInit(): void {
    this.preenche();
  }

  findDadosSaude() {
    // this.serviceDadosVitias.getDadosSaude().subscribe(x => {
    //   this.historico = x;
    //   console.log(this.historico, 'hist');
    // })
  }
  filtroSelecionado: 'hoje' | 'semana' | 'mes' = 'hoje';
  preenche() {
    this.historico = [
      { DataHora: '12/06/2025', PressaoArterial: '120/80', FrequenciaCardiaca: '72 bpm', TemperaturaCorporal: '36.5°C', SaturacaoOxigenio: '98%', Peso: '70kg' },
      { DataHora: '11/06/2025', PressaoArterial: '118/78', FrequenciaCardiaca: '70 bpm', TemperaturaCorporal: '36.6°C', SaturacaoOxigenio: '97%', Peso: '70.2kg' },
      // Adicione mais dados aqui
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
