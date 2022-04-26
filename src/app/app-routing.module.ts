import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
{
  path: '',
  component: LoginComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'mapa',
  component: MapaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
