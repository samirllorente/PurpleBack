import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MENU } from './sidenav.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public title: string = 'Logo';
  public menuTitle: string = 'Tus productos';

  public menu: Array<MENU> = [
    {
      title: 'Tu organizador',
      new: true
    },
    {
      title: 'Pagos'
    },
    {
      title: 'Transferencias'
    },
    {
      title: 'Certificados'
    },
    {
      title: 'Seguridad'
    }
  ];
  public openMenu: boolean = false;

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.menu$.subscribe(open => {
      this.openMenu = open;
    });
  }

}
