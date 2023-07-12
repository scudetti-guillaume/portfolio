import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
mail:string ; 

  constructor(private router: Router) { 
    this.mail = 'scudetti.guillaume@proton.me';
  }
  scrollToSection(sectionId: string) {
    this.router.navigate([], { fragment: sectionId });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
