import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Forpag } from "../interface/forpag.model";

@Injectable({
    providedIn: 'root',
})
export class ForpagService {
    private apiURL = 'http://localhost:3000/forpag';

    constructor(private http: HttpClient) { }

    listarpagamento(): Observable<Forpag[]> {
        return this.http.get<Forpag[]>(this.apiURL);
    }
}