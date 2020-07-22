import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  pageJson: any[] = [];
  characterJson: any[] = [];
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

    this.APIService.getStaff(this.id).subscribe((data) => {
      this.characterJson = data;
    },
      (error) => {
        console.error(error);
      })
  }
}