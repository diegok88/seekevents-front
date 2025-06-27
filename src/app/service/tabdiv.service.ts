import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tabdiv } from "../interface/tabdiv.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class TabdivService {
    private apiURL = 'http://localhost:3000/tabdiv';

    constructor(private http: HttpClient) { }

    listardivulgacao(): Observable<Tabdiv[]> {
        return this.http.get<Tabdiv[]>(this.apiURL);
    }
}