import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtoutMainComponent } from './atout-main.component';

describe('AtoutMainComponent', () => {
  let component: AtoutMainComponent;
  let fixture: ComponentFixture<AtoutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtoutMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
