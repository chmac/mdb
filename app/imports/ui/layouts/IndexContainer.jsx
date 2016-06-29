import React from "react"
import { createContainer } from "meteor/react-meteor-data"
import IndexPage from '/imports/ui/pages/IndexPage.jsx'

export default AppContainer = createContainer(() => {
  return {
    user: Meteor.user()
  }
}, IndexPage)
