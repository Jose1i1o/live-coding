const booksReducer = ( initialState = [], action ) => {
  switch (action.type) {
    // case 'delete book':
    // throw new Error('Action.type = Not implemented yet');
    case 'add book':
      return [ ...initialState, action.payload ];

    case 'delete book':
      return initialState.filter( book => book.id !== action.payload )

    default:
      return initialState;
  }
}

export default booksReducer;