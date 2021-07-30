import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ip-data',
  templateUrl: './ip-data.component.html',
  styleUrls: ['./ip-data.component.css'],
})
export class IpDataComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.doQuery().subscribe((data) => {
      this.data = data;
    });
  }
}
