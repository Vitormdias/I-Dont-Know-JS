# Objects and Prototypes

## Ways to declare

* Object.create
    ```js
        var cat = Object.create(Object.prototype, {
            name: {
                value: 'Fluffy',
                writeable: false,
                enumerable: false,
                configurable: false
            }
        })
    ```
* Literal
    ```js
        var cat = {
            name: 'Fluffy'
        }
    ```

* Constructor function
    ```js
        function Cat(name) {
            this.name = name
        }

        var cat = new Cat('Fluffy')
    ```

* ES6 Classes
    ```js
        class Cat {
            constructor(name) {
                this.name = name
            }
        }

        var cat = new Cat('Fluffy')
    ```

## Properties

* When you create it always uses Object.create, no mather what way you use, 
  and you 4 props

  * Value
  * Writeable - readonly...
  * Configurable - doesn`t let you change these confs and also delete props
  * Enumerable - if false doesn't appear in a for
    ```js
      var cat = {
          name: 'Fluffy'
      }

      for(const prop in cat) console.log(prop)
    ```
     or a JSON parse, or at the keys

* Getters and Setters
    * You can create a custom function do set a prop
    ```js
        var cat = {
            name: {first: 'Fluffy', last: 'Diaz' }
        }

        Object.defineProperty(cat, 'fullName', {
            get () {
                return `${this.first} ${this.last}`
            },
            set (fullName) {
                const splitedFullName = fullName.split(' ')
                this.first = splitedFullName[0]
                this.last = splitedFullName[1]
            }
        })
    ```

## Prototypes

* A prototype is a Object that exists in every JS Function

* A Object doesn't have any, but haves a __proto__

```js
    function Cat(name) {
        this.name = name
    }

    var cat = new Cat('Fluffy')

    Cat.prototype === cat.__proto__ //true
```

* If I try to access a object prop and it doesn't find it, it will look into the __proto__

* A object __proto__ points to the current function prototype, so if I change the functions
  prototype, it won't change the existing object __proto__, but if I create a new one
  it will point to the new prototype

* Let's take a look at inheritance now

```js
    function Animal(voice) {
        this.voice = voice || 'Heey'
    }

    Animal.prototype.speak = function() { console.log(this.voice) }

    function Cat(name) {
        Animal.call(this, 'Meow')
        this.name = name
    }

    Cat.prototype = Object.create(Animal.prototype)
    Cat.prototype.constructor = Cat

    var cat = new Cat('Fluffy')

    cat.speak() //Meow
```

* Class like sintax

```js
class Animal {
    constructor(voice) {
        this.voice = voice || 'Heey'
    }

    speak() {
        console.log(this.voice)
    }
}


class Cat extends Animal {
    constructor(name) {
        super('Meow')
        this.name = name
    }
}

var cat = new Cat('Fluffy')

cat.speak() // Meow
```