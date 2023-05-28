//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
const valorTotalHamburguer = valorHamburguer * quantidadeHamburguer;
const valorTotalBebida = valorBebida * quantidadeBebida;
const valorTotalPedido = valorTotalHamburguer + valorTotalBebida;

//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
const troco = valorPago - valorTotalPedido;

//TODO: Imprimir a saída no formato especificado neste desafio.
print(`O preço final do pedido é R$ ${valorTotalPedido.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`);