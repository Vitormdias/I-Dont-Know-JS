//repository factory

var repoFactory = function () {
    this.getRepo = (repoType) => {
        if (repoType === 'task') {
            var taskRepo = require('./task-repo')()
            return taskRepo
        }
        if (repoType === 'user') {
            var userRepo = require('./user-repo')()
            return userRepo
        }
    }
}

export default new repoFactory