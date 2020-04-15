import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Game, RespHttp } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  URL_SERVICIOS = environment.url;
  private juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados() {
    const url = `${ this.URL_SERVICIOS }/api/goty`;
    if ( this.juegos.length > 0 ) {
      // No hay juegos
      // console.log('Desde cache');
      return of( this.juegos );
    } else {
      // console.log('Desde Internet');
      return this.http.get<Game[]>( url )
      .pipe( tap( juegos => this.juegos = juegos ) );
    }
  }

  votarJuego( id: string ) {
    const url = `${ this.URL_SERVICIOS }/api/goty/${ id }`;
    return this.http.post<RespHttp>( url, {} )
    .pipe(
      catchError( err => {
        return of( err.error );
      })
    )
  }

}
