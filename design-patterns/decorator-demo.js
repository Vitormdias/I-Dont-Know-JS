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

var urgentTask = new Task('Urgent Task')
urgentTask.priority = 2
urgentTask.notify = function() {
    console.log('notifying')
}
urgentTask.save = function() {
    this.notify()
    Task.prototype.save.call(this)
}

urgentTask.save()