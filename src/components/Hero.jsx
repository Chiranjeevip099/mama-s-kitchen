import React from "react";
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";
import Food from "../images/Food Thalli.png";
const Hero = () => {
  return (
    <div className="hero">
        <div className="left">
            <span className="title">TASTE THE BEST FOOD</span>
            <p>I am proud to share that I am starting a new food business built on the promise of exceptional taste and uncompromising quality. Every item on my menu is carefully crafted using fresh ingredients, authentic recipes, and a passion for flavor. My vision is to create a place where customers immediately feel the difference in every bite — a taste that stands out, stays with them, and keeps them coming back. This business is not just about serving food; it is about building a brand known for trust, taste, and excellence.</p>
            <div className="btns">
                <button className="btn1">ORDERNOW</button>
                <button className="btn2">ADD TO CART</button>
            </div>
            <div className="social">
                <span className="social-1">Also Avaliable On</span>
                <div className="social-icons">
                    <img src={swiggy} alt="" />
                    <img src={zomato} alt="" />
                </div>
            </div>
        
        </div>
        <div className="right">
            <img src={Food} alt="" />
        </div>
    </div>

  )
}

export default Hero;




