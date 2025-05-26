import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useCurrency } from "../contexts/CurrencyContext";
import { ingredientsData } from "../data/coffeeData";

const IngredientsPage = () => {
  const { convertPrice, getCurrencySymbol } = useCurrency();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    strength: "",
    flavor: "",
    description: "",
  });

  return (
    <div className="app-container">
      <Sidebar currentPath="/ingredients" />
      <div className="main-content">
        <Header title="Manage Ingredients" />
        <div className="page-content">
          <div className="ingredients-table">
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Strength</th>
                  <th>Flavor</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ingredientsData.map((ingredient, index) => (
                  <tr key={ingredient.id} className="table-row">
                    <td className="table-cell">{ingredient.id}</td>
                    <td className="table-cell name">{ingredient.name}</td>
                    <td className="table-cell">
                      {getCurrencySymbol()}
                      {convertPrice(ingredient.price)}
                    </td>
                    <td className="table-cell">{ingredient.strength}</td>
                    <td className="table-cell">{ingredient.flavor}</td>
                    <td className="table-cell">
                      <div className="table-actions">
                        <button
                          className="btn-small btn-detail"
                          onClick={() =>
                            navigate(`/ingredients/${ingredient.id}`)
                          }
                        >
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsPage;
