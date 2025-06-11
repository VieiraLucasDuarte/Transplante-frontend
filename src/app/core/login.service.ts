import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsuarioDTO } from "./interfaces/usuario.interface";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    private apiURL = 'https://localhost:7198/Usuario/';

    constructor(private http: HttpClient) { }

    validaLogin(usuario: UsuarioDTO) {
      console.log('Validando login:', usuario);
        return this.http.post(this.apiURL + 'login', usuario);
    }
}