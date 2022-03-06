import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQuote } from './quote';

@Injectable({
    providedIn: 'root',
})
export class QuoteService {
    constructor(private http: HttpClient) { }

    getQoutes(): Observable<IQuote[]> {
        return this.http.get<IQuote[]>('https://type.fit/api/quotes');
    }
}
