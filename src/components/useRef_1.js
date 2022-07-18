import { forwardRef, useRef } from 'react';

const UseRef_1 = () => {
  const inputRef = useRef();
  // console.log(inputRef);

  const handleFocus = () => {
    // document.querySelector('input').select();
    console.log(inputRef);
    // inputRef.current.focus();
  }

  return (
    <>
      <h2>Inputs with Ref Hook</h2>
      <hr/>
      <button className='btn btn-primary m-2' onClick={ handleFocus }>Focus</button>
      <Input ref={ inputRef }  />
      {/* <input type='text' ref={ inputRef } /> */}
    </>
  )
}

const Input = forwardRef(( props, ref ) => {
  return <input 
    type='text'
    className='form-control'
    ref={ ref }
    placeholder='Enter your name'/>;
});

export default UseRef_1