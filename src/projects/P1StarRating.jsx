import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Button from "@mui/material/Button";

const P1StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <div className="size dflex flex-col">
        <h1 className="font-bold text-3xl text-[#f00]">Star Rating</h1>
        <div className="py-5 flex gap-2">
          {/* Since the array contains undefined values, because its just an array of empty slots we don't need to use this values hence its conventionally replace with an underscore (_) to indicate that the variable is unused */}
          {[...Array(5)].map((_, index) => {
            const starRating = index + 1;
            return (
              <FaStar
                key={starRating}
                onClick={() => setRating(starRating)}
                className={`text-3xl cursor-pointer ${
                  starRating <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-black"
                }`}
                onMouseEnter={() => setHover(starRating)}
                onMouseLeave={() => setHover(0)}
              />
            );
          })}
        </div>
        {rating > 0 ? (
          <Button onClick={() => setRating(0)} variant="contained">
            Reset Rating
          </Button>
        ) : null}
        <h1 className="text-2xl font-semibold">Star Rating : {rating}</h1>
      </div>
    </div>
  );
};

export default P1StarRating;
