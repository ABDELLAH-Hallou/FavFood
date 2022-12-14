import React from 'react'
import { Link } from 'react-router-dom';

export const Categories = (props) => {
    return (
        <div>
            <h1 className="px-4 py-2 text-2xl">Discover our Foods</h1>
            {(props.categories.length > 0) ? (
                <div className='flex flex-row flex-wrap place-content-center'>
                    {props.categories.map((category) => (
                        <div key={category.idCategory} className="card lg:basis-1/6 md:basis-1/4 sm:basis-1 m-2 bg-white border  rounded-lg shadow-md border-gray-700">
                            <Link to={"/"}>
                                <img className="rounded-t-lg" src={category.strCategoryThumb} alt="" />
                            </Link>
                            <div className="p-5">
                                <Link to={"/"}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{category.strCategory}</h5>
                                </Link>
                                <Link to={`/category/${category.strCategory}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">
                                    See more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) :
                (
                    <div className="py-20 text-center">
                        <h1 className="text-center">No Category found</h1>
                    </div>
                )}
        </div>
    )
}

