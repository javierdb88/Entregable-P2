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
  // center = {lat: 24, lng: 12};
  // zoom = 15;
  // display?: google.maps.LatLngLiteral;

  ngOnInit() {
    
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   }
    // })
  //  this.addMarker()
  }
  // markers:  any[] = [];

  // addMarker() {
  //   if (Math.random() < 0.25 ) {
  //     var imagen = {
  //       url: 'https://cdn3.iconfinder.com/data/icons/map-markers-1/512/disabled_person_parking-512.png',
  //       scaledSize : new google.maps.Size(50, 50),
  //     };
  //   }

  //     else {
        
  //       var imagen = {
  //         url: 'https://cdn2.iconfinder.com/data/icons/markers/100/Geotag_parking-512.png',
  //         scaledSize : new google.maps.Size(50, 50),
  //       };
  //     }

  //   this.markers.push({
  //     position: { lat: this.center.lat + (Math.random()) / 100,
  //                 lng: this.center.lng + (Math.random() )/ 100},
  //     label: {
  //      color: 'red',
  //       text: 'Marker label ' + (this.markers.length + 1),
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.DROP,
  //       icon: imagen}
      
  //   })
  // }
  

}
