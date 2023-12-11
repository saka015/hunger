// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import NavbarEl from "../components/NavbarEl";

// export default function MyOrder() {
//   const [orderData, setorderData] = useState([]);

//   const fetchMyOrder = async () => {
//     console.log(localStorage.getItem("userEmail"));
//     await fetch("http://localhost:5000/api/myOrderData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: localStorage.getItem("userEmail"),
//       }),
//     }).then(async (res) => {
//       let response = await res.json();
//       await setorderData(response);
//     });

//     // await res.map((data)=>{
//     //    console.log(data)
//     // })
//   };

//   useEffect(() => {
//     fetchMyOrder();
//   }, []);

//   return (
//     <div>
//       <div>
//         <NavbarEl />
//       </div>

//   <div className="container">
//     <div className="row">
//       {orderData.length !=0
//         ? Array(orderData).map((data) => {
//             return data.orderData
//               ? data.orderData.order_data
//                   .slice(0)
//                   .reverse()
//                   .map((item) => {
//                     return item.map((arrayData) => {
//                       return (
//                         <div>
//                           {arrayData.Order_date ? (
//                             <div className="m-auto mt-5">
//                               {(data = arrayData.Order_date)}
//                               <hr />
//                             </div>
//                           ) : (
//                             <div className="col-12 col-md-6 col-lg-3">
//                               <div
//                                 className="card mt-3"
//                                 style={{
//                                   width: "16rem",
//                                   maxHeight: "360px",
//                                 }}
//                               >
//                                 <img
//                                   src={arrayData.img}
//                                   className="card-img-top"
//                                   alt="..."
//                                   style={{
//                                     height: "120px",
//                                     objectFit: "fill",
//                                   }}
//                                 />
//                                 <div className="card-body">
//                                   <h5 className="card-title">
//                                     {arrayData.name}
//                                   </h5>
//                                   <div
//                                     className="container w-100 p-0"
//                                     style={{ height: "38px" }}
//                                   >
//                                     <span className="m-1">
//                                       {arrayData.qty}
//                                     </span>
//                                     <span className="m-1">
//                                       {arrayData.size}
//                                     </span>
//                                     <span className="m-1">{data}</span>
//                                     <div className=" d-inline ms-2 h-100 w-20 fs-5">
//                                       ₹{arrayData.price}/-
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       );
//                     });
//                   })
//               : "";
//           })
//         : ""}
//     </div>
//   </div>

//       <Footer />
//     </div>
//   );
// }

//neww code

import React, { useEffect, useState } from "react";
import NavbarEl from "../components/NavbarEl";
import Footer from "../components/Footer";

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail");
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setOrderData(Array(data)); // Assuming your API directly returns an array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <NavbarEl />

      <div className="container">
        <div className="row">
          {orderData.length !== 0 &&
            orderData.map((data) =>
              data.orderData
                ? data.orderData.order_data
                    .slice(0)
                    .reverse()
                    .map((item) =>
                      item.map((arrayData) =>
                        arrayData.Order_date ? (
                          <div
                            key={arrayData.Order_date}
                            className="m-auto mt-5"
                          >
                            {arrayData.Order_date}
                            <hr />
                          </div>
                        ) : (
                          <div
                            key={arrayData.id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <div
                              className="card mt-3"
                              style={{ width: "16rem", maxHeight: "360px" }}
                            >
                              {/* <img
                                src={arrayData.img}
                                className="card-img-top"
                                alt="..."
                                style={{ height: "120px", objectFit: "fill" }}
                              /> */}
                              <div className="card-body">
                                <h5 className="card-title">{arrayData.name}</h5>
                                <div
                                  className="container w-100 p-0"
                                  style={{ height: "38px" }}
                                >
                                  <span className="m-1">{arrayData.qty}</span>
                                  <span className="m-1">{arrayData.size}</span>
                                  <span className="m-1">
                                    {arrayData.Order_date}
                                  </span>
                                  <div className="d-inline ms-2 h-100 w-20 fs-5">
                                    ₹{arrayData.price}/-
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )
                    )
                : null
            )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
