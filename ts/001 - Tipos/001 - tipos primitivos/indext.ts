/* =====================
    Tipos no TypeScript
   ===================== */

let order: string = 'Pizza Calabresa com Mussarela';
let quantityOrder: number = 5;
let deliverOrder: boolean = false;

let orderStatus: string = 'Em Preparo';

const formattedStatus = (message: string): string => {
  return `O pedido ${order} de ${quantityOrder} unidade(s) está com o status '${message}'`;
};

let value: string = formattedStatus(order);

console.log(value);
