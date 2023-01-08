import { Component } from '@angular/core';
import { Abilities } from '../../interfaces/abilities';
import { Projects } from '../../interfaces/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  projects: Projects[] = [];
  abilities: Abilities[] = [];

  constructor () {
    this.projects = [
      { name: 'MyLeasing Angular', image: 'assets/img/angular.png', description: 'This is a project in Angular.', url: 'https://quervin.github.io/MyleasingUI/#/index', button: 'Go MyLeasing Angular' }, 
      { name: 'MyLeasing MVC', image: 'assets/img/dotnetcore.png', description: 'This is a project in MVC .Net Core.', url: 'https://myleasinghidalgo.azurewebsites.net/', button: 'Go MyLeasing MVC' }
    ];

    this.abilities = [
      { name: 'Eager to Learn', description: 'You learn new things everyday if you look in the little details.', class: 'icon novi-icon mercury-icon-calc' },
      { name: 'Team player', description: 'It is easier to resolve things when you work together with other people.', class: 'icon novi-icon mercury-icon-chart"' },
      { name: 'Open to Challenges', description: 'Everyday is a challenge to improve us a professional if you work hard.', class: 'icon novi-icon mercury-icon-time-sand' }
    ]
  }

}
