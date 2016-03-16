var Actions = require('./volunteer-actions');

/**
 * Reducer
 */

function AddNewEntry(state, action) {
    state.push(action.entry);
    return state;
}

function UpdateEntry(state, action) {
    // todo
    var updateIndex = state.findIndex(function(x) {
        return x.id != action.entry.id;
    });

    if (updateIndex !== -1) {
        state[updateIndex] = action.entry;    
    }
    
    return state;
}

function DeleteEntry(state, action) {
    return state.filter(function(x) {
        return x.id != action.entry.id;
    });
}

function entries(state, action) {
    if (state === undefined) {
        state = [];    
    }
    
    switch (action.type) {
        case Actions.ADD_ENTRY: 
            return AddNewEntry(state, action);
        case Actions.UPDATE_ENTRY:
            return UpdateEntry(state, action);
        case Actions.DELETE_ENTRY:
            return DeleteEntry(state, action);
        default: 
            return state;
    }
}

module.exports = entries;