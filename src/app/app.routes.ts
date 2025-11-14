import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact/contact.component';


export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'contact' }
];
