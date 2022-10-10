import React, { useState } from "react";
import './Cart.css'
import { useSelector } from "react-redux";
import { Deletecartitem, Finalpayment } from "../redux/Action/Cartaddaction";
import { useDispatch } from "react-redux";
import $ from 'jquery'
import Foodcat from "../Foodcategories/Foodcat";
function Cart() {
    let [cartdata, setcatdata] = useState({ name: '', mobile: '', address: '', pincode: '' })
    let dispatch = useDispatch()
    let sel = useSelector(f => f).Cartaddreducer

    function cartorderfood() {
        let { name, mobile, address, pincode } = cartdata
        if (name.length < 5) {
            document.querySelector('.name_warning').previousElementSibling.previousElementSibling.style.border = '2px solid red'
            $('.name_warning').slideDown()
        }
        if (mobile.length !== 10) {
            document.querySelector('.mobile_warning').previousElementSibling.previousElementSibling.style.border = '2px solid red'
            $('.mobile_warning').slideDown()
        }
        if (address.length < 5) {
            document.querySelector('.address_warning').previousElementSibling.previousElementSibling.style.border = '2px solid red'
            $('.address_warning').slideDown()
        }
        if (pincode.length !== 6) {
            document.querySelector('.pincode_warning').previousElementSibling.previousElementSibling.style.border = '2px solid red'
            $('.pincode_warning').slideDown()
        }
        if (name.length >= 5 && mobile.length === 10 && address.length >= 5 && pincode.length === 6) {
            alert('order done')
            setcatdata({ name: '', mobile: '', address: '', pincode: '' })
            dispatch(Finalpayment())
        }

    }
    function cartchangehandler(event) {
        let { name, value } = event.target
        if (name === 'name') {
            if (value.length < 5) {
                $('.name_warning').slideDown()
            }
            else {
                $('.name_warning').slideUp()
                document.querySelector('.name_warning').previousElementSibling.previousElementSibling.style.border = '2px solid black'
            }
        }
        if (name === 'mobile') {
            if (value.length !== 10) {
                $('.mobile_warning').slideDown()
            }
            else {
                $('.mobile_warning').slideUp()
                document.querySelector('.mobile_warning').previousElementSibling.previousElementSibling.style.border = '2px solid black'
            }
        }
        if (name === 'address') {
            if (value.length < 5) {
                $('.address_warning').slideDown()
            }
            else {
                $('.address_warning').slideUp()
                document.querySelector('.address_warning').previousElementSibling.previousElementSibling.style.border = '2px solid black'
            }
        }
        if (name === 'pincode') {
            if (value.length !== 6) {
                $('.pincode_warning').slideDown()
            }
            else {
                $('.pincode_warning').slideUp()
                document.querySelector('.pincode_warning').previousElementSibling.previousElementSibling.style.border = '2px solid black'
            }
        }


        setcatdata({ ...cartdata, [event.target.name]: event.target.value })
    }
    let tot = 0;
    sel.map((d) => {
        tot += d.price
    })
    if (sel == '') {
        return (
            <>
                <div>nothing in cart</div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="cart_maincon p-5">
                    <div className="row">
                        <div className="row cart_leftpart col-lg-7 col-12">
                            <div className="text-center display-5 font-italic">ITEMS IN YOUR CART</div><hr />
                            {
                                sel.map((data) => {
                                    return (
                                        <>
                                            <div className="cart_imgcon col-md-4 col-12 py-3">
                                                <img src={data.img} alt="#" />
                                            </div>

                                            <div className="cart_namecon col-8">
                                                <div className='cart_name'>{data.name}</div>
                                                <small>{data.region}</small>
                                                <div className="row">
                                                    <div className="col-sm-4 col-12 my-1">Rating</div>
                                                    <div className="col-sm-4 col-12 my-1"><i className="fa-solid fa-truck"></i> 30 min</div>
                                                    <div className="col-sm-2 col-12 my-1"><i className="fa fa-inr"></i> {data.price}</div>
                                                </div>
                                                <div>
                                                    <button className="buy_proceedbtn m-3" onClick={() => dispatch(Deletecartitem(data))}>Remove item</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="cart_rightpart offset-lg-1 col-lg-4 col-12 mt-4">
                            <div className="text-center display-5">Order</div>

                            <label>Name:-</label><br />
                            <input type='text' name='name' onChange={cartchangehandler} value={cartdata.name} /><br />
                            <small className="name_warning">Name must be 5 characters long</small><br />

                            <label>Mobile No:-</label><br />
                            <input type='number' name='mobile' onChange={cartchangehandler} value={cartdata.mobile} /><br />
                            <small className="mobile_warning">10 chart needed</small><br />

                            <label>Address:-</label><br />
                            <input type='text' name='address' onChange={cartchangehandler} value={cartdata.address} /><br />
                            <small className="address_warning">address must be 5 characters long</small><br />

                            <label>Pincode:-</label><br />
                            <input type='number' name='pincode' onChange={cartchangehandler} value={cartdata.pincode} /><br />
                            <small className="pincode_warning">6 digit needed</small><br />

                            <div className="cart_tot_pay">Total Payment:-{tot}</div>
                            <div className="text-center"><button onClick={cartorderfood}>Order Food</button></div>
                        </div>
                    </div>
                </div>
                <div className="cart_recomanded">
                    <div>
                        <Foodcat />
                    </div>
                </div>
            </>
        )
    }

}
export default Cart;