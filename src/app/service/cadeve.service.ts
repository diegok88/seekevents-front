import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadeve } from '../interface/cadeve.model';

@Injectable({
  providedIn: 'root'
})
export class CadeveService {
  private apiUrl = 'http://localhost:3000/cadeve';

  constructor(private http: HttpClient) { }

  createCadeve(evento: Cadeve): Observable<any> {
    return this.http.post(this.apiUrl, evento);
  }
  
  findAll(): Observable<Cadeve[]> {
    return this.http.get<Cadeve[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Cadeve> {
    return this.http.get<Cadeve>(`${this.apiUrl}/${id}`);
  }

  update(id: number, updateCadeveDto: any): Observable<Cadeve> {
    return this.http.patch<Cadeve>(`${this.apiUrl}/${id}`, updateCadeveDto);
  }

  remove(id: number): Observable<Cadeve> {
    return this.http.delete<Cadeve>(`${this.apiUrl}/${id}`);
  }
}