import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-consulta-component',
  imports: [FormsModule],
  templateUrl: './nova-consulta-component.html',
  styleUrl: './nova-consulta-component.scss'
})
export class NovaConsultaComponent {
constructor(private router: Router) {}

  salvarConsulta(form: any) {
    console.log(form)
    if (form.valid) {
      const novaConsulta = {
        data: form.value.data,
        medico: form.value.medico,
        diagnostico: form.value.diagnostico,
        receita: form.value.receita,
        observacoes: form.value.observacoes
      };

      const consultas = JSON.parse(sessionStorage.getItem('consultas') || '[]');
      consultas.push(novaConsulta);
      sessionStorage.setItem('consultas', JSON.stringify(consultas));

      this.router.navigate(['/consulta']);
    }
  }
}
