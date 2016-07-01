import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from "meteor/react-meteor-data"
import { Documents } from '/imports/api/documents/documents.collection.js'
import { DocumentList } from '/imports/ui/components/documents/DocumentList.jsx'
import  DocumentForm  from '/imports/ui/components/documents/DocumentForm.jsx'

class DashboardPage extends React.Component {
  render() {
    const { documents }=this.props
    return (
      <div className="ui grid">
        <div className="column">
          <div className="ui header">Dashboard</div>
          <div className="ui segment">
            <DocumentForm/>
          </div>
          <DocumentList documents={documents}/>
        </div>
      </div>
    )
  }
}

export const DashboardContainer = createContainer(() => {
  const handle = Meteor.subscribe('documents.mine')
  const documents = Documents.find().fetch()
  return {
    documents: documents
  }
}, DashboardPage)