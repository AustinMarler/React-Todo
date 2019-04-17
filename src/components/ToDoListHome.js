import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import { addToDoItem, filterCheck, clearCompleted } from '../actions/actions';
import { connect } from 'react-redux';

class ToDoListHome extends Component {
  state = {
    inputValue: ''
  }

  clearCompleted = () => {
    clearCompleted()
    filterCheck(this.props.currentFilter)
  }

  filterClick = (filter) => {
    if (filter !== this.props.currentFilter) {
      filterCheck(filter)
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.inputValue !== '') {
      addToDoItem(this.state.inputValue);
      this.setState({
        inputValue: ''
      })
    }
    filterCheck(this.props.currentFilter)
  }
  
  render() {
    return (
      <div id="mainContainer">
        <div id="headerContainer">
          <h3>To-Dos</h3>
        </div>
        <div id="bodyContainer">
          <div id="toDoContainer">
            <form onSubmit={this.handleSubmit} id="toDoInputContainer">
              <div id="labelContainer">
                <label htmlFor="toDoInput">&#9662;</label>
              </div>
              <input value={this.state.inputValue} onChange={this.handleChange} type="text" name="inputValue" id="inputValue" placeholder="What needs to be done?"></input>
            </form>
            <ToDoItems />
            <div id="toDoFooterContainer">
              <div id="itemsLeft">
                <p>{this.props.toDoItems.filter((item) => {
                  return !item.completed
                }).length} items left</p>
              </div>
              <div id="itemsFilter">
                <p onClick={() => {this.filterClick('All')}} className={this.props.currentFilter === 'All' ? 'selectedFilter' : ''}>All</p>
                <p onClick={() => {this.filterClick('Active')}} className={this.props.currentFilter === 'Active' ? 'selectedFilter' : ''}>Active</p>
                <p onClick={() => {this.filterClick('Completed')}} className={this.props.currentFilter === 'Completed' ? 'selectedFilter' : ''}>Completed</p>
              </div>
              <div id="clearCompletedItems">
                <p onClick={this.clearCompleted}>Clear completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    toDoItems: appState.toDoItems,
    currentFilter: appState.currentFilter
  }
}

export default connect(mapStateToProps)(ToDoListHome);