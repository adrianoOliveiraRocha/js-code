function ExampleClass() {
  let name = "Adriano" //private
  this.sayName = function() { // public
    console.log(name)
  }
}

let ec = new ExampleClass()
ec.sayName()
