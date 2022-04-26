import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MapMarker, GoogleMap } from '@angular/google-maps';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  datos:any[] = []
  markers:  any[] = [];
  
  constructor(private _datosService:DatosService) {

    this.datos = _datosService.getItems();
    console.log(this.datos);
   }

  center = {lat: 24, lng: 12};
  zoom = 18;
  display?: google.maps.LatLngLiteral;

  ngOnInit() {
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      // infoWindow.setPosition(position);
      // infoWindow.setContent("YO");
    })
    
    


    
  //  this.addMarker()
  }
  
  marcadores(){
    if (this._datosService.getItems().length > 0) {
      for(let i = 0; i<this._datosService.getItems().length; i++) {
        this.addMarker(this._datosService.getItems()[i].de_pago, this._datosService.getItems()[i].disabled);
        
      }
      let len = this._datosService.getItems().length;
      console.log(this._datosService.getItems().length);
      for(let i = 0; i<len; i++) {
        
        this._datosService.removeItem();
      }
      console.log(this._datosService.getItems().length);
    }
    

  }


  addMarker(de_pago:boolean, disabled:boolean) {
    
    if(disabled) {
      if (Math.random() < 0.5 ) {
        var imagen = {
          url: 'https://cdn3.iconfinder.com/data/icons/map-markers-1/512/disabled_person_parking-512.png',
          scaledSize : new google.maps.Size(50, 50),
        };
      }
      else {
        
        var imagen = {
          url: 'https://cdn2.iconfinder.com/data/icons/markers/100/Geotag_parking-512.png',
          scaledSize : new google.maps.Size(50, 50),
        };
      }
    }
    else {
        
      var imagen = {
        url: 'https://cdn2.iconfinder.com/data/icons/markers/100/Geotag_parking-512.png',
        scaledSize : new google.maps.Size(50, 50),
      };
    }
      

      

    this.markers.push({
      position: { lat: this.center.lat + (Math.random()) / 100,
                  lng: this.center.lng + (Math.random() )/ 100},
     
      title: 'Plaza ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
        icon: imagen}
      
    })
  }
  

}


