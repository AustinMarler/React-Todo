const initialState = {
  toDoItems: [],
  filteredItems: [],
  currentFilter: 'All'
}

export default function (state = initialState, action) {
  switch ( action.type ) {
    case 'ADD_TODO_ITEM':
      return {...state, toDoItems: [...state.toDoItems, action.todo]}
    case 'REMOVE_TODO_ITEM':
      state.toDoItems.splice(action.index, 1);
      return {...state, toDoItems: [...state.toDoItems]}
    case 'CHANGE_TODO_ITEM_STATUS':
      return {...state, toDoItems: state.toDoItems.map(function(item, index) {
        if (index === action.index) {
          if (!item.completed){
            return {
              ...item,
              completed: true
            }
          } else {
            return {
              ...item,
              completed: false
            }
          }
        } else {
          return item
        }
      })}
    case 'CHANGE_FILTER':
      return {...state, currentFilter: action.filter, filteredItems: state.toDoItems.filter(function(item) {
        if (action.filter === 'Active') {
          return !item.completed
        } else if (action.filter === 'Completed') {
          return item.completed
        } else {
          return true
        }
      }, this)}
    case 'CLEAR_COMPLETED':
      return {...state, toDoItems: state.toDoItems.filter(function(item) {
        return !item.completed
      })}
    default:
      return state
  }
}