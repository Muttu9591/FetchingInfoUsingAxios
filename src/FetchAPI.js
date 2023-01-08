import React, { useEffect, useState } from "react";
import axios from "axios";
import FetchCss from "./FetchAPI.css";

function FetchAPI() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setMyData(response.data));
  }, []);
  return (
    <>
      <h2>Show Data</h2>
      <div className="grid">
        {myData.map((item) => {
          const { id, title, body } = item;
          return (
            <div className="card" key={id}>
              <h4>{id}</h4>;<h2>{title}</h2>;<h4>{body}</h4>;
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FetchAPI;
