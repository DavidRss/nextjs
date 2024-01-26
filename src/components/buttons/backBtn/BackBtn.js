import React from "react";
import arrowBack from "../../../assets/ic_arrow-left-3.svg";

function BackBtn(props) {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBackClick}
      className="text-primary flex items-end gap-3 text-2xl font-semibold leading-8 hover:scale-105 transition-all"
    >
      <img src={arrowBack} alt="back button" />
      {props.title}
    </button>
  );
}

export default BackBtn;
