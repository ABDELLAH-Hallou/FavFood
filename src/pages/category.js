import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { SearchBar } from '../components/searchBar';
import { AiFillHeart } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
// import "../assets/category.css";
import { BsFillTrashFill } from "react-icons/bs";

export const Category = () => {
    let [meals, setMeals] = useState([]);
    let [favs, setFavs] = useState([]);
    const params = useParams();
    useEffect(() => {
        Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`).then(
            (res) => {

                setMeals(res.data.meals);

            }
        );

        // function getFavs(){
        //     if(localStorage.getItem('meals')){
        //         const favs = JSON.parse(localStorage.getItem('meals')).meals;
        //         console.log(favs);
        //         if (favs) {
        //             setFavs(favs.map((fav)=>{
        //                 fav = fav.idMeal;
        //             }));
        //         }
        //     }
            
        // }
        //     window.addEventListener('storage', getFavs)
        //     if(favs.length===0)
        //     getFavs();
        //     console.log(favs);
    }, []);
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    if (input.length > 0) {
        meals = meals.filter((i) => {
            return i.strMeal.toLowerCase().match(input.toLowerCase());
        });
    }
    let addToFav = (meal) => {
        // setFav(fav.push(meal.idMeal));
        // console.log(fav);
        let favMeals = {
            meals: []
        };
        if (localStorage.getItem('meals')) {
            favMeals.meals.push(...JSON.parse(localStorage.getItem('meals')).meals);
        }
        if (!favMeals.meals.filter(e => e.idMeal === meal.idMeal).length > 0)
            favMeals.meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(favMeals));
    };
    // let removeFromFav = (id) => {
    //     let favMeals = {
    //         meals: []
    //     };
    //     fav.map((fv) => {
    //         if (fv === id) 
    //             fav.splice(fav.indexOf(fv), 1);
    //     });
    //     favMeals.meals.push(...meals);
    //     localStorage.setItem('meals', JSON.stringify(favMeals));
    //     setMeals(meals.filter( meal=> meal.idMeal !== id));
    // };
    return (
        <div >
            <div className="flex place-content-center items-center">
                <SearchBar handleChange={handleChange} />
            </div>
            {(meals.length > 0) ? (
                <div className='flex flex-row flex-wrap place-content-center'>
                    {meals.map((meal) => (

                        <div key={meal.idMeal} className="card lg:basis-1/6 md:basis-1/4 sm:basis-1 m-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-white dark:border-gray-700">
                            <Link to={`/meal/${meal.idMeal}`}>
                                <img className="rounded-t-lg" src={meal.strMealThumb} alt={meal.strMealThumb} />
                            </Link>
                            <div className="p-5">
                                <Link to={`/meal/${meal.idMeal}`}>
                                    <h5 className="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-grey-800">{meal.strMeal}</h5>
                                </Link>
                                <div className='flex flex-row flex-wrap items-center justify-between'>
                                    {/* <Link to={`/meal/${meal.idMeal}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                                        The Recipe
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Link> */}
                                    {/* {(fav.includes(meal.idMeal)) ? (
                                        <BsFillTrashFill className='w-6 h-6 cursor-pointer' color='black' onClick={() => removeFromFav(meal.idMeal)} />
                                    ):( */}
                                    <Link to={`/meal/${meal.strYoutube}`}>
                                        <AiFillYoutube className='w-6 h-6 cursor-pointer' />
                                    </Link>
                                    <AiFillHeart className='w-6 h-6 cursor-pointer' color='red' onClick={() => addToFav(meal)} />
                                    {/* )}                                 */}
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