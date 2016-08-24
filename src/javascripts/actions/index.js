
import shortid from 'shortid';

var requestRoot = '';

export const ActionTypes = {
  REQUEST_NOTES: 'REQUEST_NOTES',
  RECEIVE_NOTES: 'RECEIVE_NOTES',

  REQUEST_UPDATE_NOTES: 'REQUEST_UPDATE_NOTES',
  RECEIVE_UPDATE_NOTES: 'RECEIVE_UPDATE_NOTES',

  ADD_NOTE: 'ADD_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',

  SET_LOADING: 'SET_LOADING'
};

export function addNote() {
  var createTime = new Date();
  return {
    type: ActionTypes.ADD_NOTE,
    note: {
      id: shortid.generate(),
      userId: shortid.generate(),
      createTime: createTime.getTime(),
      header: createTime.toDateString(),
      body: ''
    }
  }
}

export function deleteNote(note) {
  return {
    type: ActionTypes.DELETE_NOTE,
    note
  }
}

function receiveNotes(notes) {
  return {
    type: ActionTypes.RECEIVE_NOTES,
    notes
  }
}

export function setLoading(loading) {
  return {
    type: ActionTypes.SET_LOADING,
    loading: loading
  }
}