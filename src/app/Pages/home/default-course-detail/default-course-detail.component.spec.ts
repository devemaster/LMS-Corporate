import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCourseDetailComponent } from './default-course-detail.component';

describe('DefaultCourseDetailComponent', () => {
  let component: DefaultCourseDetailComponent;
  let fixture: ComponentFixture<DefaultCourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCourseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
