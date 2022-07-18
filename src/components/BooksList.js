const BooksList = ({ initialState = [], onDeleteBook }) => {
  
  return (
    <ul className='list-group'>
      { initialState.map(({ id, title, year }) =>
        <li key={ id } className='list-group-item d-flex justify-content-between'>
          <span className='align-center'>{title}</span>
          <span className='align-center'>{year}</span>
          <button className='btn btn-danger w-25 h-25' onClick={ () => onDeleteBook(id) }>Delete</button>
        </li>
      )}
    </ul>
  )
}

export default BooksList