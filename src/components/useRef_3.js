import React, { useState, useEffect } from 'react'

const useRef_3 = () => {

  const [ formState, setFormState ] = useState({
    username: 'Jose',
    email: 'jose@assembler.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // console.log(e.target.name)
    const { name, value } = target;

    setFormState({
      ...formState,
      // access name property of target with target.name
      [ name ] : value, // propiedad computada de un objeto es una función que devuelve el valor de la propiedad computada de un objeto
    });
  }

  return (
    <>
      <h2>Simple Form</h2>
      <hr/>
      <input 
        type='text' 
        className='form-control' 
        placeholder='Username'
        name='username'
        value={ username } // without the onchange will throw an error
        onChange={ onInputChange }
      />
      { username === 'Javier' && <Message /> }
      <input
        type='text' 
        className='form-control' 
        placeholder='jose@assembler.com'
        name='Email'
        value={ email }
        onChange={ onInputChange }
      />
    </>
  )
}

function Message() {

/* useEffect(() => {
  console.log('mounted');
  return () => {
    console.log('unmounted');
    }
  }, []); */

  useEffect(() => { // fuga de memoria

    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    }

/*     window.addEventListener('mousemove', (e) => {
      console.log(' OoO ');
      console.log(e.x , e.y);
    }); */

     window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);


  // return <div>User already exists</div>
}

export default useRef_3