# Design Patterns

* "... each pattern represents our current best guess as what arrangement
   of the physical enviroment will work to solve the problem presented"
    Christopher Alexander

* Whe center on the problems and create a solution

* Definition
    * It solves a problem
    * It's a proven concept
    * The solution is not obvious
    * It describes a relationship
    * It has a significant human component

* Types
    * Creational
        * Constructor
        * Module
        * Factory
        * Singleton
    * Structural
        * Decorator
        * Façade
        * Flyweight
    * Behavioral
        * Command
        * Mediator
        * Observer 

* ps: these are only the most used in JS

## Creational

* Construct new objects
* Adapting creation to the situation

### Constructor Pattern

* Use to create new objects with thei own object scope

* A little different in JS

* The **new** keyword
    * Creates a new object
    * Links to an object a prototype
    * Binds **this** to the new scope
    * Implicity returns **this**

```js
function ObjectName (param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
}

var obj = new ObjectName('1','2')
``` 