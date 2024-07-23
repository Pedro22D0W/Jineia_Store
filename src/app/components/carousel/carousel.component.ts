import { Component, Input } from '@angular/core';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';
import { NgFor,CommonModule } from '@angular/common';

interface sapato {
  sapatoSrc: string;
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
 
  @Input()sapatos: sapato[] = [];
  initialIndex:number = 0;
  numberOfItens:number = 4;

  moveLeft(){

    if(this.initialIndex - this.numberOfItens >= 0){
      this.initialIndex -= this.numberOfItens;
    }
    console.log(this.initialIndex);
  
  }

  moveRight(){
    if(this.initialIndex== 0 || (this.initialIndex+this.numberOfItens) % this.sapatos.length != 0){
      this.initialIndex +=this.numberOfItens;
    }
    console.log(this.initialIndex);
  }

}
