/*
This file controls the shape of the default state.

It imports all the various reducers and combines them using the
`combineReducers()` API from redux.
*/

import * as ActionTypes from '../actions'

import { combineReducers } from 'redux'
import {reducer as notifReducer} from 'redux-notifications'

import count from './count.reducer.js'

const rootReducer = combineReducers({
  count,
  notifs: notifReducer
})

export default rootReducer
