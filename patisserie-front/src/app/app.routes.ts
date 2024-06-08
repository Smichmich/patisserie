import { Routes } from '@angular/router';
import { CreateRecepieComponent } from './create-recepie/create-recepie.component';
import { RecepiesListComponent } from './recepies-list/recepies-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'createRecepie', component: CreateRecepieComponent },
    { path: 'recepies', component: RecepiesListComponent }
];
