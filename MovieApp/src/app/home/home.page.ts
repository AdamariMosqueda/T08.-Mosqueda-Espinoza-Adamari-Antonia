import { Movie } from './movie.module';
import { MovieservicesService } from './../movieservices.service';
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mov:Movie;
  Url='http://www.omdbapi.com/?apikey=4d9d0ef7&t=';
  constructor(private movie:MovieservicesService){
   
  }

  movieTitle='';
  ngOnInit(){
    this.searchMovie();
    }
    searchMovie(){
      const search=encodeURIComponent(this.movieTitle).trim();
      this.mov=this.movie.getMovie(this.Url+search);
      }
}
