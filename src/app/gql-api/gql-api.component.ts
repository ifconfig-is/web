import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gql-api',
  templateUrl: './gql-api.component.html',
  styleUrls: ['./gql-api.component.css']
})
export class GqlApiComponent implements OnInit {
  query: any;

  constructor() {}

  ngOnInit(): void {
    this.query = `query($address: String!) {
  IP(address: $address) {
    Query
    Address
  }
  GeoIP2City(address: $address) {
    City {
      Names {
        en
      }
    }
  }
}
`;
  }
}
