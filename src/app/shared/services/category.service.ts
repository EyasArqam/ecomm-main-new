import {Injectable} from '@angular/core';
import {CrudService} from "./curd.service";
import {NavigationLink} from "../interfaces/navigation-link";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private curdService: CrudService) {
    }


    public getCategories(): Observable<NavigationLink[]> {
        return this.curdService.get<NavigationLink[]>('api/v1/web/category');
    }

}
