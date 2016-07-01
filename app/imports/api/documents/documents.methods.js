import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { check, Match } from 'meteor/check'

import { Documents } from './documents.collection'

export const insertDocument = new ValidatedMethod({
  // Documents get inserted with just a "title"
  name: 'documents.insert',
  validate(doc) {
    check(doc, {
      _id: Match.Optional(String),
      title: Match.Where((title) => {
        check(title, String)
        return title.length > 3
      }),
    })
  },
  run(doc) {
    if (!this.userId) {
      throw new Meteor.Error('documents.insert.notLoggedIn',
        'Must be logged in. #rrzjwZ')
    }
    // Add the user ID
    return Documents.insert(Object.assign(doc, { userId: this.userId }))
  },
})

export const setTags = new ValidatedMethod({
  name: 'documents.setTags',
  validate({ _id, tags }) {
    check(_id, String)
    check(tags, [String])
  },
  run({ _id, tags }) {
    return Lists.update(_id, {
      $set: {
        'tax.tags': tags,
      }
    })
  },
})

export const removeDocument = new ValidatedMethod({
  name: 'documents.delete',
  validate({ _id }) {
    check(_id, String)
  },
  run({ _id }) {
    const document = Documents.findOne(_id)
    if (document.userId !== this.userId) {
      throw new Meteor.Error('document.remove.unauthorized', "Not allowed")
    }
    return Documents.remove(_id)
  }
})
