import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { BtnType1Component } from '../btn-type-1/btn-type-1.component';
import { FooterComponent } from '../footer/footer.component';
import { BannerComponent } from '../banner/banner.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselComponent,
    BtnType1Component,
    FooterComponent,
    BannerComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
  banners = [
    {
      bannerSrc: '../../../assets/banner_1.jpg',
      bannerAlt: 'banner 1'
    },
    {
      bannerSrc: '../../../assets/banner_2.jpg',
      bannerAlt: 'Image 2'
    },
    {
      bannerSrc: '../../../assets/banner_3.png',
      bannerAlt: 'Image 3'
    }
  ];

  sapatos = [
    {
      sapatoSrc: '../../../assets/sapato_1.jpg',
      name: 'Sapato 1',
      price: 100,
      description: 'Descrição do sapato 1'
    },
    {
      sapatoSrc: '../../../assets/sapato_2.jpg',
      name: 'Sapato 2',
      price: 200,
      description: 'Descrição do sapato 2'
    },
    {
      sapatoSrc: '../../../assets/sapato_3.jpg',
      name: 'Sapato 3',
      price: 300,
      description: 'Descrição do sapato 3'
    },
    {
      sapatoSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },

    {
      sapatoSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },
    {
      sapatoSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },
    {
      sapatoSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },
    {
      sapatoSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    }
  ];

}
