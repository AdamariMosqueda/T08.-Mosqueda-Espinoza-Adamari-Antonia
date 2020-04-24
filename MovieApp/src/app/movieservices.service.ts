import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieservicesService {
  moviedetail = {
    title: '',
    description: '',
    rated: '',
    year: '',
    imageUrl: '',
   }

  constructor(public http: HttpClient) { }

  public getMovie(Url:string){
    this.http.get(Url).subscribe((data)=>{
      this.moviedetail.title = data[ 'Title' ];
      this.moviedetail.description = data[ 'Plot' ];
      this.moviedetail.year = data[ 'Year' ];
      this.moviedetail.rated = data[ 'Rated' ];
      this.moviedetail.imageUrl = data[ 'Poster' ]
    })
    return this.moviedetail;
  }
  
}
