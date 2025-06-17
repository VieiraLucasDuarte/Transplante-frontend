import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-component',
  imports: [CommonModule],
  templateUrl: './consulta-component.html',
  styleUrl: './consulta-component.scss'
})
export class ConsultaComponent {
  consultas = [
    {
      data: '10/06/2025',
      medico: 'Dr. João Silva',
      diagnostico: 'Hipertensão leve',
      receitas: ['receita-hipertensao.pdf'],
      atestados: ['atestado-descanso.pdf'],
      observacoes: 'Paciente deve evitar sal e monitorar a pressão diariamente.'
    },
    {
      data: '25/05/2025',
      medico: 'Dra. Ana Costa',
      diagnostico: 'Controle de imunossupressor',
      receitas: ['receita-imuno.pdf'],
      atestados: [],
      observacoes: 'Revisar em 30 dias.'
    }
  ];

  adicionarConsulta() {
    alert('Funcionalidade de adicionar nova consulta ainda não implementada.');
  }

  visualizar(arquivo: string) {
    alert(`Visualizando: ${arquivo}`);
    // Aqui você pode abrir um modal, nova aba, ou navegar para visualização real
  }

  baixar(arquivo: string) {
    alert(`Baixando: ${arquivo}`);
    // Você pode usar a tag <a download> com href se os arquivos forem públicos
  }
}

