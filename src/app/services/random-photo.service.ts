import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

const AccessKey = 'B2zCH2WcQ2YLwf4TguoiYHcy9keuPWERqI41G6D-vU0';
interface RandomPhoto{
  urls: {
    small:string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class RandomPhotoService {

  baseUrl = 'https://api.unsplash.com'

  constructor(private http: HttpClient) { }

  getRandomPhoto(){
    return this.http.get<RandomPhoto>(`${this.baseUrl}/photos/random`, {
      headers:{
        Authorization: `Client-ID ${AccessKey}`
      }
    }).pipe(pluck('urls', 'small'));
  }

}
