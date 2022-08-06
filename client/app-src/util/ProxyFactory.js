export class ProxyFactory {

    static create(objeto, props, callback) {
        return new Proxy (objeto, {
            get(target, prop, receiver) {
                if (
                    ProxyFactory._ehFuncao(target[prop]) && 
                    props.includes(prop)
                ) {
                    return function() {                    
                        target[prop].apply(target, arguments);
                        callback(target);
                    }
                } else {
                    return target[prop];
                }
            },
            set(target, prop, value, receiver) {
                const update = Reflect.set(target, prop, value);
                
                if (props.includes(prop)) {
                    callback(target);
                }
                
                return update;
            }
        });
    }

    static _ehFuncao(fn) {
        return typeof(fn) == typeof(Function);
    }
}