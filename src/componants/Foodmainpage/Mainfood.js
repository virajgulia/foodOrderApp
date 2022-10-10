import React, { useEffect, useState } from "react";
import './Mainfood.css'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { useSelector, useDispatch } from 'react-redux'
import Buybtnaction from "../redux/Action/Buybtnaction";
import { Cartaddaction } from "../redux/Action/Cartaddaction";

function Mainfood(props) {
    let dispatch = useDispatch()
    let sel = useSelector(t => t).Buybtnreducer
    console.log(sel)

    useEffect(() => {
        $(window).scrollTop(0)
    }, [])
    $(document).ready(() => {
        setTimeout(() => {
            $('.mainfood_maincon').css('visibility', 'visible')
        }, 400);
    })
    return (
        <>
            <div className="mainfood_maincon">
                <Link to='/'>Back</Link>
                <div className="container mainfood_itemgrid">
                    {
                        props.dt.map((data) => {
                            return (
                                <>
                                    <div key={data.id} className="foodcard_maincon">
                                        <div>
                                            <img src={data.img} alt='#' />
                                        </div>
                                        <div className="mainfood_itemname">{data.name}</div>
                                        <div className="px-3">{data.region}</div>
                                        <div className="row container p-3">
                                            <div className="col"><i className="fa fa-star">3.5</i></div>
                                            <div className="col"><i className="fa-solid fa-truck"></i>30min</div>
                                            <div className="col"><i className="fa fa-inr"></i>  {data.price}</div>
                                        </div>
                                        <div className="text-center">
                                            <button className="mx-2 card_btn" onClick={() => dispatch(Buybtnaction({ obj: data, category: props.cat }))}><Link className="buy_link" to='/buysec'>Order Now</Link></button>
                                            <button className="mx-2 card_btn" onClick={() => { dispatch(Cartaddaction(data)) }}>Add To Cart</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Mainfood