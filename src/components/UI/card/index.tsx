import React, { ReactNode } from "react";
import Button from "../button";
import ButtonOutline from "../button-outline";

type CardPropsType = {
  src: string;
  alt: string;
  href: string;
  cardTitle: string;
  children?: ReactNode;
  btnTitle: string;
  price: number;
  btnOutlineTitle: string;
};

const Card: React.FC<CardPropsType> = ({
  src,
  alt,
  href,
  cardTitle,
  children,
  price,
  btnTitle,
  btnOutlineTitle,
}) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm flex flex-col flex-1">
        {/* Image */}
        <div>
          <a href={href} data-mdb-ripple="true" data-mdb-ripple-color="light">
            <figure className="h-[13rem]" role={"figure"}>
              <img className="rounded-t-lg h-full w-full" src={src} alt={alt} />
            </figure>
          </a>
          <span className="absolute p-1 mt-[-1rem] bg-black text-white">
            ${price}
          </span>
        </div>
        {/* Content */}
        <div className="px-6 pt-6 flex-1">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {cardTitle}
          </h5>
          {children}
        </div>
        {/* Card Actions */}
        <div className="px-6 pb-6 flex justify-between mt-auto">
          <Button title={btnTitle} />
          <ButtonOutline title={btnOutlineTitle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
