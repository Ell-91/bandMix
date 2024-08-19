import React from "react";
import "./home.css";
import video from "../../Assets/bandVideo.mp4";
// import Navbar from "../Navbar/navbar";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <video className="video" muted autoPlay loop>
          <source src={video} type="video/mp4"></source>
        </video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle"> Search your Holiday</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
