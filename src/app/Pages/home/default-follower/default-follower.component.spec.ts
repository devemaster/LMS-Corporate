import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFollowerComponent } from './default-follower.component';

describe('DefaultFollowerComponent', () => {
  let component: DefaultFollowerComponent;
  let fixture: ComponentFixture<DefaultFollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultFollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
