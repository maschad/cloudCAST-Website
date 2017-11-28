import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPersonalRecognisersComponent } from './building-personal-recognisers.component';

describe('BuildingPersonalRecognisersComponent', () => {
  let component: BuildingPersonalRecognisersComponent;
  let fixture: ComponentFixture<BuildingPersonalRecognisersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingPersonalRecognisersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingPersonalRecognisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
