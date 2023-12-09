import React from "react";
import { Link } from "react-router-dom";
import img from "../images/img (3).jpg";

const Card = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div
      className="card mt-3 bg-dark text-white"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img src={props.imgSrc} height='300' className="card-img-top" alt="..." style={{height:"180px",objectFit:"Fill"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>

        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from({ length: 6 }, (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select className="m-2 h-100 bg-success rounded">
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import { Link } from "react-router-dom";
// import img from "../images/img (3).jpg";

// const Card = (props) => {

//   let options = props.options;
//   let priceOptions = Object.keys(options)

//   return (
//     <div className="card mt-3  bg-dark text-white" style={{ width: "18rem", maxHeight: "360px" }}>
//       <img src={img} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{ props.foodName}</h5>

//         <div className="container w-100">
//           <select className="m-2 h-100  bg-success rounded">
//             {Array.from({ length: 6 }, (e, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>

//           <select className="m-2 h-100  bg-success rounded">

//             {
//               priceOptions.map((data)=>{
//                 return <option key={data} value={data}>{ data}</option>
//               })
//             }
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
