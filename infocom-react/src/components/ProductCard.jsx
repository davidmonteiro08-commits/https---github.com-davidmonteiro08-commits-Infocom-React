import './ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      {/* Resto do código do card continua igual */}
    </div>
  );
}

export default ProductCard;