import React from "react";

function Card() {
  return (
    <div className="w-70 h-75 bg-amber-500 p-2 shadow-lime-900 ">
      This is Card component
      <img
        src=""
        alt=""
        className="w-full  h-40 rounded-full shadow-2xs bg-red-400"
      />
      <h3 className="text-white font-extrabold text-2xl text-center mt-2">Title</h3>
      <p className="text-gray-300 text-center text-xl">Description</p>
    </div>
  );
}

export default Card;
