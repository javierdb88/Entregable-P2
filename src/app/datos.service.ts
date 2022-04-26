import { Injectable } from '@angular/core';
import { Plaza } from './plaza';

@Injectable()
export class DatosService {

  

  private _plazas:Plaza[] = [];

  addItem(item: Plaza) {
    this._plazas.push(item);
    
  }

  removeItem() {
    this._plazas.pop();
  }

  getItems(): Plaza[] {
    return this._plazas;
  }
}
