import { Component } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent {
  projects: any[] = [
    { name: 'Mot de passe', image: '../../assets/logoprojets/motdepasse.png', logoGit: '../../assets/icones/github.png', lienGit: '', logoSite: '../../assets/icones/site-web.png', lienSite: '', title:'Mot de passe', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'Canva', image: '../../assets/logoprojets/canvainterface.png', logoGit: '../../assets/icones/github.png', lienGit: '', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Canva', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'Maybar', image: '../../assets/logoprojets/maybar.png', logoGit:'../../assets/icones/github.png', lienGit: '', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Maybar', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'Social network', image: '../../assets/logoprojets/socialnetwork.png', logoGit: '../../assets/icones/github.png', lienGit: '', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Social Network', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster' },
    { name: 'Fast typing', image: '../../assets/logoprojets/socialnetwork.png', logoGit: '../../assets/icones/github.png', lienGit: '', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Fast typing', description: 'Jeu de rapidité de frappe au clavier en musique' },

  ];

  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
    "arrows": true,
    // "autoplay": false,
    // "autoplaySpeed": false
  };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() { }
  ngOnInit(): void { }
}
