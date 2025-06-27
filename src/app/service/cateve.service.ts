import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cateve } from "../interface/cateve.model";

@Injectable({
    providedIn: 'root',
})
export class CateveService {
    private apiURL = 'http://localhost:3000/cateve';

    constructor(private http: HttpClient) { }

    listarcategoria(): Observable<Cateve[]> {
        return this.http.get<Cateve[]>(this.apiURL);
    }
}