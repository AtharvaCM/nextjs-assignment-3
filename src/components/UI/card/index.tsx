import React from "react";
import Button from "../button";
import ButtonOutline from "../button-outline";

type CardPropsType = {
  src: string;
  alt: string;
  cardTitle: string;
  content: string;
  btnTitle: string;
  btnOutlineTitle: string;
};

const Card: React.FC<CardPropsType> = ({
  src,
  alt,
  cardTitle,
  content,
  btnTitle,
  btnOutlineTitle,
}) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={src} alt={alt} />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {cardTitle}
          </h5>
          <p className="text-gray-700 text-base mb-4">{content}</p>
          <Button title={btnTitle} />
          <ButtonOutline title={btnOutlineTitle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
