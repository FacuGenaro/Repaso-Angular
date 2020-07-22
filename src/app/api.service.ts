import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  constructor(protected http: HttpClient) { }

  getData(id: number){
    return this.http.get('https://api.jikan.moe/v3/anime/' + id);
  }

  getStaff(id: number){
    return this.http.get('https://api.jikan.moe/v3/anime/' + id + '/characters_staff');
  }

  search(data: object){
    return this.http.get('https://api.jikan.moe/v3/search/anime?q=' + data);
  }
}
