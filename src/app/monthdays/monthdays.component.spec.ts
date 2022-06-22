import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthdaysComponent } from './monthdays.component';

describe('MonthdaysComponent', () => {
  let component: MonthdaysComponent;
  let fixture: ComponentFixture<MonthdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthdaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
