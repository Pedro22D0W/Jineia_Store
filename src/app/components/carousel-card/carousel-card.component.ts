import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss'
})
export class CarouselCardComponent {
  
@Input() imageSrc:string="";
@Input() name:string="";
@Input() description:string="";
@Input() price:number=0;

}

