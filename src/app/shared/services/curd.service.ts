import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../models/Country";

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    url = environment.apiUrl;
    shippingUrl = '';

    constructor(private http: HttpClient) {
    }

    post(path: any, body: any | null, options?: any): Observable<any> {
        return this.http.post(`${this.url}${path}`, body, options);
    }

     get<T>(path: any, params?: any) :Observable<T> {
        return this.http.get<T>(`${this.url}${path}`, {responseType: 'json', params});
    }

    getShipping(path: any, params?: { [param: string]: string | string[]; }): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.url}${path}`);
    }

}
