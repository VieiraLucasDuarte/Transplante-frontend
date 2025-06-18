import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() userName: string = '';
  constructor(private router: Router) { }

  logout(): void {
    this.router.navigate(['']);
  }

  home(): void {
    this.router.navigate(['dashboard']);
  }
}
