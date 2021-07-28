import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  query = new BehaviorSubject('');
  sharedQuery = this.query.asObservable();
  ipData = new BehaviorSubject({});
  sharedIPData = this.ipData.asObservable();

  nextQuery(query: string) {
    this.query.next(query);
    this.doQuery();
  }

  nextIPData(ipData: any) {
    this.ipData.next(ipData);
  }

  doQuery() {}

  constructor() {}
}
