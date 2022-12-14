import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from "react-icons/bs";
import { SearchBar } from '../components/searchBar';
export const FavMeals = () => {

    var [meals, setMeals] = useState([]);
    useEffect(() => {
        function getMeals(){
            if(localStorage.getItem('meals')){
                const meals = JSON.parse(localStorage.getItem('meals')).meals;
                if (meals) {
                    setMeals(meals);
                }
            }
        }
            window.addEventListener('storage', getMeals)
            if(meals.length===0)
            getMeals();
    }, []);
    
    let removeFromFav = (id) => {
        let favMeals = {
            meals: []
        };
        meals.map((meal) => {
            if (meal.idMeal === id) 
                meals.splice(meals.indexOf(meal), 1);
        });
        favMeals.meals.push(...meals);
        localStorage.setItem('meals', JSON.stringify(favMeals));
        setMeals(meals.filter( meal=> meal.idMeal !== id));
        // window.location.reload(false);
    };
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    if (input.length > 0) {
        meals = meals.filter((i) => {
            return i.strMeal.toLowerCase().match(input.toLowerCase());
        });
    }
    
    return (
        <div >
            <div className="flex place-content-center items-center">
                <SearchBar handleChange={handleChange} />
            </div>
            {(meals.length > 0) ? (
                <div className='flex flex-row flex-wrap place-content-center'>
                    {meals.map((meal) => (
                        <div key={meal.idMeal} className="card lg:basis-1/6 md:basis-1/4 sm:basis-1 m-2 bg-white border rounded-lg shadow-md border-gray-700">
                            <Link to={`/meal/${meal.idMeal}`} >
                                <img className="rounded-t-lg" src={meal.strMealThumb} alt="" />
                            </Link>
                            <div className="p-5">
                                <Link to={`/meal/${meal.idMeal}`} >
                                    <h5 className="mb-2 text-lg  font-bold tracking-tight text-gray-900">{meal.strMeal}</h5>
                                </Link>
                                <div className='flex flex-row flex-wrap items-center justify-between'>
                                    <Link to={`/meal/${meal.idMeal}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                                        The Recipe
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Link>
                                    <BsFillTrashFill className='w-6 h-6 cursor-pointer' color='black' onClick={() => removeFromFav(meal.idMeal)} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            ) :
                (
                    <div className="py-20 text-center">
                        <h1 className="text-center">No Meals found</h1>
                    </div>
                )}
        </div>
    )
}