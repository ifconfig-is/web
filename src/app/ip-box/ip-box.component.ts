import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ip-box',
  templateUrl: './ip-box.component.html',
  styleUrls: ['./ip-box.component.css'],
})
export class IpBoxComponent implements OnInit {
  isMobile: boolean = window.innerWidth < 768;
  data: any;
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.doQuery('').subscribe((data) => {
      this.data = data;
      if (typeof this.data.ip !== 'undefined') {
        this.isLoading = false;
      }
    });
  }
}
