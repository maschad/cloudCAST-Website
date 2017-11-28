import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplarsComponent } from './exemplars.component';

describe('ExemplarsComponent', () => {
  let component: ExemplarsComponent;
  let fixture: ComponentFixture<ExemplarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
