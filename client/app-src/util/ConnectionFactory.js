const stores = ['negociacoes'];

let connection = null;

let close = null;

export class ConnectionFactory {

    constructor() {
        throw new Error('Não é possível instanciar essa classe');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {

            //Se já existir retorna a que tem
            if(connection) return resolve(connection);

            const openRequest = indexedDB.open("jscangaceiro", 2);

            openRequest.onupgradeneeded = e => {

                ConnectionFactory._createStores(e.target.result);

            };

            openRequest.onsuccess = e => {

                connection = e.target.result;

                //Guarda a função original de fechamento
                close = connection.close.bind(connection);

                connection.close = () => {
                    throw new Error('Não pode fechar diretamente a conexão');
                }
                resolve(connection);

            }

            openRequest.onerror = e => {
            
                console.log(e.target.result);
                reject(e.target.result.name);

            }

        });
    }

    static _createStores(connection) {

        stores.forEach(store => {
            if(connection.objectStoreNames.contains(store)) {
                connection.deleteObjectStore(store);
            }

            connection.createObjectStore(store, {
                autoIncrement: true
            });
        });

    }

    static closeConnection() {
        if(connection) {
            close();
        }
    }

}