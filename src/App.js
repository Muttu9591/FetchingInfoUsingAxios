import "./styles.css";
import Navbar from "./Navbar";
import FetchAPI from "./FetchAPI";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Link to="/About">About</Link> */}

      <FetchAPI />
    </div>
  );
}
