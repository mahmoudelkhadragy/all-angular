import { Component, OnInit } from '@angular/core';
import { RandomPhotoService } from 'src/app/services/random-photo.service';

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.scss']
})
export class RandomPhotoComponent implements OnInit {

  photo: string;

  constructor(private randomPhotoService: RandomPhotoService) { }

  ngOnInit(): void {
    this.fetchRandomPhoto();
  }

  onGetRandomPhoto(){
    this.fetchRandomPhoto();
  }

fetchRandomPhoto(){
    this.randomPhotoService.getRandomPhoto().subscribe(res =>{
      this.photo = res;
    });
  }


}
