/* =====================
    Tipos no TypeScript
   ===================== */

const error = (): never => {
  throw new Error('Algo deu errado, bro');
};

console.log(error());

const loop = (): never => {
  while (true) {
    console.log('Estou em loop!!!');
  }
};


