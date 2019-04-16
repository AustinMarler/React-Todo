import { createStore } from 'redux'

import exampleReducer from './reducers/exampleReducer'

const store = createStore(exampleReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store