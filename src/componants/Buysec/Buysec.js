import React from "react";
import './Buysec.css'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
function Buysec() {
    let sel = useSelector(t => t).Buybtnreducer[0]
    console.log(sel)
    return (
        <>
            <div>
                <Link to={`/${sel.category}`}>Back</Link>
            </div>
            <div className="buysec_maincon py-5">
                <div className="container">
                    <div className="row">
                        <div className="buy_imagecon col-md-3 col-sm-4 col-12">
                            <img src={sel.img} alt="#" />
                        </div>
                        <div className="buy_namecon col-md-5 col-sm-8 col-12">
                            <div className='buy_name'>{sel.name}</div>
                            <div>{sel.region}</div>
                            <div className="ratingflex">
                                <div className="i pe-lg-5 pe-2">Rating</div>
                                <div className="i pe-lg-5 pe-2">Del in 30 min</div>
                                <div className="i pe-lg-5 pe-2"><i className="fa fa-inr"></i> {sel.price}</div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="buy_proceedbtn">Proceed to buy</button>

                            </div>

                        </div>
                        <div className="buy_offer_maincon col-md-4 col-sm-10 col-12 m-md-0 my-5">
                            <div className="buy_offercon">
                                <div>30% off on first order</div>
                                <div>30% off on Second order</div>
                                <div>30% off on Third order</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buysec;