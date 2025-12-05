import React from "react";
import aboutVideo from "../videos/about.mp4"; // 👈 mee video import

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>

      <div className="about-container">
        {/* LEFT – TEXT */}
        <div className="about-text">
          <h2>Welcome to Mama's Kitchen</h2>
          <p>
            At Mama’s Kitchen, we believe food is more than just a meal—it’s an
            experience filled with love, flavor, and tradition. Our journey
            started with a passion for serving fresh, homemade dishes inspired
            by authentic recipes and crafted with high-quality ingredients.
          </p>

          <h3>Our Mission</h3>
          <p>
            To deliver delicious, hygienic, and affordable food that makes every
            customer feel at home. We aim to serve dishes that satisfy your
            cravings and create memorable moments.
          </p>
          {/* RIGHT – VIDEO */}
        <div className="about-media">
          <video
            src={aboutVideo}
            controls
            className="about-video"
            
           
          />
        </div>

          <h3>Why Customers Love Us</h3>
          <ul>
            <li>Fresh & flavorful food made daily</li>
            <li>High-quality ingredients</li>
            <li>Affordable pricing</li>
            <li>Fast & reliable delivery</li>
            <li>Friendly customer experience</li>
          </ul>

          <h3>Meet the Founder</h3>
          <p>
            Mama’s Kitchen was started with a simple vision: to bring homely
            taste and restaurant-quality flavors together. With years of
            passion for cooking, our founder continues to keep the essence of
            tradition alive in every dish.
          </p>
        </div>
       

        
      </div>
    </div>
  );
};

export default About;
