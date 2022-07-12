import { useState, useEffect } from 'react';
import { Ring } from 'react-awesome-spinners'

import './App.css'

function App() {
  const url = 'https://api.giphy.com/v1/gifs/search?api_key=EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5&q=thor&limit=25&offset=0&rating=g&lang=en';

  // const getGifs = async() => {
  //   const url = 'https://api.giphy.com/v1/gifs/search?api_key=EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5&q=thor&limit=25&offset=0&rating=g&lang=en';
  //   const response = await fetch(url);
  //   // const json = await response.json()
  //   const data = await json.data;
  //   const { data } = await response.json()
    
  //   const gifs = data.map(giimport { Ring } from 'react-awesome-spinners'f => ({
  //     id: gif.id,
  //     title: gif.title,
  //     image: gif.images.downsized_small
  //   }))
  //   return gifs;
  // }

  // getGifs()
  // console.log(getGifs())

  const [ counter, setCounter ] = useState(0);
  const [ data, setData ] = useState([]);
  const [ error, setError ] =useState(false);
  const [ loading, setLoading ] = useState(false);
  // setCounter(prevState => prevState + 1 ) // This generates an infinite loop if I don't have the api in a useEffect

  useEffect(() => {
      setError(false)
      setLoading(true)
    const fetchData = async() => {
      try {
        const response = await fetch(url);
        const { data } = await response.json()
        console.log(data)
        setData(data)
      }
      catch (error) {
        setError(true)
      }
      setLoading(false);
    }
    fetchData();
  }, [ url ]);

  const handleClick = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <div className="App">
      <p>Hello</p>
      <p>{ counter }</p>
      <button onClick={ handleClick }>+</button>
      { loading ? <Ring /> : null }
      { error ? <p>Error</p> : 'There are no errors'}
      { data.map(({id, title, images}) => (
        <div key={ id }>
          <img src={ images.original.url } alt={title} />
          <p>{title} </p>
        </div>
        ))}
    </div>
  )
}

export default App
