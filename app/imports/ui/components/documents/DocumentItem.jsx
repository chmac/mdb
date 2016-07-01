import React from 'react'
import { connect } from "react-redux"
import { removeDocument } from '/imports/api/documents/documents.methods.js'
import { actions as notifActions } from 'redux-notifications'

const { notifSend, notifClear } = notifActions

class DocumentItem extends React.Component {
  removeDocument() {
    removeDocument.call({
      _id: this.props.document._id
    }, (err, res) => {
      if (err) {
        this.props.notifSend({
          message: err.reason,
          kind: 'warning',
          dismissAfter: 3000
        })
      } else {
        this.props.notifSend({
          message: 'Deleted',
          kind: 'success',
          dismissAfter: 3000
        })
      }
    })
  }

  render() {
    const { document } = this.props
    return (
      <div className="item">
        <div className="right floated content">
          <div className="ui small red icon button"
               onClick={this.removeDocument.bind(this)}>
            <i className="delete icon"></i>
          </div>
        </div>
        {document.title}
      </div>
    )
  }
}

export default connect(null, { notifSend, notifClear })(DocumentItem)
