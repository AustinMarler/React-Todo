import store from '../store';

export function addToDoItem(todo) {
  store.dispatch({
    type: "ADD_TODO_ITEM",
    todo: {content: todo, completed: false}
  })
}

export function removeToDoItem(index) {
  store.dispatch({
    type: "REMOVE_TODO_ITEM",
    index: index
  })
}

export function handleCheck(index) {
  store.dispatch({
    type: "CHANGE_TODO_ITEM_STATUS",
    index: index
  })
}

export function filterCheck(filter) {
  store.dispatch({
    type: "CHANGE_FILTER",
    filter: filter
  })
}

export function clearCompleted() {
  store.dispatch({
    type: "CLEAR_COMPLETED"
  })
}