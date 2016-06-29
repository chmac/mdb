import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

class DocumentsCollection extends Mongo.Collection {
  // Wrap the insert() method
  insert(doc, callback) {
    return super.insert(doc, callback)
  }

  // Wrap the update() method
  update(...args) {
    return super.update(...args)
  }

  // Wrap the remove() method
  remove(selector, callback) {
    return super.remove(selector, callback)
  }
}

export const Documents = new DocumentsCollection('documents')

Documents.deny({
  insert() { return true },
  update() { return true },
  remove() { return true },
})

// Specify which fields should be included in Meteor.publish() calls
Documents.publicFields = {
  title: 1,
  body: 1,
  data: 1,
}

// Documents.helpers({
//
// })
