import React, { useRef, useState } from "react";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  }

  return (
    <div className="flex flex-col" data-testid="accordion">
      <button
        className="box-border flex cursor-pointer appearance-none items-center justify-between py-6 focus:outline-none"
        onClick={toggleAccordion}
        role={"button"}
      >
        <p
          className="text-footnote light inline-block"
          role={"heading"}
          aria-level={4}
        >
          {title}
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Feather-arrows-chevron-down.svg"
          alt="Chevron icon"
          height={50}
          width={50}
          className={`${rotate} inline-block`}
          role={"img"}
        />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="transition-max-height overflow-auto duration-700 ease-in-out"
      >
        <div className="pb-10">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
