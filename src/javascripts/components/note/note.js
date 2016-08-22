
import './note.styl';
import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <div className="note-header">{this.props.note.header}</div>
        <textarea className="note-body" name="content" id="content" defaultValue={this.props.note.body}></textarea>

        {
          // <div className="note-footer"></div>
        }
      </div>
    );
  }
}

export default Note;
