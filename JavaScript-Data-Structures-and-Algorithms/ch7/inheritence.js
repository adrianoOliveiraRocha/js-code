// Animal
function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
}
Animal.prototype.sayName = function () {
  console.log(this.name);
}
Animal.prototype.sayAnimalType = function () {
  console.log(this.animalType);
}
// Dog
function Dog(name) {
  Animal.call(this, name, "Dog")
}
Dog.prototype = Object.create(Animal.prototype)
// end classes

let animal1 = new Animal("Alessandro", "Pokemon")
animal1.sayName(); animal1.sayAnimalType();

let toto = new Dog("Totó");
toto.sayName(); toto.sayAnimalType();