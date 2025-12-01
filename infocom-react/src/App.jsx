import {useState, useEffect} from "react";
import './App.css';
import ProductCard from "./components/Products";

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
