import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cadend } from "../interface/cadend.model";

@Injectable({
    providedIn: 'root',
})
export class CadendService {
    private apiURL = 'http://localhost:3000/cadend';

    constructor(private http: HttpClient) { }

    listarperfil(): Observable<Cadend[]> {
        return this.http.get<Cadend[]>(this.apiURL);
    }
}