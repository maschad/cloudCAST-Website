import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx'
import {Observer} from 'rxjs/Observer'
@Injectable()
export class SharedService {
  globalVar:string;
  globalVarUpdate:Observable<string>;
  globalVarObserver:Observer<string>;

  constructor() {
    this.globalVarUpdate = Observable.create((observer:Observer<string>) => {
      this.globalVarObserver = observer;
    });
  }

  updateGlobalVar(newValue:string) {
    this.globalVar = newValue;
    this.globalVarObserver.next(this.globalVar);
  }
}
