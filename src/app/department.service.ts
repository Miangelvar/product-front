import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "./_model/product";
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {MessageService} from "./message.service";
import {Department} from "./_model/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmentsUrl: string = `${environment.HOST}/departments`;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl)
      .pipe(
        tap(_ => this.log("fetched departments")),
        catchError(this.handleError<Department[]>("getDepartments", []))
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
    this.messageService.add(`DepartmentService: ${message}`);
  }
}
