import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { BtnType1Component } from '../btn-type-1/btn-type-1.component';
import { FooterComponent } from '../footer/footer.component';
import { BannerComponent } from '../banner/banner.component';
import { CarouselCardComponent } from "../carousel-card/carousel-card.component";
import { NgFor, CommonModule } from '@angular/common';
import { CircularCarouselCardComponent } from "../circular-carousel-card/circular-carousel-card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselComponent,
    BtnType1Component,
    FooterComponent,
    BannerComponent,
    CarouselCardComponent,
    NgFor,
    CommonModule,
    CircularCarouselCardComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  CardCarouselInitialIndex = 0;
  CardCarouselNumberOfItens = 4;
  CardIndexChange(index:number){
    this.CardCarouselInitialIndex = index;
  }

  circularCarouselInitialIndex = 0;
  circularCarouselNumberOfItens = 5;
  CircularIndexChange(index:number){
    this.circularCarouselInitialIndex = index;
  }



  banners = [
    {
      bannerSrc: '../../../assets/banner_1.jpg',
      bannerAlt: 'banner 1'
    },
    {
      bannerSrc: '../../../assets/banner_4.jpg',
      bannerAlt: 'Image 2'
    },
    {
      bannerSrc: '../../../assets/banner_3.png',
      bannerAlt: 'Image 3'
    }
  ];

  sapatos = [
    {
      imageSrc: '../../../assets/sapato_1.jpg',
      name: 'Sapato 1',
      price: 100,
      description: 'Descrição do sapato 1'
    },
    {
      imageSrc: '../../../assets/sapato_2.jpg',
      name: 'Sapato 2',
      price: 200,
      description: 'Descrição do sapato 2'
    },
    {
      imageSrc: '../../../assets/sapato_3.jpg',
      name: 'Sapato 3',
      price: 300,
      description: 'Descrição do sapato 3'
    },
    {
      imageSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },

    {
      imageSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },
    {
      imageSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },
    {
      imageSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    },
    {
      imageSrc: '../../../assets/sapato_4.jpg',
      name: 'Sapato 4',
      price: 400,
      description: 'Descrição do sapato 4'
    }
  ];

}
