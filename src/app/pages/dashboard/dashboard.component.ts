import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public openMenu: boolean = false;

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.menu$.subscribe(open => {
      this.openMenu = open;
    });
  }

}
