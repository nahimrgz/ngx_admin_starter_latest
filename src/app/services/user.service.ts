import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NumberAvailable } from '../interfaces/numberAvailable.interface';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  URL_SERVICIOS: string;

  constructor(private httpClient: HttpClient) {
    this.URL_SERVICIOS = environment.URL_SERVICIOS;
  }

  getNumbersAvailable() {
    return this.httpClient.get<NumberAvailable[]>(this.URL_SERVICIOS + `/numbers_available`)
      .pipe(
        catchError(this.handleError),
      );
  }

  putNumbersAvailable(body: any) {
    return this.httpClient.put(this.URL_SERVICIOS + `/numbers_available`, body)
      .pipe(
        catchError(this.handleError),
      );
  }

  getCantOcupados() {
    return this.httpClient.get(this.URL_SERVICIOS + `/numbers_available/ocupados`)
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `message was: ${error.error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Ocurrio un error, Por favor intentalo nuevamente más tarde');
  }
}
