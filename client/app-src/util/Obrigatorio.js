export function obrigatorio(parametro) {
    throw new Error (`${parametro} é obrigatório`);
}