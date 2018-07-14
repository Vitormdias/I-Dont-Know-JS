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

var UrgentTask = function(name, priority) {
    Task.call(this, name)
    this.priority = priority
}

UrgentTask.prototype = Object.create(Task.prototype)

console.log(new UrgentTask('name1', 1))