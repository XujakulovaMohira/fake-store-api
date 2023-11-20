import { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const [loading, setLoading] = useState(false);
  const [fakeApi, setFakeApi] = useState([]);
  console.log(fakeApi);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((user) => {
        setFakeApi(user);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="cards">
      {loading && (
        <div>
          <h1> Loading...</h1>
        </div>
      )}
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

export default Home;
