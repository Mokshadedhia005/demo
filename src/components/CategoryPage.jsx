import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";

const places = {
  religious: ["Siddhivinayak Temple", "Haji Ali Dargah", "Mahalaxmi Temple"],
  cafés: ["Prithvi Café", "Kala Ghoda Café", "Leopold Café"],
  restaurants: ["Bademiya", "Trishna", "The Table"],
  historic: [
    "Gateway of India",
    "Chhatrapati Shivaji Terminus",
    "Elephanta Caves",
  ],
};

function CategoryPage() {
  const { categoryName } = useParams();
  const categoryPlaces = places[categoryName] || [];

  return (
    <div className="page">
      <h1>{categoryName}</h1>
      {categoryPlaces.length > 0 ? (
        <ul>
          {categoryPlaces.map((place, i) => (
            <li key={i}>{place}</li>
          ))}
        </ul>
      ) : (
        <p>No places found under this category.</p>
      )}
    </div>
  );
}

export default CategoryPage;
