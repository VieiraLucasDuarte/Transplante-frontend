import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DadosSaudeDTO, DadosVitais } from "./interfaces/dadosSaude.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DadosSaudeService {
  private apiURL = 'https://localhost:7198/DadosVitais/';

  constructor(private http: HttpClient) { }

  getDadosSaude() : Observable<Array<DadosVitais>> {
    return this.http.get<Array<DadosVitais>>(this.apiURL);
  }

  saveDadosSaude(dadosSaude: DadosSaudeDTO) {
    dadosSaude.IdPessoa = 1;
    return this.http.post(this.apiURL + 'saveDadosVitais', dadosSaude);
  }
  
}