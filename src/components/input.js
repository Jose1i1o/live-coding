import { forwardRef } from "react";

const Input = forwardRef(( props, ref ) => {
  return <input type='text' className='form-control' ref={ ref } placeholder='Enter your name'/>;
});

export default Input;