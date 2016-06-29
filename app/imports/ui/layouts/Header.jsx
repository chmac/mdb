import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div className="ui large borderless menu">
        <div className="ui container">
          <a href={FlowRouter.path('index')}
             className="item">mdb</a>
          <div className="right menu">
            <a href={FlowRouter.path('signin')}
               className="item">Sign In</a>
          </div>
        </div>
      </div>
    )
  }
}
