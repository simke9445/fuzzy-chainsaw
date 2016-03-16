/**
 * Default actions
 */

var ADD_ENTRY = 0;
var DELETE_ENTRY = 1;
var UPDATE_ENTRY = 2;

/**
 * Action creators
 */

function AddNewEntryAction(data) {
    return {
        type: ADD_ENTRY,
        entry: data
    }
}

function DeleteEntryAction(data) {
    return {
        type: DELETE_ENTRY,
        entry: {
            id: data.id
        }
    }
}

function UpdateEntryAction(data) {
    return {
        type: UPDATE_ENTRY,
        entry: data
    }
}

/*
 *Action logic
 */

/**
 * @description
 * Returns action for given Rethink db update on table
 */
function getAction(data) {
    if (data.new_val === null) {
        return DeleteEntryAction(data.old_val);    
    } else if (data.old_val === null) {
        return AddNewEntryAction(data.new_val);
    } else {
        return UpdateEntryAction(data.new_val);
    }
}

// we only export getAction, because this actions are database driven
// and correct action can be fully generated by data    
module.exports = {
    getAction,
    ADD_ENTRY,
    DELETE_ENTRY,
    UPDATE_ENTRY
};