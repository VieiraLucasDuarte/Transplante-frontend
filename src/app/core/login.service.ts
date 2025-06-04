import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    private apiURL = 'https://localhost:7198/Usuario/';

    constructor(private http: HttpClient) { }

    validaLogin() {
        return this.http.post(this.apiURL + 'login', '')
    }
}