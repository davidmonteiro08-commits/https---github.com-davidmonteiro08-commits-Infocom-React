import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Button from './components/Button';
import './App.css';

const ITEMS_PER_PAGE = 8;     // mostra 8 itens por vez

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisible]   = useState(ITEMS_PER_PAGE); // quantos estão visíveis

  // Fetch dos produtos
 useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(setProducts)
    .catch(() => setError("Erro ao carregar produtos."))
    .finally(() => setLoading(false));
 }, []);

 const handleLoadMore = () => {
  setVisible((prev) => prev + ITEMS_PER_PAGE);
 };

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
