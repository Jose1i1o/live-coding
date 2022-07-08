import { memo, useId } from 'react';

import { v4 as uuid } from 'uuid';

const Todos = ({ todos, addTodo }) => {

  console.log(uuid());

  // console.log(useId);
  // const id = useId();
  // console.log(id);

  // console.log('children is rendering')


  return (
    <>
      <h2>Todos</h2>
      { todos.map((todos ) => {
        return <p key={ uuid() }>{ todos }</p>
      })}
      <button onClick={ addTodo }>Add Todo</button>
    </>
  )
}

export default memo(Todos);