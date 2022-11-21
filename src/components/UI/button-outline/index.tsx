import React from "react";

type ButtonOutlinePropsType = {
  title: string;
  onClick?: () => void;
};

const ButtonOutline: React.FC<ButtonOutlinePropsType> = ({
  title,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block rounded border-2 border-blue-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-blue-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
    >
      {title}
    </button>
  );
};

export default ButtonOutline;
