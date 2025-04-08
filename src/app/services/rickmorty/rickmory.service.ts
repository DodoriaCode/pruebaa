import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<string[]> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character')
      .pipe(map(res => res.results.map((c: any) => c.name)));
  }
}
