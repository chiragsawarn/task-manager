import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskCardComponent } from './view-task-card.component';

describe('ViewTaskCardComponent', () => {
  let component: ViewTaskCardComponent;
  let fixture: ComponentFixture<ViewTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
