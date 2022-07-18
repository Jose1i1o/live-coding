const myWishes = [{
  id: 1,
  wish: 'SOS React',
  done: false
}];

const wishReducer = ( state = myWishes, action ) => {

  return state;
}

let wishes = wishReducer();
console.log(wishes);
// [ { id: 1, wish: 'SOS React', done: false } ]





const initialState = [
  {
  id: 1,
  title: 'Harry Potter and the Sorcerer’s Stone',
  year: 1997
  },
  {
  id: 2,
  title: 'Harry Potter and the Chamber of Secrets',
  year: 1998
  },
  {
  id: 3,
  title: 'Harry Potter and the Prisoner of Azkaban',
  year: 1999
  },
  {
  id: 4,
  title: 'Harry Potter and the Goblet of Fire',
  year: 2000
  },
  {
  id: 5,
  title: 'Harry Potter and the Order of the Phoenix',
  year: 2003
  },
  {
  id: 6,
  title: 'Harry Potter and the Half-Blood Prince',
  year: 2005
  },
  {
  id: 7,
  title: 'Harry Potter and the Deathly Hallows',
  year: 2007
  },
]




const HarryPotterBooksReducer = ( state = initialState, action = {} ) => { // debemos añadir el objeto
  
  if(action.type === 'Add book'){
    // state.push(action.payload) // No hacerlo así aunque funcione porque mutamos el state
    return [ ...state, action.payload ];
  }
  
  return state;
}

let books = HarryPotterBooksReducer();
// console.log(books)

const HarryPotterNewBook = {
  id: 8,
  title: 'Harry Potter and the Cursed Child',
  year: 2016
}

// no podemos hacer un push. Tenemos que enviar una acción sobre como modificarse

const addBookAction = {
  type: 'Add book', // action
  // newBook: HarryPotterNewBook
  payload: HarryPotterNewBook // lo que va dentro de la acción
}

books = HarryPotterBooksReducer( books, addBookAction )
// console.log({ state: books})
console.log(books)

