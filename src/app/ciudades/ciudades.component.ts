import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  template: `<li (click)="onCityClicked(city)" [ngClass]="{'alert alert-info': city === selection}">{{city | titlecase}}</li>`,
  styleUrls: ['./ciudades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CiudadesComponent {
  
  @Input() selection!: string;
  @Input() city!: string;
  @Output() cityClickedEvent = new EventEmitter<string>()
  
  onCityClicked(city:string):void{
    this.cityClickedEvent.emit(city);
  }
}
