import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private router: Router ) { }
  hamburgerToggled: boolean = false;
  navItems: NavItem[] = [
    new NavItem('כל המתכונים', '/recepies'),
    new NavItem('+ הוסף מתכון', '/createRecepie')
  ];

  toggleMenu() {
    this.hamburgerToggled = !this.hamburgerToggled
  }
}
