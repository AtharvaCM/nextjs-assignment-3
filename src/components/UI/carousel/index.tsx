import React, { useState } from "react";

type ImageType = {
  image_location: string;
  __typename: string;
};

type CarouselPropsType = {
  images: ImageType[];
};

const Carousel: React.FC<CarouselPropsType> = ({ images }) => {
  const [selectedImg, _setSelectedImg] = useState(0);
  return (
    <div
      id="carouselExampleCrossfade"
      className="slide carousel carousel-fade relative"
      data-bs-ride="carousel"
    >
      {/* Images */}
      <div className="carousel-inner relative w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item float-left w-full ${
              selectedImg === index ? "active" : ""
            }`}
          >
            <img src={image.image_location} className="block w-full" alt="" />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
