import React from 'react'
import { removeDocument } from '/imports/api/documents/documents.methods.js'

export class DocumentItem extends React.Component {
  removeDocument() {
    removeDocument.call({
      _id: this.props.document._id
    }, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        //  TODO: Success
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