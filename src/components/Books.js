import React from 'react'
import { useReducer, useEffect } from 'react';
// import { v4 as uuid } from 'uuid';
import BooksList from './BooksList';
import booksReducer from './booksReducer';
import Form from './Form'

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

const init = () => {
  return JSON.parse(localStorage.getItem('books')) || initialState;
}

const Books = () => {

  const [ books, dispatch ] = useReducer( booksReducer, initialState, init ) // add init function to the useReducer hook to initialize the state

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))

  }, [ books ]);

  const handleNewBook = ( book ) => {
    const action = {
      type: 'add book',
      payload: book
    }
    dispatch( action );
  }

  const handleRemove = ( id ) => {
    // console.log(id);
    dispatch({
      type: 'delete book',
      payload: id
    });
  }

  return (
    <>
      <h2>Harry Potter Books List</h2>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <BooksList initialState={ books } onDeleteBook={ handleRemove }/>
        </div>
        <div className='col-5'>
          <h4>Add book</h4>
          <Form onNewBook={ handleNewBook } />
        </div>
      </div>
    </>
  )
}

export default Books;