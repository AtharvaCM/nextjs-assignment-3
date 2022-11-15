import React from "react";

type ButtonOutlinePropsType = {
  title: string;
};

const ButtonOutline: React.FC<ButtonOutlinePropsType> = ({ title }) => {
  return (
    <button
      type="button"
      className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {title}
    </button>
  );
};

export default ButtonOutline;
