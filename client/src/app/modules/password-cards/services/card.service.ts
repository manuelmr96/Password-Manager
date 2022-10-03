import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private html: HttpClient) { }

  list(){
    return this.html.get(`${environment.apiUrl}password-cards`)
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  listFilterByName(name: string) {
    return this.html.get(`${environment.apiUrl}password-cards/filter?name=${name}`)
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  save(card: Card, index: number = -1){
    if (index === -1){
      return this.create(card);
    } else {
      return this.update(card);
    }
  }

  create(card: Card){
    return this.html.post(
      `${environment.apiUrl}password-cards`,
      card
    )
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  update(card: Card){
    console.log(card);
    return this.html.patch(
      `${environment.apiUrl}password-cards/${card.id}`,
      card
    )
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  delete(index){
    return this.html.delete(`${environment.apiUrl}password-cards/${index}`)
    .pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

}
