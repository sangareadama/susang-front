import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationMainComponent } from './presentation-main.component';

describe('PresentationMainComponent', () => {
  let component: PresentationMainComponent;
  let fixture: ComponentFixture<PresentationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
