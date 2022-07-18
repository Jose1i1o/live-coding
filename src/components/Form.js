import React, { useState } from 'react'

const Form = ({ onNewBook }) => {

const [ formState, setFormState ] = useState({
  id:'',
  title: '',
  year: ''
});

const { id, title, year } = formState;

const onInputChange = ({ target }) => {
  const { name, value } = target;
  setFormState({
    ...formState,
    [ name ]: value
  })
}


const onSubmit = (e) => {
  e.preventDefault();
  if(title === '' || year === '') {
    return;
  }
  const newBook = {
    id: id,
    title: title,
    year: year
  }

  // add new book to the list
  onNewBook(newBook);

  // reset form
  setFormState({
    id: '',
    title: '',
    year: ''
  })
}

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type='text'
          placeholder='add id'
          className='form-control'
          name= 'id'
          value= { id }
          onChange= { onInputChange }
        />
        <input
          type='text'
          placeholder='add new title'
          className='form-control'
          name= 'title'
          value= { title }
          onChange= { onInputChange }
        />
        <input
          type='text'
          placeholder='add year'
          className='form-control'
          name= 'year'
          value= { year }
          onChange= { onInputChange }
        />
        <button
          type='submit'
          className='btn btn-outline-primary mt-1'
        >Add</button>
      </form>
    </>
  )
}

export default Form