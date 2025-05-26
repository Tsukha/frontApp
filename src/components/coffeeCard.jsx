import React from "react";
import { useNavigate } from "react-router-dom";
import { Coffee } from "lucide-react";
import { useCurrency } from "../contexts/CurrencyContext";
import { useCart } from "../contexts/CartContext";

const CoffeeCard = ({ coffee }) => {
  const { convertPrice, getCurrencySymbol } = useCurrency();
  const { openModal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="coffee-card">
      <div className="coffee-image">
        <img src={coffee.image} alt={coffee.name} />
      </div>
      <div className="coffee-card-content">
        <h3 className="coffee-title">{coffee.name}</h3>
        <p className="coffee-description">{coffee.shortDescription}</p>
        <div className="coffee-price-section">
          <div className="coffee-price">
            <span className="price-text">
              {getCurrencySymbol()}
              {convertPrice(coffee.price)}
            </span>
            <div className="currency-icon">$</div>
          </div>
        </div>
        <div className="coffee-buttons">
          <button className="btn btn-primary" onClick={() => openModal(coffee)}>
            Add to Cart
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/coffee/${coffee.id}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
