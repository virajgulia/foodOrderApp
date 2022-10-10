import React from "react";
import './Thirdsection.css'
function Thirdsection() {
    return (
        <>
            <div className="thirdsec_maincon py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 col-12 text-center px-5">
                            <div className="third_fooddel">FOOD DELIVERY SERVICE</div>
                            <div className="third_head">Delicious food at your figertips</div>
                            <p>Order food and get free delivery within 40km of radius. Download our app to order for android and ios. </p>
                            <button className="third_btn"><a href='#foodcat_maincon'>Order food</a></button>
                            <button className="third_btn">Download Our App</button>
                        </div>
                        <div className="col-lg-7 col-12 text-center">
                            <div className="third_img">
                                <img src='https://assets.website-files.com/61fd4a65725a5325e9bb25c2/61fd7f4fbbb5072e68e8d473_image-bg-hero-delivery-template-p-800.jpeg' alt='#' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Thirdsection