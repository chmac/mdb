import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from "meteor/react-meteor-data"
import { Documents } from '/imports/api/documents/documents.collection.js'

class DashboardPage extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="column">
          <div className="ui header">Dashboard</div>
        </div>
      </div>
    )
  }
}

export const DashboardContainer = createContainer(() => {
  const handle = Meteor.subscribe('documents.mine')
  const documents = Documents.find().fetch()
  return {}
}, DashboardPage)