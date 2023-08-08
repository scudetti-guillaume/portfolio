import { Component, OnInit, HostListener } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent {

  toggleCard(index: number): void {
    this.projects[index].flipped = !this.projects[index].flipped;
  }

  projects: any[] = [
    { name: 'Mot de passe', image: '../../assets/logoprojets/motdepasse.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/mot_de_passe_online', logoSite: '../../assets/icones/site-web.png', lienSite: 'https://lesiteduscudo.com/mdp', title: 'Mot de passe', description: 'un jeu où à tour de rôle les joueurs en binôme doivent deviner une liste de mots sous la direction du gamemaster', technoFront: 'React , socket.io ', technoBack: ' Express, JWT , MongoDB', flipped: false },
    { name: 'Canva', image: '../../assets/logoprojets/canvainterface.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/interface-canva', logoSite: '../../assets/icones/site-web.png', lienSite: 'https://lesiteduscudo.com/interface', title: 'Canva', description: 'Petit exercice avec canva de dessin et d\'animation ', technoFront: 'JS , HTML canva', technoBack: 'pas de backend', flipped: false },
    { name: 'Maybar', image: '../../assets/logoprojets/maybar.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/maybar', logoSite: '../../assets/icones/site-web.png', lienSite: 'https://lesiteduscudo.com/maybar', title: 'Maybar', description: 'site vitrine pour un bar éphémère à domicile ', technoFront: 'react , JSmail, API instagram', technoBack: 'pas de backend', flipped: false },
    { name: 'Social network', image: '../../assets/logoprojets/socialnetwork.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/social-network', logoSite: '../../assets/icones/site-web.png', lienSite: 'https://lesiteduscudo.com/soc', title: 'Social Network', description: 'un réseau social interne pour une entreprise où seul les employé(e)s ont accées et peuvent échanger dessus', description2: 'lire le README pour un accée admin', technoFront: 'VueJS, Nuxt, JS', technoBack: ' Express, JWT , MongoDB', flipped: false },
    { name: 'Social network free access', image: '../../assets/logoprojets/socialnetworkfreeaccess.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/social-network_free_access', logoSite: '../../assets/icones/site-web.png', lienSite: 'https://lesiteduscudo.com/soc_free', title: 'Social Network Free', description: 'un réseau social en accée libre' , description2: 'lire le README pour un accée admin', technoFront: 'VueJS, Nuxt, JS', technoBack: ' Express, JWT , MongoDB', flipped: false },
    { name: 'Fast typing', image: '../../assets/logoprojets/type-tower-minia.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/Fast_typing', logoSite: '../../assets/icones/site-web.png', lienSite: 'https://lesiteduscudo.com/fast_typing', title: 'Fast typing', description: 'Jeu de rapidité de frappe au clavier en musique', technoFront: 'JS , HTML canva', technoBack: 'NodeJS, Mongo DB', flipped: false },

  ];

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

}
