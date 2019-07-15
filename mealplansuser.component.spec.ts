import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplansuserComponent } from './mealplansuser.component';

describe('MealplansuserComponent', () => {
  let component: MealplansuserComponent;
  let fixture: ComponentFixture<MealplansuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealplansuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealplansuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
