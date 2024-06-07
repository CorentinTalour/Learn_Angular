import {Component} from '@angular/core';
import {Nourritures} from "../shared/nourritures";

@Component({
  selector: 'app-nourriture-container',
  templateUrl: './nourriture-container.component.html',
  styleUrl: './nourriture-container.component.scss'
})
export class NourritureContainerComponent {
  public nourritures: Nourritures[] = [
    {
      nom: 'Pizza',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/280px-' +
        'Pizza_Margherita_stu_spivack.jpg',
      description: 'La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples' +
        ' à base de galette de pâte à pain, garnie principalement d\'huile d\'olive, de sauce tomate, de mozzarella' +
        ' et d\'autres ingrédients1 et cuite au four.'
    },
    {
      nom: 'Hamburger',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/280px-RedDot_Burger.jpg',
      description: 'Un hamburger, ou par aphérèse burger, est un sandwich d\'origine allemande, composé de deux pains' +
        ' de forme ronde1 (bun) généralement garnis d\'une galette de steak haché (généralement du bœuf) et de' +
        ' crudités, salade, tomate, oignon, cornichon (pickles) ainsi que de sauce.'
    },
    {
      nom: 'Hot-dog',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/280px-Hotdog_-_Evan' +
        '_Swigart.jpg',
      description: 'Un hot-dog, hotdog ou hot dog1, parfois appelé chien-chaud au Québec, est un type de sandwich' +
        ' composé d\'un pain allongé (souvent brioché) fourré d\'une saucisse cuite. La saucisse est une saucisse' +
        ' de Francfort ou une saucisse de Vienne2. Elle est accompagnée de divers ingrédients et condiments très' +
        ' variés comme de la moutarde, du ketchup, de la relish, des oignons, et toutes sortes de sauces' +
        ' (mayonnaise, barbecue, chutney…).'
    }
  ];

  public selectedNourriture: Nourritures = this.nourritures[0];

  public selectNourriture(index: number): void {
    this.selectedNourriture = this.nourritures[index];
  }
}
