import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';

function isLoading(state = false, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_NOTES:
      return true;
    case ActionTypes.RECEIVE_NOTES:
      return false;
    case ActionTypes.SET_LOADING:
      return action.loading;
    default:
      return state;
  }
}

function notes(state = [], action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_NOTES:
      return action.notes;
    case ActionTypes.ADD_NOTE:
      return [ action.note, ...state ];
    case ActionTypes.DELETE_NOTE:
      return state.filter(note => {
        note.id !== action.note.id
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  isLoading,
  notes
});

export default rootReducer;