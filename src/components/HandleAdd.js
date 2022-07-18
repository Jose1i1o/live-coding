const CounterApp = ({ value = 1 }) => {

  const handleAdd = (e) => {
    console.log('add');
    return () => console.log('Hello class!');
  }

  return (
    <>
      <div>CounterApp</div>
      <div>{ value }</div>
      <button onClick={ handleAdd() }>+</button>
    </>
  )
}

export default CounterApp