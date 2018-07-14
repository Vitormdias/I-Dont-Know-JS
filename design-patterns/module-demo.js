//taskRepository.js

export default repo = function () {
    var db = {}
    //you can have private variables here to control whatever you want

    function get(id) {
        console.log('getting task')

        return {
            name: 'new task from db'
        }
    } 

    return {
        get
    }
}
