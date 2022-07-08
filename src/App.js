import { useState, useMemo, useCallback } from 'react';
import './components/Todo/Todos';

import './App.css';
import Todos from './components/Todo/Todos';

const highCostFunction = (num) => {
  console.log('rending high cost function');
  for(let i = 0; i < 200000; i++) {
  num += 1;
  }
  return num;
}

function App() {
  const [ counter, setCounter ] = useState(0);
  const [ todos, setTodo ] = useState([]);

  const calculus = useMemo(() => highCostFunction(counter), [counter])

  const increment = () => {
    setCounter(prevState => prevState + 1 )
  }

  const addTodo = useCallback(() => {
    setTodo(prevState => [...prevState, 'New todo added'])
  }, [todos]);


  return (
    <>
      <h2>Enhorabuena por vuestros proyectazos 🥳🥳🥳</h2>
      <Todos todos={todos} addTodo={addTodo}/>
      <p>counter: {counter}</p>
      <button onClick={ increment }>+</button>
      <p>{calculus}</p>

    </>
  );
}

export default App;
