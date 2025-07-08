export interface DadoSaude {
  dataColeta: string; 
  pressaoArterial: string;
  frequenciaCardiaca: string;
  temperaturaCorporal: string;
  saturacaoOxigenio: string;
  peso: string;
}

export interface DadosVitais{
    id: number;
    pressaoArterial: number;
    frequenciaCardiaca: number;
    temperaturaCorporal: number;
    saturacaoOxigenio: number;
    peso: number;
    dataColeta: Date;
    idPessoa: number;
}