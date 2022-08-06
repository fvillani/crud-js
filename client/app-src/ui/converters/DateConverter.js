import { DataInvalidaException } from './DataInvalidaException';

export class DateConverter {
    //Classe statica para ser acessada por: DateConverter.paraTexto
    //Por isso um construtor com erro pra ninguem instanciar ela
    constructor() {
        throw new Error('Classe não pode ser instânciada');
    }

    static paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(texto) {
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)) {
            throw new DataInvalidaException();
        }

        return new Date(
            ...texto
            .split('/')
            .reverse()
            .map((item, indice) => item - indice % 2)
        );
    }
    
}