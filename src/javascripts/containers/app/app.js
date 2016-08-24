
import './App.styl';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import httpUtil from '../../utils/httpUtil';
import { addNote, deleteNote, setLoading } from '../actions';
import Notes from '../../components/notes/notes'
import Sidebar from '../../components/sidebar/sidebar'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    dispatch(fetchNotes());

    setTimeout(updateNotes, 5000);
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className="app">
        <Sidebar onAddNote={ e => this.onAddNote() }></Sidebar>
        <Notes notes={ this.state.notes } />
      </div>
    );
  }

  onAddNote() {
    this.props.dispatch(addNote());
  }

  onDeleteNote() {
    this.props.dispatch(deleteNote())
  }

  fetchNotes() {
    dispatch(setLoading(true));

    var successCallback = function (notes) {
      dispatch(setLoading(false));
      dispatch(receiveNotes(notes));
    }.bind(this);

    var failCallback = function (err) {
      dispatch(setLoading(false));
      dispatch(receiveNotes(err));
    }.bind(this);

    httpUtil.fetchNotes();
  }

  updateNotes() {
    const notes = this.props.notes;

    var successCallback = function () {
      setTimeout(updateNotes, 5000);
    }.bind(this);

    var failCallback = function () {
      setTimeout(updateNotes, 5000);
    }.bind(this);

    httpUtil.updateNotes(notes, successCallback, failCallback);
  }
};

module.exports = App;
