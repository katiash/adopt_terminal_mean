import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPetComponent } from './reg-pet.component';

describe('RegPetComponent', () => {
  let component: RegPetComponent;
  let fixture: ComponentFixture<RegPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
