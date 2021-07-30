import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.css'],
})
export class ApiUsageComponent implements OnInit {
  isShow: boolean;
  hasError: boolean;
  data: any;
  json: any;
  jsonStr: any;

  cleanNull(obj) {
    for (let propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    /*
    this.dataService.doQuery();
    this.dataService.sharedIPData.subscribe(data => {
      this.data = data;
      if (typeof this.data.IP !== 'undefined') {
        this.isShow = true;
        if (this.data.IP == null) {
          this.hasError = true;
        } else {
          this.hasError = false;
          this.json = {
            Continent: this.data.GeoIP2City.Continent.Names.en,
            Country: this.data.GeoIP2City.Country.Names.en,
            City: this.data.GeoIP2City.City.Names.en,
            Latitude: this.data.GeoIP2City.Location.Latitude,
            Longitude: this.data.GeoIP2City.Location.Longitude,
            TimeZone: this.data.GeoIP2City.Location.TimeZone,
            IsEU: this.data.GeoIP2City.Country.IsInEuropeanUnion,
            ASN: this.data.GeoIP2ASN.AutonomousSystemNumber,
            ORG: this.data.GeoIP2ASN.AutonomousSystemOrganization
          };
          this.cleanNull(this.json);
          this.jsonStr = JSON.stringify(this.json, null, 2);
        }
      } else {
        this.isShow = false;
      }
    });
		*/
  }
}
