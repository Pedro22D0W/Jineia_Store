import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';



interface banners {
  bannerSrc: string;
  bannerAlt: string;
}

@Component({
  selector: 'banner',
  standalone: true,
  imports: [
    NgFor,
    NgClass
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {



  @Input() banners: banners[] = [];
  selectedBanner: number = 0;

  ngOnInit(): void {
   //this.autoSlide();
  }

  autoSlide(): void {
   setInterval(() => {
      this.selectedBanner = (this.selectedBanner + 1) % this.banners.length;
   }, 6000);
  }

  selectBanner(index: number): void {
    this.selectedBanner = index;
  }

}
