import Products from './components/Products';

function App(props) {

  // const title = 'React is awesome';
  // const subtitle='React is made in JavaScript';
  // const paragraph = 'This is a paragraph';


  return (
    <>
      <Products {...props} />
    </>
  );
}

export default App;