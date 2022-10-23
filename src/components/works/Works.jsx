import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Social Media Website",
      desc: "Easily connect online with friends and family!",
      img: "/assets/social_profilepage.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Real Estate Marketplace",
      desc: "Search for a home to buy, rent or sell! It's never been this simple!",
      img: "/assets/homefinder_modal.png",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "E-Commerce Website",
      desc: "Easily process orders, accept payments,manage shipping and logistics, and provide customer service",
      img: "/assets/gloriasplantsandpots_cart.png",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Scheduling Application",
      desc: "Schedule appointments on the go and keep users organized.",
      img: "/assets/scheduler_appointments.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
