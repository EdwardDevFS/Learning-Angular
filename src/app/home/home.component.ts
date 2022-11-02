import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cities = ['Barcelona','Madrid', 'Lima'];  
  name!: string;
  selection!: string;
  criteria!: '';


  title = 'Dia 4 reto';
  url = 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/05/Aqua-Konosuba.jpg?fit=1280%2C720&quality=80&ssl=1';
  
  // ngOnChanges(changes: SimpleChanges):void{
  //     console.log('Change ->', changes)
  // }

  // ngOnInit(): void {
  //     console.log('OnInit ->');
  // }
  // ngOnDestroy(): void {
  //     console.log('OnDestroy');
  // }
  AddNewCities(city: string):void{
    this.cities.push(city);
  }
  onCityClicked(city:string): void {
      console.log('City ->', city);
      this.selection = city;
  }
  OnClear():void{
    this.selection = '';
  }
}
