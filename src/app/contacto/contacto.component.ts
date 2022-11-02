import { Component, OnInit } from '@angular/core';

interface ContactForm
{
  "nombre": "Edward",
  "checkAdult": true,
  "departament": "sales",
  "commend": "Ayayayaiiii"
}


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  model=
  {
    name: "",
    checkAdult: false,
    departament: "",
    comment: ""
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(values:any):void{
    console.log('Form Values',values);
  }

}
