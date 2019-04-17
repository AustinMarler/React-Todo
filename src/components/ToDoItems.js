import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';

class ToDoItems extends Component {
  render() {
    return (
      <div>
        {
          this.props.filteredItems.map(function(item, index){
            return (
            <ToDoItem key={"item" + index} {...item} index={index} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {
    toDoItems: appState.toDoItems,
    currentFilter: appState.currentFilter,
    filteredItems: appState.filteredItems
  }
}

export default connect(mapStateToProps)(ToDoItems);