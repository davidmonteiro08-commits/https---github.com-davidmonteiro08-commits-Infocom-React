import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Button from './components/Button';
import './App.css';

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dos produtos
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(setProducts)
    .catch(() => setError("Erro ao carregar produtos."))
    .finally(() => setLoading(false));
}, []);

  return (
    <>
    <main>
      <h1>Catálogo de produtos</h1>
      {products && <ProductCard product={products[0]}/>}
    </main>
    </>
  )
}

export default App
