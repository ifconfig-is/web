import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const GET_DATA = gql`
  query($address: String!) {
    IP(address: $address) {
      Query
      Address
    }
    GeoIP2ASN(address: $address) {
      AutonomousSystemNumber
      AutonomousSystemOrganization
    }
    GeoIP2City(address: $address) {
      City {
        Names {
          en
        }
      }
      Country {
        IsInEuropeanUnion
        IsoCode
        Names {
          en
        }
      }
      Continent {
        Code
        Names {
          en
        }
      }
      Location {
        Latitude
        Longitude
        TimeZone
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
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

  doQuery() {
    this.apollo
      .watchQuery({
        query: GET_DATA,
        variables: {
          address: this.query.getValue()
        }
      })
      .valueChanges.subscribe(res => {
        this.nextIPData(res.data);
      });
  }

  constructor(private apollo: Apollo) {}
}
