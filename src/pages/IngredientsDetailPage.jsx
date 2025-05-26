import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useCurrency } from "../contexts/CurrencyContext";
import { ingredientsData } from "../data/coffeeData";

const IngredientDetailPage = () => {
  const { id } = useParams();
  const { convertPrice, getCurrencySymbol } = useCurrency();
  const ingredient = ingredientsData.find((i) => i.id === id);

  if (!ingredient) return <div>Ingredient not found</div>;

  return (
    <div className="app-container">
      <Sidebar currentPath="/ingredients" />
      <div className="main-content">
        <Header title="Ingredient Details" />
        <div className="page-content">
          <div className="detail-container">
            <div className="detail-header">
              <h1 className="detail-title">{ingredient.name}</h1>
              <div className="detail-price">
                {getCurrencySymbol()}
                {convertPrice(ingredient.price)}
              </div>
            </div>

            <div className="detail-description">
              <p>
                <strong>Strength:</strong> {ingredient.strength}
              </p>
              <p>
                <strong>Flavor:</strong> {ingredient.flavor}
              </p>
              <br />
              <p>{ingredient.description}</p>
            </div>

            <Link to="/ingredients" className="back-button">
              <ArrowLeft size={16} />
              Back to Ingredients
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetailPage;
