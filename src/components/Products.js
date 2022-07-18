import products from '../products';
import CounterApp from './CounterApp';
import ProductCard from './ProductCard';
import './productCard.css'

const Products = ({ title, subtitle }) => {

  title = 'Why not use props?';
  subtitle = 'React is made in JavaScript';

  return (
    <>

      <h1>Products</h1>
        {products.map(product => (
            <ProductCard key={product.id}>
              <div>{product.title}</div>
              <div>{product.price}</div>
              <img className='product_img' src={product.img} alt='product image' />
            <CounterApp />
            </ProductCard>
        ))}
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
    </>
  )
}

export default Products
