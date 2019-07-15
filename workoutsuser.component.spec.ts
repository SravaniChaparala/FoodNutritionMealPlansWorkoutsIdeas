import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsuserComponent } from './workoutsuser.component';

describe('WorkoutsuserComponent', () => {
  let component: WorkoutsuserComponent;
  let fixture: ComponentFixture<WorkoutsuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutsuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
