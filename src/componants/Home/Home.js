import React from "react";
import './Home.css'
function Home() {
    return (
        <>
            <div className="home_maincon">
                <div className="container">
                    <div className="home_innerdiv text-center">
                        <div className="home_del m-3">24/7 DELIVERY</div>
                        <div className="home_head display-5">Get Your Favorite Products Right At Your Doorstep In No Time</div>
                        <button className="home_btn m-4"><a href='#foodcat_maincon'>Menu</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home