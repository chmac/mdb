import React from 'react'

export class DocumentItem extends React.Component {
  render() {
    const { document } = this.props
    return (
      <div className="item">
        <div className="right floated content">
          <div className="ui small red icon button">
            <i className="delete icon"></i>
          </div>
        </div>
        {document.title}
      </div>
    )
  }
}