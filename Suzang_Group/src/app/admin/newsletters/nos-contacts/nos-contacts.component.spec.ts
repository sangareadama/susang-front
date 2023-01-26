import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosContactsComponent } from './nos-contacts.component';

describe('NosContactsComponent', () => {
  let component: NosContactsComponent;
  let fixture: ComponentFixture<NosContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
