import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private menu_: Subject<boolean> = new Subject<boolean>();
  public menu$: Observable<boolean> =  this.menu_.asObservable();

  public toggleMenu(open: boolean): void {
    this.menu_.next(open);
  }

}
