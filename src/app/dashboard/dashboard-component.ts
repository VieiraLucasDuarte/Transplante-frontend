import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss'
})

export class DashboardComponent {
  constructor(
    private router: Router
  ) {
}
  userName = 'Lucas';
  logout(): void {
    this.router.navigate(['']);
  }

  onSubmit(): void {
    this.router.navigate(['saude']);
  }
}
