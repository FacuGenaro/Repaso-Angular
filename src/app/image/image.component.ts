import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  title = 'MyanimelistAPiTest';
  pageJson: any[] = [];
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