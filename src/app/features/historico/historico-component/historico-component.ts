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
historico: DadosVitais[] = [];
  constructor(
    private serviceDadosVitias: DadosSaudeService
  ) { }

  ngOnInit(): void {
    this.findDadosSaude();
  }

  private findDadosSaude() {
    this.serviceDadosVitias.getDadosSaude().subscribe(x => {
      this.historico = x;
      console.log(this.historico);
    })
  }
  filtroSelecionado: 'hoje' | 'semana' | 'mes' = 'hoje';

  // historico = [
  //   { data: '12/06/2025', pressao: '120/80', frequencia: '72 bpm', temperatura: '36.5°C', saturacao: '98%', peso: '70kg' },
  //   { data: '11/06/2025', pressao: '118/78', frequencia: '70 bpm', temperatura: '36.6°C', saturacao: '97%', peso: '70.2kg' },
  //   // Adicione mais dados aqui
  // ];

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
