'use strict'

function Task(name) {
    this.name = name
    this.completed = false
}

Task.prototype = {
    complete() {
        console.log(`Completing task ${this.name}`)
        this.completed = true
    },

    save() {
        console.log(`Saving task ${this.name}`)
    }
}

//EcmaScript2015
// class Task {
//     constructor(name) {
//         this.name = name
//         this.completed = false
//     }

//     complete () {
//         console.log(`Completing task ${this.name}`)
//         this.completed = true
//     }

//     save () {
//         console.log(`Saving task ${this.name}`)
//     }
// }

var task1 = new Task('Task 1')
var task2 = new Task('Task 2')
var task3 = new Task('Task 3')
var task4 = new Task('Task 4')

task1.complete()
task2.save()
task3.save()
task4.save()
