class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(_name: string) {
    this._name = _name;
  }

  get age() {
    return this._age;
  }

  set age(_age: number) {
    this._age = _age;
  }

  public toEat(): string {
    return `O ${this.name} comeu comida!`;
  }
}

const person1 = new Person('Igor A.', 20);

/*
 * O código abaixo irá funcionar
 * por conta dos getters e setters
 */
console.log(person1.name); // No caso, aqui é chamado o método (get name())
