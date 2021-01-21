import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './pages/dashboard/sidenav/sidenav.component';
import { HeaderComponent } from './pages/dashboard/header/header.component';
import { DashboardService } from './services/dashboard.service';
import { HomeComponent } from './pages/home/home.component';
import { StoresModule } from './stores/stores.module';
import { ProductCardComponent } from './pages/home/product-card/product-card.component';
import { SwitchComponent } from './commons/switch/switch.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    ProductCardComponent,
    SwitchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({}),
    StoresModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
