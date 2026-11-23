import { Routes } from '@angular/router';
import { Calculator } from './calculator/calculator';
import { Calculator2 } from './calculator2/calculator2';

// reittitaulukko
export const routes: Routes = [
  { path: '', redirectTo: '/newprice', pathMatch: 'full' },
  { path: 'newprice', component: Calculator },
  { path: 'inflapercent', component: Calculator2 },
];
