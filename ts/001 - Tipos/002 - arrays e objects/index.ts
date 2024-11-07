/* =====================
    Tipos no TypeScript
   ===================== */

let names: [string, string] = ['Igor, Augusto', 'Bryan James'];
let namesWithArrayObject: Array<string> = ['Igor', 'Bryan', 'Maykon'];

console.log(`Array de strigs especificando a quantidade: ${names}`);
console.log(
  `Array de strings sem especificar a quantidade: ${namesWithArrayObject}`
);

let object: { name: string; age: number; isTaller: boolean } = {
  name: 'Igor Augusto',
  age: 20,
  isTaller: true,
};

let arrayOfObject: Array<{ name: string; age: number; isTaller: boolean }> = [
  {
    name: 'Igor Augusto',
    age: 20,
    isTaller: true,
  },
];

console.log(``);
