import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { useParams } from 'react-router-dom';
export const Meal = () => {
    const [meals, setMeals] = useState([]);
    const params = useParams();
    useEffect(() => {
        Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`).then(
            (res) => {
                console.log(res);
                setMeals(res.data.meals);
            }
        );
    }, []);

    return (
        <div >
            <div className='flex flex-row flex-wrap place-content-center'>
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="items-center">
                        <div className="md:w-2/3 mt-2 md:mx-64 bg-white p-2 w-screen rounded-lg">
                            <div className="flex justify-center mt-4">
                                <img src={meal.strMealThumb} alt="" className="rounded-full object-cover w-3/12 " />
                            </div>
                            <div className="py-6 m-2">
                                <h2 className="text-center">{meal.strMeal}</h2>
                                <h2>Instructions:</h2>
                                <p className="text-center text-sm px-2 mt-2">
                                    {meal.strInstructions}
                                </p>
                            </div>
                            {/* <div>
                                <iframe
                                    src={meal.strYoutube}>
                                </iframe>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}