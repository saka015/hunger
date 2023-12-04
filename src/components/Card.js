import React from "react";
import { Link } from "react-router-dom";
import img from "../images/img (3).jpg";


const Card = () => {
  return (
    <div className="card mt-3 bg-dark text-white" style={{ width: "18rem", maxHeight: "360px" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded">
            {Array.from({ length: 6 }, (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select className="m-2 h-100  bg-success rounded">
            <option value='half'>Half</option>
            <option value='full'>Full</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Card;
