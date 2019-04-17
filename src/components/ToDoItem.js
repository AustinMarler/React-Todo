import React, { Component } from 'react';
import { removeToDoItem, handleCheck, filterCheck } from '../actions/actions';
import { connect } from 'react-redux'

class ToDoItem extends Component {
  removeToDoItem = () => {
    removeToDoItem(this.props.index)
    filterCheck(this.props.currentFilter)
  }

  handleCheck = () => {
    handleCheck(this.props.index)
    filterCheck(this.props.currentFilter)
  }

  render() {
    return (
      <div id={"item" + this.props.index} className="toDoItemContainer">
        <div className="checkArea">
          <div onClick={this.handleCheck} className="checkCircle">
            <p id={"check" + this.props.index} className={this.props.completed === true ? 'check completed' : 'check'}>&#10003;</p>
          </div>
        </div>
        <div className="toDoContentContainer">
          <p id={"toDoContent" + this.props.index} className={this.props.completed === true ? "toDoContentCompleted" : ""}>{this.props.content}</p>
        </div>
        <div className="deleteToDoX">
          <p onClick={this.removeToDoItem}>&#10005;</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    currentFilter: appState.currentFilter
  }
}

export default connect(mapStateToProps)(ToDoItem)