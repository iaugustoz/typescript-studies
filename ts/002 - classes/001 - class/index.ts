class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('Igor A.', 20);

console.log(person1.name);
console.log(person1.age);
