import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularCarouselCardComponent } from './circular-carousel-card.component';

describe('CircularCarouselCardComponent', () => {
  let component: CircularCarouselCardComponent;
  let fixture: ComponentFixture<CircularCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularCarouselCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
