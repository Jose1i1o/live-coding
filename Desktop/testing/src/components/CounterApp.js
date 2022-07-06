import { useState, useEffect } from 'react';
import { uid } from 'react-uid';

const CounterApp = ({ value = 0 }) => {

  const [counter, setCounter] = useState({
    counter: value,
    id: uid
  });

const handleAdd = () => {
  setCounter((allItems) => {
    return (
      {
      ...allItems,
      counter: allItems.counter + 1
    })
  })
}

  const handleSubstract = () => {
    setCounter((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter - 1
      }
    })
  }

useEffect(() => {
  console.log('useEffect');
}
, [counter.counter]);


  const handleReset = () => {
    setCounter((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter = value
      }
    })
  }


  return (
    <>
      <div>CounterApp</div>
      {/* <div>{counter.counter}</div> */}
      { counter?.id && <p>{ counter?.counter }</p> }
      <button onClick={ handleAdd }>+</button>
      <button onClick={ handleSubstract }>-</button>
      <button onClick={ handleReset }>reset</button>
    </>
  )
}

export default CounterApp