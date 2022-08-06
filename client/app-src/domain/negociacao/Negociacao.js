import { obrigatorio } from "../../util";

export class Negociacao  {

    //Object assign cria um novo objeto com base nas propriedades passadas ou seja:
    //vai criar this._quantidade e this._valor
    constructor(
        _data = obrigatorio('data'), 
        _quantidade = obrigatorio('quantidade'),
        _valor = obrigatorio('valor')
    ) {
        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime()),
        //deixa uma variável imutável
        Object.freeze(this);
    }

    //getter podendo ser acessado por exemplo: variavel.volume
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    equals(negociacao) {
        return JSON.stringify(this) == JSON.stringify(negociacao);
    }
    
}