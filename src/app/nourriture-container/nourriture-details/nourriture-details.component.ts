import {Component, Input} from '@angular/core';
import {Nourritures} from "../../shared/nourritures";

@Component({
  selector: 'app-nourriture-details',
  templateUrl: './nourriture-details.component.html',
  styleUrl: './nourriture-details.component.scss'
})
export class NourritureDetailsComponent {
  @Input() public nourriture!: Nourritures;
  @Input() public nourritures!: Nourritures;
}
