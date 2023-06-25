import { Component } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent {
  projects: any[] = [
    { name: 'Mot de passe', image: '../../assets/logoprojets/motdepasse.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/jeu_ahmedlndy_mot_de_passe', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Mot de passe', description: 'un jeu où a tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster', technoFront: 'React , socket.io ',technoBack: ' Express, JWT , MongoDB' },
    { name: 'Canva', image: '../../assets/logoprojets/canvainterface.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/interface-canva', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Canva', description: 'Petit exercice avec canva de dessin et d\'animation ', technoFront: 'JS , HTML canva' ,technoBack: 'pas de backend' },
    { name: 'Maybar', image: '../../assets/logoprojets/maybar.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/maybar', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Maybar', description: 'site vitrine pour un bar ephemere à domicile ', technoFront: 'react , JSmail, API instagram', technoBack: 'pas de backend' },
    { name: 'Social network', image: '../../assets/logoprojets/socialnetwork.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/social-network', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Social Network', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster', technoFront: 'VueJS, Nuxt, JS', technoBack:' Express, JWT , MongoDB' },
    { name: 'Fast typing', image: '../../assets/logoprojets/socialnetwork.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/Fast_typing', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Fast typing', description: 'Jeu de rapidité de frappe au clavier en musique', technoFront: 'JS , HTML canva', technoBack: 'pas de backend' },

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
