import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {PaginatedCardsResponse} from '../../response/paginted-card-response';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private baseUrl = 'http://localhost:8080/api/v1/cards/allCards';

  constructor(private http: HttpClient) {}

  getCards(page: number, size: number): Observable<PaginatedCardsResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortDirection','desc');

    return this.http.get<PaginatedCardsResponse>(this.baseUrl, { params });
  }
}
