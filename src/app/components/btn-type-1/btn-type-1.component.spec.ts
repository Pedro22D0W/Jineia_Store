import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnType1Component } from './btn-type-1.component';

describe('BtnType1Component', () => {
  let component: BtnType1Component;
  let fixture: ComponentFixture<BtnType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnType1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
