import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  pageJson: any[] = [];
  busqueda: any;
  id: number = 5081;

  constructor(
    protected APIService: APIService
  ) { }

  ngOnInit() {
    this.APIService.getData(this.id).subscribe((data) => {
      this.pageJson = data;
    },
      (error) => {
        console.error(error);
      })
  }
}
