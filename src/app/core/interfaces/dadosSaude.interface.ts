export interface DadosSaudeDTO {
    IdPessoa: number;
    PressaoArterial: number;
    FrequenciaCardiaca: number;
    TemperaturaCorporal: number;
    SaturacaoOxigenio: number;
    Peso: number;
    Remedios: boolean;
}

export interface DadosVitais{
    Id: number;
    PressaoArterial: number;
    FrequenciaCardiaca: number;
    TemperaturaCorporal: number;
    SaturacaoOxigenio: number;
    Peso: number;
    DataHora: Date;
    IdPessoa: number;
}