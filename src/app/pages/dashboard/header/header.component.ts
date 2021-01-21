import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MENU_HEADER } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public user: string = 'Miguel';
  
  public menu: Array<MENU_HEADER> = [
    {
      icon: 'account_circle',
      title: 'Perfil',
      translation: 'header.profile'
    },
    {
      icon: 'notifications_none',
      title: 'Alertas',
      translation: 'header.alerts'
    },
    {
      highlight: true,
      icon: 'exit_to_app',
      title: 'Salidad segura',
      translation: 'header.logout'
    }
  ];
  private toggleMenu_: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private translateService: TranslateService
    ) {
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.menu.forEach(item => {
          item.title = this.translateService.instant(item.translation)
        });
      });
    }

  public toggleMenu() {
    this.toggleMenu_ = !this.toggleMenu_;
    this.dashboardService.toggleMenu(this.toggleMenu_);
  }

}
