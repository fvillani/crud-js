import { Negociacao } from './Negociacao';

export class NegociacaoDao {

    constructor(connection) {

        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {

        return new Promise((resolve, reject) => {

            const request = this._connection
                .transaction([this._store],'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível salvae a negociação');
            };

        });
    }

    apagaTodos() {

        return new Promise((resolve, reject) => {

            const request = this._connection
                .transaction([this._store],'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível apagar as negociações');
            };

        });
    }

    listaTodos() {

        return new Promise((resolve, reject) => {

            const negociacoes = [];

            const cursor = this._connection
                            .transaction([this._store],'readwrite')
                            .objectStore(this._store)
                            .openCursor();

            cursor.onsuccess = e => {
                //ponteiro para a negociacao atual que esta interando
                const atual = e.target.result;
                
                if(atual) {
                    const negociacao = new Negociacao (
                        atual.value._data,
                        atual.value._quantidade,
                        atual.value._valor
                    );
                    //value guarda os dados da linha da tabela
                    negociacoes.push(negociacao);
                    //dispara o evento onsuccess novamente para ir pra próxima linha
                    atual.continue();
                } else {
                    //quando atual for null, é porque não há mais
                    resolve(negociacoes);
                }

            };

            cursor.onerror = e => {
                console.log(e.target.error.name);
                reject('Não foi possível listar as negociações');
            }

        });
    }

}