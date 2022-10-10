import React from "react";
import { Link, NavLink } from 'react-router-dom'
import './Foodcat.css'

function Foodcat() {
    let arr = [
        {
            name: 'Breakfast',
            img: 'https://assets.website-files.com/5e887af1bcf6e12167c0bd37/5e9ee4b6417f59d92e2655d5_categories-breakfast.jpg',
            path: '/breakfast'
        },
        {
            name: 'Lunch',
            img: 'https://assets.website-files.com/5e887af1bcf6e12167c0bd37/5e9ee5ca43f8327c7a62fac8_categories-lunch.jpg',
            path: '/lunch'
        },
        {
            name: 'Dinner',
            img: 'https://assets.website-files.com/5e887af1bcf6e12167c0bd37/5e9ef3c78229a849ce79d06e_categories-dinner.jpg',
            path: '/dinner'
        },
        {
            name: 'Desserts',
            img: 'https://assets.website-files.com/5e887af1bcf6e12167c0bd37/5e9ee39e85e055ce7fe2ded3_categories-dessert.jpg',
            path: '/desserts'
        }
    ]
    return (
        <>
            <div className="foodcat_maincon" id='foodcat_maincon'>
                <div className="container p-5">
                    <div className="display-5 m-6 text-center">Main Categories</div>
                </div>
                <div className='container foodcat_grid'>
                    {
                        arr.map(d => <Link className="cat_link" to={d.path} key={d.path}><div style={{ backgroundImage: `url(${d.img})` }} className="foodcat_item_maincon"><span className="foodcat_link">{d.name}</span></div></Link>)
                    }
                </div>
            </div>
        </>
    )
}
export default Foodcat;