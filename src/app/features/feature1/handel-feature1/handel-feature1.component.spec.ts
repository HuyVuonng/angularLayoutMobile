import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelFeature1Component } from './handel-feature1.component';

describe('HandelFeature1Component', () => {
  let component: HandelFeature1Component;
  let fixture: ComponentFixture<HandelFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandelFeature1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandelFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
