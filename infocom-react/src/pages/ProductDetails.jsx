import { Link, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import "./ProductDetails.css";
import Button from "../components/Button";
import { useCart } from "../hooks/useCart";

function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { addItem } = useCart(); // hook para acessar o contexto do carrinho

  if (loading) return <p>Carregando detalhes do produto...</p>;
  if (error) return <div className='error'>{error}</div>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className="product-details">
      <ProductCard product={product} detailedView={true} />
      <Button onClick={() => addItem(product, 1)}>Comprar</Button>
      <Link to="/">
        <Button variant="secondary">Início</Button>
      </Link>
    </div>
  );
}

export default ProductDetails;