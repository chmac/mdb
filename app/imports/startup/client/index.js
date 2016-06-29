// Import the core packages we require.
// This ensure that the meteor build system ships them to the client.
import './routes'
import '../../config/index'

import '/imports/api/documents/documents.collection'
import '/imports/api/documents/documents.methods'
Meteor.subscribe('documents.mine')
