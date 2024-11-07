/**
 * Public => Pode ser acessada de qualquer lugar
 * Protected => Pode ser acessada pela própria classe e pelas classes filhas
 * Private => Pode ser acessada somente na própria classe
 */

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public toEat(): string {
    return `O ${this.name} comeu comida!`;
  }
}

const person1 = new Person('Igor A.', 20);

/* 
O código abaixo não funcionará por conta 
do modificador de acesso dos atributos

console.log(person1.name);
console.log(person1.age); 
*/
