import React from 'react'
import { DocumentItem } from '/imports/ui/components/documents/DocumentItem.jsx'

export class DocumentList extends React.Component {
  renderDocuments(documents) {
    return documents.map((document) => {
      return <DocumentItem key={document._id}
                           document={document}/>
    })

  }

  render() {
    const { documents } = this.props
    return (
      <div className="ui divided list">
        {this.renderDocuments(documents)}
      </div>
    )
  }
}