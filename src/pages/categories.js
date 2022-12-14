import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { SearchBar } from '../components/searchBar';
import { Categories } from '../components/categories';
export const CategoriesPage = () =>{
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
        
        <div>
            <div className="flex place-content-center items-center">
                <SearchBar handleChange={handleChange} />
            </div>
            <Categories categories={categories} />
        </div>
    )
}