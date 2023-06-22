import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProjetsComponent } from './projets/projets.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'acceuil', component: AccueilComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
