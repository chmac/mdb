import { Meteor } from 'meteor/meteor'

import { Documents } from '../documents.collection'

Meteor.publish('documents.mine', function documentsMine() {
  return Documents.find({
    userId: this.userId,
  }, {
    fields: Documents.publicFields,
  })
})
