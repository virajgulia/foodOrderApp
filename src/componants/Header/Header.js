import React, { useEffect, useState } from 'react'
import './Header.css'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
    let sel = useSelector(e => e.Cartaddreducer)
    console.log(sel)
    let [carttop, setcarttop] = useState('')
    useEffect(() => {
        setcarttop(sel.length)
    })
    function showmenu() {
        $('.menu_maincon').slideToggle()
    }
    window.addEventListener('scroll', () => {
        $('.menu_maincon').slideUp()
    })

    return (
        <>
            <div className="header_maincon">
                <div className="container">
                    <div className='row'>

                        <div className="logpart_maincon col-sm-3 col-12 text-center">
                            <Link className='header_link' to='/'><span className='logo'><span className='res'>VG</span>-RES</span></Link>
                        </div>

                        <div className='col-sm-9 col-12 text-end'>
                            <span className="cart_menu row justify-content-sm-end justify-content-center">
                                <span className='col-4 text-end'> <Link className='cart_link' to='/cart'><i className="fa fa-shopping-cart my-1 mx-3 cart " aria-hidden="true"></i>
                                    {carttop !== 0 ? <span className='cart_top'>{carttop}</span> : <span></span>}
                                </Link>
                                </span>
                                <span className='col-4 text-start'><i onClick={showmenu} className="fa fa-bars my-1 mx-3 show_menu " aria-hidden="true"></i></span>
                            </span>
                        </div>
                        <div className='menu_maincon'>
                            <ul className='menu'>
                                <Link className='li_link' to='/'><li>Home</li></Link>
                                <li>Services</li>
                                <li>Menu <i className="fa-solid fa-angle-down"></i>
                                    <ul className='nested_menu pb-3'>
                                        <Link className='li_link' to='/breakfast'><li>Breakfast</li></Link>
                                        <Link className='li_link' to='/lunch'><li>Lunch</li></Link>
                                        <Link className='li_link' to='/dinner'><li>Dinner</li></Link>
                                        <Link className='li_link' to='/desserts'><li>Desserts</li></Link>
                                    </ul>
                                </li>
                                <li>About</li>
                                <li>Gallery</li>
                                <li>Reservation</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header