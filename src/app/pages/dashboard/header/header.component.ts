import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MENU_HEADER } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public user: string = 'Miguel';
  public welcome: string = 'Buenos días, ';
  
  public menu: Array<MENU_HEADER> = [
    {
      title: 'Perfil',
      icon: 'account_circle'
    },
    {
      title: 'Alertas',
      icon: 'notifications_none'
    },
    {
      title: 'Salidad segura',
      icon: 'exit_to_app',
      highlight: true
    }
  ];
  private toggleMenu_: boolean = false;

  constructor(private dashboardService: DashboardService) {}

  public toggleMenu() {
    this.toggleMenu_ = !this.toggleMenu_;
    this.dashboardService.toggleMenu(this.toggleMenu_);
  }

}
