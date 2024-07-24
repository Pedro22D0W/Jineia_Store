import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';
import { NgFor, CommonModule } from '@angular/common';

interface item {
  imageSrc: string;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CarouselCardComponent,
    NgFor,
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input() items: item[] = [];
  @Input() initialIndex: number = 0;
  @Input() numberOfItens: number = 4;

  @Output() newInitialIndex = new EventEmitter<number>();


  moveLeft() {

    if (this.initialIndex - this.numberOfItens >= 0) {
      this.initialIndex -= this.numberOfItens;
    }
    else {
      this.initialIndex = this.items.length - this.numberOfItens;
    }
    this.newInitialIndex.emit(this.initialIndex);
  }

  moveRight() {
    if (this.initialIndex == 0 || this.initialIndex + this.numberOfItens < this.items.length) {
      this.initialIndex += this.numberOfItens;
    }
    else {
      this.initialIndex = 0;
    }
    this.newInitialIndex.emit(this.initialIndex);
  }
}
