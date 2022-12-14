import React, { useState, useEffect } from 'react'
import Axios from "axios";
import '../assets/landingPage.css';
import Recommended from '../components/recommended';
import { SearchBar } from '../components/searchBar';
import { Categories } from '../components/categories';
import food from "../assets/images/food.png";
export const LandingPage = () => {
    let [categories, setCategories] = useState([]);
    useEffect(() => {
        Axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(
            (res) => {
                setCategories(res.data.categories);
            }
        );
    }, []);
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    if (input.length > 0) {
        categories = categories.filter((i) => {
            return i.strCategory.toLowerCase().match(input.toLowerCase());
        });
    }
    return (
        <div className="px-2 py-2">
            <div className='bg-gradient-to-l to-green-500 from-white'>
                {/* place-content-center items-center */}
                <div className='flex flex-row flex-wrap justify-between items-center px-8'>
                    <div className='lg:basis-1/2 md:basis-1/2 sm:basis-1'>
                        <span className='text-2xl'>
                            Find the perfect food ideas for every occasion, from weeknight dinners to holiday feasts.
                        </span>
                        <SearchBar handleChange={handleChange} />
                    </div>
                    <div className='lg:basis-1/2 md:basis-1/2 sm:basis-1 flex flex-row justify-end'>
                        <img className='' src={food} alt="" />
                    </div>
                </div>

            </div>
            <Recommended />
            <Categories categories={categories} />
        </div>
    )
}