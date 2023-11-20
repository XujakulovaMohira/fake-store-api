import "./home.css";
import { useState, useEffect } from "react";

function Women() {
  const [fakeApi, setFakeApi] = useState([]);
  console.log(fakeApi);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((user) => {
        setFakeApi(user);
      });
  }, []);

  return (
    <div className="cards">
      {fakeApi.length &&
        fakeApi.map((user) => (
            <div className="card" key={user.id}>
              <div className="card_photo">
                <img src={user.image} alt="" />
              </div>
              <div className="card_title">
                <p className="category">
                  <span>Category: </span>
                  {user.category}
                </p>
              </div>
              <p className="title">
                <span>Title: </span> {user.title.slice(0, 25)}...
              </p>
              <p className="rating">
                <span>Count: </span> {user.rating.count}
              </p>
              <p className="rating">
                <span>Rating: </span> {user.rating.rate}
              </p>
              <p className="price">
                <span>Price: </span> {user.price}
              </p>
            </div>
        ))}
    </div>
  );
}

export default Women;