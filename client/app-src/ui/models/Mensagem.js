export class Mensagem {

    constructor(texto = '') {
        //Jeito antigo através de operador ternário, agora pode ser direto no construtor
        //this._texto = texto || '';
        this._texto = texto
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}