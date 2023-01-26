import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminSharedComponent } from './navbar-admin-shared.component';

describe('NavbarAdminSharedComponent', () => {
  let component: NavbarAdminSharedComponent;
  let fixture: ComponentFixture<NavbarAdminSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAdminSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAdminSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
