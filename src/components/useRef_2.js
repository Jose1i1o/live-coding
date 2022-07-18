import React, { useRef, useState, useEffect } from 'react'

const UseRef_2 = () => {

  const [ count, setCount ] = useState(0);
  const rendered = useRef(0);

  const handleAdd = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    rendered.current = count;
    setTimeout(() => {
      console.log(count);
      console.log(`Rendered Ref: ${rendered.current}`);
    }, 2000)
  }, [count])

  return (
    <div className='m-3'>
      <button onClick={ handleAdd } >+</button>
      <p>Rendered times: { count }</p>
      <p>Rendered times: { rendered.current }</p>
    </div>
  )
}

export default UseRef_2