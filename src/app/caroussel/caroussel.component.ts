import { Component, OnInit, HostListener } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent {

  cardStates: boolean[] = [];

  toggleCard(index: number): void {
    this.cardStates[index] = !this.cardStates[index];
  }

  projects: any[] = [
    { name: 'Mot de passe', image: '../../assets/logoprojets/motdepasse.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/jeu_ahmedlndy_mot_de_passe', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Mot de passe', description: 'un jeu où a tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster', technoFront: 'React , socket.io ',technoBack: ' Express, JWT , MongoDB' },
    { name: 'Canva', image: '../../assets/logoprojets/canvainterface.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/interface-canva', logoSite: '../../assets/icones/site-web.png', lienSite: 'http://lesiteduscudo.com/interface', title: 'Canva', description: 'Petit exercice avec canva de dessin et d\'animation ', technoFront: 'JS , HTML canva' ,technoBack: 'pas de backend' },
    { name: 'Maybar', image: '../../assets/logoprojets/maybar.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/maybar', logoSite: '../../assets/icones/site-web.png', lienSite: 'http://lesiteduscudo.com/maybar', title: 'Maybar', description: 'site vitrine pour un bar ephemere à domicile ', technoFront: 'react , JSmail, API instagram', technoBack: 'pas de backend' },
    { name: 'Social network', image: '../../assets/logoprojets/socialnetwork.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/social-network', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Social Network', description: 'un jeu ou à tour de role les joueurs en binome doivent deviner une liste de mot sous la direction du gamemaster', technoFront: 'VueJS, Nuxt, JS', technoBack:' Express, JWT , MongoDB' },
    { name: 'Fast typing', image: '../../assets/logoprojets/type-tower-minia.png', logoGit: '../../assets/icones/github.png', lienGit: 'https://github.com/scudetti-guillaume/Fast_typing', logoSite: '../../assets/icones/site-web.png', lienSite: '', title: 'Fast typing', description: 'Jeu de rapidité de frappe au clavier en musique', technoFront: 'JS , HTML canva', technoBack: 'pas de backend' },

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
  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }
  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }
  // afterChange(e: any) {
  //   console.log('afterChange');
  // }
  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }
  // constructor() { }

  // ngOnInit() {
  //   this.checkWindowSize();
  //   window.addEventListener('resize', () => {
  //     this.checkWindowSize(); // Appel à chaque fois que la taille de la fenêtre change
  //   });
  // }
  
  // @HostListener('window:resize', ['$event'])
  // onWindowResize(event: any) {
  //   this.checkWindowSize();
    
  // }
  // private checkWindowSize() {
  
  //   const windowWidth = window.innerWidth;
  //   if (windowWidth < 986) {
  //     this.slideConfig.slidesToShow = 1;
  //   } else {
  //     this.slideConfig.slidesToShow = 2;
  //   }
  // }
}
