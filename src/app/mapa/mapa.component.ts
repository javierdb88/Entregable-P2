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

  len:number = this._datosService.getItems().length;
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
    
    
    console.log(this.markers);
    

    
  //  this.addMarker()
  }
  
  marcadores(){
    if (this._datosService.getItems().length > 0) {
      for(let i = 0; i<this._datosService.getItems().length; i++) {
        this.addMarker(this._datosService.getItems()[i].de_pago, this._datosService.getItems()[i].disabled);
        
      }
      
      
      for(let i = 0; i<this.len; i++) {
        
        this._datosService.removeItem();
      }
      
    }
    

  }

  //http://pngimg.com/uploads/parking/parking_PNG36.png
  addMarker(de_pago:boolean, disabled:boolean) {
    if(de_pago) {
      if (Math.random() < 0.3 ) {
        var imagen = {
          url: 'http://pngimg.com/uploads/parking/parking_PNG36.png',
          scaledSize : new google.maps.Size(50, 50),
        
        };
      }
      else {
        var imagen = {
          url: 'https://cdn2.iconfinder.com/data/icons/markers/100/Geotag_parking-512.png',
          scaledSize : new google.maps.Size(50, 50),
        };
      }

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
    }
    else {
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
    }
    
      
    var localizacion = {
      url: 'https://cdn3.iconfinder.com/data/icons/map-14/144/Map-10-512.png',
      scaledSize : new google.maps.Size(50, 50),
    };

    this.markers.push({
      position: { lat: this.center.lat,
                  lng: this.center.lng },
      // label: {
      //  color: 'red',
      //   text: 'Marker label ' + (this.markers.length + 1),
      // },
      // title: 'Marker title ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
        icon: localizacion},
        
    })
    

    this.markers.push({
      position: { lat: this.center.lat + (Math.random()) / 200,
                  lng: this.center.lng + (Math.random() )/ 200},
     
      title: 'Plaza ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
        icon: imagen}
      
    })
  }
  

}


