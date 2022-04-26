import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tipo_vehiculo:string = '';
  /*marcasCoche:string[] = ["Volkswagen","BMW","Tesla","Mercedes","Mazda"];
  marcasMotos:string[] = ["Suzuki","Yamaha",]*/
  modelo:string = '';
  tipos:string[] = ["Coche","Moto"];
  marca:string='';
  de_pago:boolean= false;
  disabled:boolean= false;
  
  buscar(): void {

  }

}
