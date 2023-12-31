import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useCart } from "./ContextReducers";
import { Link } from "react-router-dom";
import img from "../images/img (3).jpg";

const Card = (props) => {
  let dispatch = useDispatch();
  let data = useCart();

  const priceRef = useRef();

  let options = props.options;
  let priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  // const handleAddToCart = async () => {
  //   let food = [];
  //   for (const item of data) {
  //     if (item.id === props.foodItem._id) {
  //       food = item;

  //       break;
  //     }
  //   }

  //   if (food != []) {
  //     if (food.size === size) {
  //       await dispatch({
  //         type: "UPDATE",
  //         id: props.foodItem._id,
  //         price: finalPrice,
  //         qty: qty,
  //       });
  //       return;
  //     }

  //     await dispatch({
  //       type: "ADD",
  //       id: props.foodItem._id,
  //       name: props.foodItem.name,
  //       price: finalPrice,
  //       qty: qty,
  //       size: size,
  //     });

  //     console.log(data);
  //   }
  // };
  
  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    if (food != []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.ImgSrc,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });

    // setBtnEnable(true)
  };
  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div
      className="card card-hover mt-3 bg-dark text-white"
      style={{ width: "18rem", maxHeight: "400px" }}
    >
      <img
        src={props.foodItem.img}
        height="300"
        className="card-img-top"
        alt="..."
        style={{ height: "180px", objectFit: "Fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>

        <div className="container w-100">
          <select
            className="m-2 h-100 hover bg-ssuccess rounded"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from({ length: 6 }, (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="m-2 h-100 hover bg-ssuccess rounded"
            ref={priceRef}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline h-100 fs-5 bold mx-1">₹{finalPrice}/-</div>
        </div>
        <hr></hr>
        <button
          className={`btn border hover btn-sduccess justify-center ms-2`}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
