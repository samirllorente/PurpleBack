import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  @Output('change') change$: EventEmitter<boolean> = new EventEmitter<boolean>();

  public onChange(event: any): void {
    this.change$.emit(event.target.checked);
  }

}
