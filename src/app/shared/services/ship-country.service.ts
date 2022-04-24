import {Injectable} from '@angular/core';
import {CrudService} from "./curd.service";
import {Country} from "../models/Country";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShipCountryService {
    get countries(): Observable<Country[]> {
        return this.curdService.getShipping('api/v1/shipping/country');
    }

    constructor(private curdService: CrudService) {
    }

}
