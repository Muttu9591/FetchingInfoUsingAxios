import React from "react";

function Home() {
  const UsersHandle = () => {
    window.location = "Users";
  };
  return (
    <div>
      <h2>Home page</h2>
      <button onClick={UsersHandle}>Users</button>
    </div>
  );
}
export default Home;
