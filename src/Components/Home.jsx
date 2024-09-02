import React from "react";
import Carousel from "../pages/Carousel";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];
export default function Home() {
  return (
    <>
      <div className="Home" style={{ display: "flex", justifyContent: "center", marginBottom: "20px", marginTop: "20px" }}>
        <div className="max-w-lg max-h-lg">
          <Carousel autoslide={true}>
            {
              slides.map((s) => (
                <img src={s} />
              ))
            }
          </Carousel>
        </div>
      </div>
    </>
  );
}