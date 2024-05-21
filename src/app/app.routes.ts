import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateHousingLocationComponent } from './create-housing-location/create-housing-location.component';
import { ProspectusComponent } from './prospectus/prospectus.component';
import { CustomerComponent } from './customer/customer.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { MainComponent } from './main/main.component';
export const routeConfig: Routes = [ 
   {
    path: 'home',
    component: HomeComponent,
    title: 'Home page',

  },
  {
    path: '',
    component: MainComponent,
    title: 'Publicaciones',

  },
  {
    path: 'createpublication',
    component: CreatePublicationComponent,
    title: 'Crear publicación',

  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'create',
    component: CreateHousingLocationComponent,
    title: 'Create housing location'
  },
  {
    path: 'seguimiento',
    component: ProspectusComponent,
    title: 'Seguimiento'
  } ,
  {
    path: 'customer',
    component: CustomerComponent,
    title: 'Cliente'
  }];
  export default routeConfig;
