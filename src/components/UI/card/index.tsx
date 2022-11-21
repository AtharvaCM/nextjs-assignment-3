import React, { ReactNode } from "react";
import Link from "next/link";

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
      <div className="flex max-w-sm flex-1 flex-col rounded-lg bg-white shadow-lg">
        {/* Image */}
        <div>
          <Link href={href}>
            <a data-mdb-ripple="true" data-mdb-ripple-color="light">
              <figure className="h-[13rem]" role={"figure"}>
                <img
                  className="h-full w-full rounded-t-lg"
                  src={src}
                  alt={alt}
                />
              </figure>
            </a>
          </Link>
          <span className="absolute mt-[-1rem] bg-black p-1 text-white">
            ${price}
          </span>
        </div>
        {/* Content */}
        <div className="flex-1 px-6 pt-6">
          <h5 className="mb-2 text-xl font-medium text-gray-900">
            {cardTitle}
          </h5>
          {children}
        </div>
        {/* Card Actions */}
        <div className="mt-auto flex justify-between px-6 pb-6">
          <Button title={btnTitle} />
          <ButtonOutline title={btnOutlineTitle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
