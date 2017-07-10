import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Observable} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";

describe('AppComponent', () => {

let app: AppComponent;
let fixture: ComponentFixture<AppComponent>;

class RouterStub {
    navigate(params) {

    }
}

class ActivatedRouteStub {
    params: Observable<any> = Observable.empty();
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
        providers: [
            {provide: Router, useClass: RouterStub },
            {provide: ActivatedRoute, useClass: ActivatedRouteStub }
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Cloudcast'`, async(() => {
    expect(app.title).toEqual('Cloudcast');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Cloudcast!');
  }));

  it('should be the default route', async(() => {
      let router = TestBed.get(Router);

  }));
});
