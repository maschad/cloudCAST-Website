import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyToolsComponent } from './therapy-tools.component';

describe('TherapyToolsComponent', () => {
  let component: TherapyToolsComponent;
  let fixture: ComponentFixture<TherapyToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapyToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
