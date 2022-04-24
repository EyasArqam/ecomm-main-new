import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {ShipCountryService} from "../../../../shared/services/ship-country.service";
import {Country} from "../../../../shared/models/Country";

@Component({
    selector: 'app-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
    countries!: Country[];
    newUser = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
        code: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        state: ''
    };
    errorMessage: string = '';
    successMessage: string = '';

    constructor(private authService: AuthService, private shipCountryService: ShipCountryService) {
    }

    onSubmit() {
        let param = {
            "userName": this.newUser.email,
            "password": this.newUser.password,
            "emailAddress": this.newUser.email,
            "gender": "M",
            "language": "en",
            "billing": {
                "country": this.newUser.country,
                "stateProvince": "",
                "firstName": "ahmad",
                "lastName": "abuOmar",
            }
        }
        this.authService.register(param).subscribe(
            res => {
                console.log(res);
                this.successMessage = "You have successfully registerd in to this website.";
                this.newUser = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    repeatPassword: '',
                    name: '',
                    code: '',
                    address: '',
                    city: '',
                    postalCode: '',
                    country: '',
                    state: ''
                };
            }, error => {
                console.log(error);
                this.errorMessage = "Registering customer already exist";
            }
        );
    }

    ngOnInit(): void {
        this.shipCountryService.countries.subscribe(countries => this.countries = countries);
    }
}
