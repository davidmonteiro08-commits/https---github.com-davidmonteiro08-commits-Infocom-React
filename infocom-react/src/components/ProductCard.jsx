import './ProductCard.css';
import { useNavigate } from "react-router-dom";

function ProductCard({ product, detailedView = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Só navega se não estivermos na página de detalhes
    if (!detailedView) {
      navigate(`/products/${product.id}`);
    }
  };

    return (
    <div className='card' onClick={handleClick}>
      {/* Código existente */}

      {detailedView && (
        <>
          <p className="product-description">{product.description}</p>

          <span className="product-category">{product.category}</span>
        </>
      )}
    </div>
  );
}

export default ProductCard;