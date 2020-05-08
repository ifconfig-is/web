import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ip-box',
  templateUrl: './ip-box.component.html',
  styleUrls: ['./ip-box.component.css']
})
export class IpBoxComponent implements OnInit {
  isMobile: boolean = window.innerWidth < 768;
  data: any;
  isShow: boolean;
  hasError: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.doQuery();
    this.dataService.sharedIPData.subscribe(data => {
      this.data = data;
      if (typeof this.data.IP !== 'undefined') {
        this.isShow = true;
        if (this.data.IP == null) {
          this.hasError = true;
        } else {
          this.hasError = false;
        }
      } else {
        this.isShow = false;
      }
    });
  }
}
