import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "./_model/product";
import {environment} from "../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl: string = `${environment.HOST}/product`; //ES6  Template Strings ``;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(_ => this.log("fetched products")),
        catchError(this.handleError<Product[]>("getProducts", []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
