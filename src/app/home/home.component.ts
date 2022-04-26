import { Component, OnInit } from '@angular/core';
import { Plaza } from '../plaza';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  tipo_vehiculo:string = '';
  
  modelo:string = '';
  tipos:string[] = ["Coche","Moto"];
  marca:string='';
  de_pago:boolean= false;
  disabled:boolean= false;

  private _plaza:Plaza = {de_pago: false, disabled:false};
  constructor(private _datosService:DatosService) { }

  public get Plaza():Plaza {
    return this._plaza;
  }

  public addItem() {
    const currentItem:Plaza = {
      de_pago: this._plaza.de_pago,
      disabled: this._plaza.disabled
    }
    this._datosService.addItem(currentItem);
  }


  
  buscar(): void {
    for(let i = 0; i<7; i++){
      this.addItem();
    }
    
  }

}
