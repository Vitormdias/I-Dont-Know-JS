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

### Module Pattern

* Simple way to encapsulate methods

* Creates a "Toolbox" of functions to use

* One of the differrences of it towords the Constructor is that you
  will have only one instance

### Factory Pattern

* Used to simplify the object creational

* Creating different objects based on needs

* Repository creation

### Singleton Pattern

* Single instance across the application

* Remembers the last time you used it

* Hands you back the same instance

* Just check for the instance and create or return it (ps: don't have to use because CommonJS)

* If you export the function that return the object it won't do nothing, but if you
  export the execution of the function it will cache the requires, very common in packages

## Structural

* Concerned with how objects are made up and simplify relations between objects

* Deal with relationships

* Extend functionality

* Simplify functionality

### Decorator Pattern

* Used to add a new functionality to an existing object, without being obtrusive

* More complete inheritance

* Wraps a object

* Protect the existing object

* Allows extended functionality


### Façade Pattern

* Used to provide a simplified interface to a complicated system

* ex: JQuery 

* The front of a building 

* Facade hides the chaos from us

* Simplifies the interface 

### Flyweight

* Conserves memory by sharing positions of an object between objects

* Shares data across objects

* Results in a smaller memory footprint
    * Excelent in mobile

* But only if you have a large number of objects

* Better with complex objects

## Behavioral Patterns

* Concerned with the assignment of responsabilities between objects and how they comunicate

### Observer Pattern

* Allows a collection of objects to watch an object and be notified of changes 

* Allows for loosely coupled system

* One object is the focal point

* Group of objects watch for changes

### Mediator Pattern 

* Controls the communication between objects so neither object has to be coupled to the others

* Allows for loosely coupled system

* One object manages all the communication

* Many to many relationships

### Command Pattern

* Encapsulates the calling of a method as an object

* Fully decouples the execution from the implementation

* Allows for less fragile implementations

* Support undo operations

* Supports auditing and log of operations

* Creates an execute function