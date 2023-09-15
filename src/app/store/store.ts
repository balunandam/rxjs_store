import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

interface vendorState {
    getItems: any;
    storeItems: any;
  }

  const initialState: vendorState = {
    getItems: {},
    storeItems: {}
  };

  @Injectable({
    providedIn: 'root'
  })
  export class store{
    private state$: BehaviorSubject<any> = new BehaviorSubject(initialState);
    protected get state(): any {
        return this.state$.getValue();
    }
    setState(newState: Partial<any>) {
        debugger
        this.state$.next({
            ...this.state,
            ...newState,
        });
    }
    protected select<k>(mapFn: (state: any) => k): Observable<k>{
        return this.state$.asObservable().pipe(
            map((state: any) => mapFn(state)),
            distinctUntilChanged()
        )
    }
    userAction = (Action: any) => {
        debugger
        let result: Observable<any> = new Observable();
        switch (Action) {
          case 'getList':
           result = this.select((state) => {
            return state.itemsList;  
          })
          break;      
      }
      return result;
    }
  }