import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceItemComponent } from './page-service-item.component';

describe('PageServiceItemComponent', () => {
  let component: PageServiceItemComponent;
  let fixture: ComponentFixture<PageServiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageServiceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
