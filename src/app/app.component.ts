import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isMobile: boolean = window.innerWidth < 768;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
}
