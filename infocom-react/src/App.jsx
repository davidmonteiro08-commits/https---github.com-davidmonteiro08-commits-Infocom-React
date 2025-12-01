import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Button from './components/Button';
import './App.css';

const ITEMS_PER_PAGE = 8;

function App() {
  const [products, setProducts]    = useState([]);
  const [visibleCount, setVisible] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading]      = useState(true);
  const [error, setError]          = useState(null);

  // 1. Buscar produtos
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => setError('Erro ao carregar produtos.'))
      .finally(() => setLoading(false));
  }, []);

  // 2. Paginar +8 a cada clique, prev é o valor anterior
  const handleLoadMore = () =>
    setVisible((prev) => prev + ITEMS_PER_PAGE);

  // 3. Renderização
  return (
    <main>
      {loading && <p>Carregando produtos...</p>}

      {error && <div className='error'>{error}</div>}

      {products && (
        <>
          <ProductList products={products.slice(0, visibleCount)} />

          <Button
            onClick={handleLoadMore}
            disabled={visibleCount >= products.length}
          >
            {visibleCount >= products.length
              ? "Fim dos produtos"
              : "Carregar Mais"}
          </Button>
        </>
      )}
    </main>
  );
}

export default App;