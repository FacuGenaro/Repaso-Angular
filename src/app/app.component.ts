import { Component, OnInit } from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MyanimelistAPiTest';
  pageJson: any[] = [];

  constructor(
    protected APIService: APIService
  ) { }

  ngOnInit() {
    this.APIService.getData().subscribe((data) => {
      this.pageJson = data;
    },
      (error) => {
        console.error(error);
      })
  }
}
