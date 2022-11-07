import "./main.css";
import "../Login/login.css";
import Ellipse1 from "../img/ellipse1.png";
import Ellipse2 from "../img/ellipse2.png";
import Vector from "../img/vector.png";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <nav className="container">
        <img className="ellipse-first" src={Ellipse1} alt="logo" />
        <img className="ellipse-second" src={Ellipse2} alt="logo" />
        <img className="vector" src={Vector} alt="logo" />
        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </>
  );
};

export default Main;
