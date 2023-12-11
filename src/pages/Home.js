import React, { useState, useEffect } from "react";
import NavbarEl from "../components/NavbarEl";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import img1 from "../images/img (1).jpg";
import img2 from "../images/img (2).jpg";
import img3 from "../images/img (3).jpg";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <NavbarEl />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel-div">
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?w=826&t=st=1702325602~exp=1702326202~hmac=e216e6e9436c56b9be56237104a8265cfc52501bbd616365383c8d96bbfc672a"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg&ga=GA1.1.983979830.1702325581&semt=ais"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/premium-photo/table-full-food-including-rice-curry-plate-food_900958-7307.jpg?size=626&ext=jpg&ga=GA1.1.983979830.1702325581&semt=ais"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container m-3 gap-3">
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div className="gap-3 row mb-3 " key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem && foodItem.length > 0 ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>Error loading</div>
                )}
              </div>
            );
          })
        ) : (
          <div>Error loading</div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import NavbarEl from "../components/NavbarEl";
// import Footer from "../components/Footer.js";
// import Card from "../components/Card.js";
// import Carousel from "../components/Carousel";

// const Home = () => {
//   // data backend se lane k liye do states lagenge :

//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("http://localhost:5000/api/foodData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     response = await response.json();

//     // console.log(response[0], response[1]);

//     setFoodItem(response[0]);
//     setFoodCat(response[1]);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <div>
//         <NavbarEl />
//       </div>
//       <div>
//         <Carousel />
//       </div>
//       <div className="container m-3  gap-3">
//         {foodCat && foodCat.length > 0 ? (
//           foodCat.map((data) => {
//             return (
//               <div className="gap-3 row mb-3 ">
//                 <div key={data._id} className="fs-3 m-3">
//                   {data.CategoryName}
//                 </div>
//                 <hr />
//                 {foodItem && foodItem.length > 0 ? (
//                   foodItem
//                     .filter((item) => item.CategoryName === data.CategoryName)
//                     .map((filterItems) => {
//                       return (
//                         <div
//                           key={filterItems._id}
//                           className="col-12 col-md-6 col-lg-3 "
//                         >
//                           <Card foodName={filterItems.name} />
//                           options={filterItems.options[0]}
//                           imgSrc={filterItems.img}
//                         </div>
//                       );
//                     })
//                 ) : (
//                   <div>Error loading</div>
//                 )}
//               </div>
//             );
//           })
//         ) : (
//           <div>Error loading</div>
//         )}
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;
