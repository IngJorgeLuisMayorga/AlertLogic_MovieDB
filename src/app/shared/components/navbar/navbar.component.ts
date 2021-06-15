import { Component, OnInit } from '@angular/core'
export interface MenuItem {
  path: string
  name: string
  icon: string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  menu: MenuItem[] = []

  constructor() {}

  ngOnInit(): void {
    this.menu = [
      {
        path: '/about',
        icon: '<i class="fas fa-info-circle"></i>',
        name: 'About',
      },
      {
        path: '/search',
        icon: '<i class="fas fa-search"></i>',
        name: 'Search',
      }
    ]
  }
}
