import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  widthLevel: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (window.innerWidth < 770) {
      this.widthLevel = 'min';
    } else if (window.innerWidth < 1340) {
      this.widthLevel = 'mid';
    } else {
      this.widthLevel = 'max';
    }
    console.log(this.widthLevel);
  }
}
