import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, BehaviorSubject, Observable, of, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //headers = new HttpHeaders({ withCredentials: 'true' });
  headers = new HttpHeaders();

  query = new BehaviorSubject('');
  sharedQuery = this.query.asObservable();
  ipData = new BehaviorSubject({});
  sharedIPData = this.ipData.asObservable();

  nextQuery(query: string) {
    this.query.next(query);
    this.doQuery(query);
  }

  nextIPData(ipData: any) {
    this.ipData.next(ipData);
  }

  doQuery(query: string): Observable<any> {
    let url;
    if (query == '') {
      url = environment.apiUrl;
    } else {
      url = environment.apiUrl + '/' + query;
    }
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err) => of(err.error))
    );
  }

  constructor(private http: HttpClient) {}
}
