import { Routes } from '@angular/router';
import { Page } from './page/page';

//Routes-taulukossa ovat reittioliot, jotka kuvaavat sovelluksen
//sisäisiä reittejä.
export const routes: Routes = [
  { path: '', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page/:pageId', component: Page },
];
