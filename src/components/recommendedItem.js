import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecommendedItem = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {meals.map((meal) => (
        <Link to={`meal/${meal.idMeal}`}>
          <div className="h-96 w-60 m-2 lg:basis-1/3 md:basis-1/3 sm:basis-1 rounded overflow-hidden shadow-lg">
            <img className="rounded-t-lg " src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendedItem;