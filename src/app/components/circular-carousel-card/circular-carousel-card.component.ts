import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './circular-carousel-card.component.html',
  styleUrl: './circular-carousel-card.component.scss'
})


export class CircularCarouselCardComponent {
  @Input() imageSrc:string="";

}
