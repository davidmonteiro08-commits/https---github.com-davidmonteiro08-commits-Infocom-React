import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="product-details">
      <h2>Detalhes do Produto {id}</h2>
      {/* Aqui você pode buscar e exibir os detalhes do produto usando o id */}
    </div>
  );
}

export default ProductDetails;