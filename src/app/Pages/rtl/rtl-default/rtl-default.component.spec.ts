import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlDefaultComponent } from './rtl-default.component';

describe('RtlDefaultComponent', () => {
  let component: RtlDefaultComponent;
  let fixture: ComponentFixture<RtlDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtlDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtlDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
