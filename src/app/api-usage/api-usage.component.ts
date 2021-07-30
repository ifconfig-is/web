import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.css'],
})
export class ApiUsageComponent implements OnInit {
  isLoading: boolean = true;
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
    this.dataService.doQuery('');
    this.dataService.sharedIPData.subscribe((data) => {
      this.data = data;
      if (typeof this.data.ip !== 'undefined') {
        this.isLoading = false;
        this.json = {
          city: this.data.city,
          country: this.data.country,
          continent: this.data.continent,
          latitude: this.data.latitude,
          longitude: this.data.longitude,
          organization: this.data.org,
          asn: this.data.asn,
        };
        this.cleanNull(this.json);
        this.jsonStr = JSON.stringify(this.json, null, 2);
      }
    });
  }
}
