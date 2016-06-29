import React from 'react'
import { Meteor } from 'meteor/meteor'

export default class Header extends React.Component {
  signout() {
    Meteor.logout()
  }

  render() {
    return (
      <div className="ui large borderless menu">
        <div className="ui container">
          <a href={FlowRouter.path('index')}
             className="item">mdb</a>

          <div className="right menu">
            {!this.props.user ?
              <a href={FlowRouter.path('signin')}
                 className="item">Sign In</a>
              :
              <a href="#"
                 onClick={this.signout}
                 className="item">Signout</a>
            }

          </div>
        </div>
      </div>
    )
  }
}
