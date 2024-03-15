import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelFeature2Component } from './handel-feature2.component';

describe('HandelFeature2Component', () => {
  let component: HandelFeature2Component;
  let fixture: ComponentFixture<HandelFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandelFeature2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandelFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
