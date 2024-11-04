import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaArrowCircleDown } from "react-icons/fa";

const P2Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    { title: "Accordion 1", content: "Content for accordion 1" },
    { title: "Accordion 2", content: "Content for accordion 2" },
    { title: "Accordion 3", content: "Content for accordion 3" },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  console.log("activeIndex", activeIndex);

  return (
    <div>
      <div className="size dflex flex-col gap-5 bg-[#feffcd]">
        <Button style={{ fontWeight: "bold" }} variant="contained">
          Simple Accordian
        </Button>
        <div>
          {items.length > 0 ? (
            <div className="dflex flex-col gap-5">
              {items.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => handleToggle(index)}
                    className="flex justify-between items-center bg-[#ff7d7d] w-[700px] h-[25px] p-[3%]"
                  >
                    <h1>{item?.title}</h1>
                    <FaArrowCircleDown />
                  </div>
                  {activeIndex === index ? (
                    <div className="flex justify-between items-center bg-[#ffbcbc] w-[700px] h-[25px] p-[3%]">
                      <h1>{item?.content}</h1>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default P2Accordian;
