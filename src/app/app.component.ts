import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MapMarker, GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit{
  title = 'EntregableP2';
  center = {lat: 24, lng: 12};
  zoom = 15;
  display?: google.maps.LatLngLiteral;

  ngOnInit() {
    
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      // this.map = new google.maps.Map(document.getElementById('map'),{})


    })
  }
  markers:  any[] = [];
  // private map: google.maps.Map


  addMarker() {
    this.markers.push({
      position: { lat: this.center.lat + (Math.random()) / 100,
                  lng: this.center.lng + (Math.random() )/ 100},
      label: {
       color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
    })
  }
  

}
