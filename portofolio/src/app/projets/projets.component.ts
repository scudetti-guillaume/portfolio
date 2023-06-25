import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
 
})
export class ProjetsComponent {
  projects: any[] = [
    { name: 'MOT DE PASSE', image: '../../assets/logoprojets/motdepasse.png', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'MOT DE PASSE', image: '../../assets/logoprojets/motdepasse.png', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'MOT DE PASSE', image: '../../assets/logoprojets/motdepasse.png', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'MOT DE PASSE', image: '../../assets/logoprojets/motdepasse.png', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'Projet 2', image: 'chemin_vers_image2.jpg', description: 'Description du projet 2' },
    // Ajoutez d'autres projets ici
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 4,
    "dots": true,
   "arrows": true,
    // "autoplay": true,
    // "autoplaySpeed": 3000
  };
}
