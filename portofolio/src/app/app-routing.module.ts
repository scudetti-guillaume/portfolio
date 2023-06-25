import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { CarousselComponent } from './caroussel/caroussel.component';
const routes: Routes = [
  { path: 'acceuil', component: AccueilComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'caroussel', component: CarousselComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
