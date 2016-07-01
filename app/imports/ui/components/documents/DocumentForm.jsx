import React from 'react'

export class DocumentForm extends React.Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input type="text"/>
        </div>
        <div className="ui button">Save</div>
      </form>
    )
  }
}