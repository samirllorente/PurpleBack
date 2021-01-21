import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SwitchComponent } from 'src/app/commons/switch/switch.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MENU } from './sidenav.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  public menu: Array<MENU> = [
    {
      new: true,
      title: 'Tu organizador',
      translation: 'sidenav.menu.yourOrganizer'
    },
    {
      title: 'Pagos',
      translation: 'sidenav.menu.payments'
    },
    {
      title: 'Transferencias',
      translation: 'sidenav.menu.tranfers'
    },
    {
      title: 'Certificados',
      translation: 'sidenav.menu.certificates'
    },
    {
      title: 'Seguridad',
      translation: 'sidenav.menu.security'
    }
  ];
  public openMenu: boolean = false;

  @ViewChild(SwitchComponent) switch: SwitchComponent;

  constructor(
    private dashboardService: DashboardService,
    private translateService: TranslateService
  ) {
    this.switch = new SwitchComponent();
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.menu.forEach(item => {
        item.title = this.translateService.instant(item.translation)
      });
    });
  }

  ngOnInit(): void {
    this.dashboardService.menu$.subscribe(open => {
      this.openMenu = open;
    });
  }

  ngAfterViewInit(): void {
    this.switch.change$.subscribe((en: boolean) => {
      this.translateService.use(en ? 'en' : 'es');
    });
  }

}
