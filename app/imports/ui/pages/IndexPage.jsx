import React from "react"
import { connect } from "react-redux"
import { incrementCount } from "/imports/state/actions"

class Index extends React.Component {
  renderApp() {
    return (
      <div>
        You are signed in
      </div>
    )
  }

  renderPublic() {
    return (
      <div>
        Please sign in
      </div>
    )
  }

  render() {
    const { user } = this.props
    if (user) {
      return this.renderApp()
    }
    else return this.renderPublic()
  }
}

function mapStatesToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (count) => {
      dispatch(incrementCount(count))
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Index)