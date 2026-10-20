import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

//Luodaan reitit, jotka ohjaavat käyttäjän Home- ja Details-komponentteihin
const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];

//exportataan reitit, jotta ne voidaan käyttää muissa tiedostoissa
export const routes = routeConfig;
