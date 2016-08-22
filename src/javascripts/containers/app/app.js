
import './App.styl';
import React from 'react';
import Notes from '../../components/notes/notes'
import Sidebar from '../../components/sidebar/sidebar'

var notes = [
  {
    header: 'note 1',
    body: 'I am a note',
    id: '1'
  },
  {
    header: 'note 2',
    body: 'I am a note',
    id: '2'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: notes
    }
  }

  render() {
    return (
      <div className="app">
        <Sidebar onAddNote={ e=>this.onAddNote() }></Sidebar>
        <Notes notes={ this.state.notes } />
      </div>
    );
  }

  onAddNote() {
    var newNote =   {
      header: `note ${this.state.notes.length + 1}`,
      body: 'I am a note',
      id: this.state.notes.length + 1
    };

    this.setState({
      notes:  [ newNote, ...this.state.notes ]
    });
  }
};

module.exports = App;
