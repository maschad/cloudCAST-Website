import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyTutorComponent } from './literacy-tutor.component';

describe('LiteracyTutorComponent', () => {
  let component: LiteracyTutorComponent;
  let fixture: ComponentFixture<LiteracyTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteracyTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteracyTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
