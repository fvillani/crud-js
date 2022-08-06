export class Negociacoes {
    
    constructor() {
        this._negociacoes = [];
        Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    esvazia() {
        this._negociacoes.length = 0;
    }

    paraArray() {
        //retorna uma nova referência criada com os itens de this._negociacoes
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        // Jeito antigo
        //let total = 0;
        //for (let i = 0; i < this._negociacoes.length; i++) {
        //    total += this._negociacoes[i].volume;
        //}
        //return total;

        return this._negociacoes
            .reduce((total, negociacao) => total + negociacao.volume, 0);
    }

}