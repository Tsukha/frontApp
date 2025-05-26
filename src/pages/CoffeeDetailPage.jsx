import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useCurrency } from "../contexts/CurrencyContext";
import { useCart } from "../contexts/CartContext";
import { coffeeData } from "../data/coffeeData";

const CoffeeDetailPage = () => {
  const { id } = useParams();
  const { convertPrice, getCurrencySymbol } = useCurrency();
  const { openModal } = useCart();
  const coffee = coffeeData.find((c) => c.id === parseInt(id));

  if (!coffee) return <div>Coffee not found</div>;

  return (
    <div className="app-container">
      <Sidebar currentPath="/coffee" />
      <div className="main-content">
        <Header title="Coffee Details" />
        <div className="page-content">
          <div className="detail-container">
            <div className="detail-header">
              <img
                className="detail-img"
                src={coffee.image}
                alt={coffee.name}
              />
              <h1 className="detail-title">{coffee.name}</h1>
              <div className="detail-price">
                {getCurrencySymbol()}
                {convertPrice(coffee.price)}
              </div>
            </div>

            <div className="detail-description">
              <p>{coffee.fullDescription}</p>
            </div>

            <div className="detail-actions">
              <button
                className="btn btn-primary"
                onClick={() => openModal(coffee)}
              >
                Add to Cart
              </button>
            </div>

            <Link to="/coffee" className="back-button">
              <ArrowLeft size={16} />
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetailPage;
