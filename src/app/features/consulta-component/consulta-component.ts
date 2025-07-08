import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-consulta-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './consulta-component.html',
  styleUrl: './consulta-component.scss'
})
export class ConsultaComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }

  consultas: any[] = [];
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dados = sessionStorage.getItem('consultas');
      this.consultas = dados ? JSON.parse(dados) : [];
      console.log(this.consultas)
    }
  }

  irParaNovaConsulta() {
    this.router.navigate(['/nova-consulta']);
  }


  visualizar(arquivo: string) {
    alert(`Visualizando: ${arquivo}`);
  }

  baixar(arquivo: string) {
    alert(`Baixando: ${arquivo}`);
  }

  preenhcer() {
    this.consultas = [
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
  }
}

