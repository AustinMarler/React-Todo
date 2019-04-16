const initialState = {
  example: 'foobar'
}

export default function (state = initialState, action) {
  switch ( action.type ) {
    case 'EXAMPLE':
      return {...state, example: 'barfoo'}
    default:
      return state
  }
}