const update = require('react-addons-update');
let initialState = [];

module.exports = function (state = initialState, action) {
    switch (action.type) {
        case 'setTask':
            return update(state, {task: {$set: action.value}})
        case 'setValue':
            return update(state, {value: {$set: action.value}})
        default:
            return state;
    }
}