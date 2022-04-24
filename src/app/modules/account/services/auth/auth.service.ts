import {Injectable} from '@angular/core';
import {CrudService} from "../../../../shared/services/curd.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private crudService: CrudService) {
    }

    register(param: any): Observable<any> {
        return this.crudService.post('api/v1/customer/register', param)
    }
}
