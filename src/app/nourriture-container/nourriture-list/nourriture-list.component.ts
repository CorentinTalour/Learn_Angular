import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Nourritures} from "../../shared/nourritures";

@Component({
  selector: 'app-nourriture-list',
  templateUrl: './nourriture-list.component.html',
  styleUrl: './nourriture-list.component.scss'
})
export class NourritureListComponent {
  @Input() public nourritures: Nourritures[];
  @Output() public changeNourriture: EventEmitter<number> = new EventEmitter<number>();

  public selectedNourriture(index: number): void {
    this.changeNourriture.emit(index);
  }
}
