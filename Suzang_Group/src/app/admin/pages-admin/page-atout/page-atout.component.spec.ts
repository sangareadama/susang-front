import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAtoutComponent } from './page-atout.component';

describe('PageAtoutComponent', () => {
  let component: PageAtoutComponent;
  let fixture: ComponentFixture<PageAtoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAtoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAtoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
