import React from 'react'
import { connect } from "react-redux"
import { insertDocument } from '/imports/api/documents/documents.methods.js'
import { actions as notifActions } from 'redux-notifications'

const { notifSend, notifClear } = notifActions

export class DocumentForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  update(field, e) {
    this.setState({ [field]: e.target.value })
  }

  insert(e) {
    e.preventDefault()
    insertDocument.call(this.state, (err, res) => {
      if (err) {
        console.log(err)
        this.props.notifSend({
          message: err.message,
          kind: 'warning',
          dismissAfter: 3000
        })
      } else {
        this.props.notifSend({
          message: 'New document created',
          kind: 'success',
          dismissAfter: 3000
        })
      }
    })
  }

  render() {
    return (
      <form className="ui form"
            onSubmit={this.insert.bind(this)}>
        <div className="field">
          <label>Title</label>
          <input type="text"
                 onChange={this.update.bind(this, 'title')}/>
        </div>
        <input type="submit" className="ui button" title="Save"/>
      </form>
    )
  }
}

export default connect(null, { notifSend, notifClear })(DocumentForm)