import { Component } from '@angular/core';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CarouselCardComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {


}
