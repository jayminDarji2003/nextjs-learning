"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientSideFunction } from "@/utils/client-utils";
// import "./ImageSlider.css";

export default function ClientRoute() {
  const result = clientSideFunction();

  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <h1>{result}</h1>
      <Slider {...settings}>
        <div>
          <img src="https://images.unsplash.com/photo-1589816502524-b65852353095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1589816502524-b65852353095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1589816502524-b65852353095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1589816502524-b65852353095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </Slider>
    </div>
  );
}
