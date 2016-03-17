const $ = require('jquery');


//Just a pure JS function that can be called from a action.
function getTask(taskID, cb){
    $.ajax({
            type: "GET",
            url: '/WorkflowEngine.WebAPI/api/Universal/GetTask/'+ taskID,
            contentType: "application/json; charset=utf-98",
            dataType: 'json'
        })
        .done(response => {
            getJobDescription(response, cb)
        })
        .fail((error)=> {
            console.log(error);
            cb();
        })
}


//Async Example
exports.getTask = function(taskID){
    return function(dispatch){
        getTask(taskID, (task)=>{
            dispatch({
                type: 'setTask',
                value: task
            })
        })
    }
}


//Sync Example
exports.setValue = function(value){
    return{
        type: 'setValue',
        value: value
    }
}