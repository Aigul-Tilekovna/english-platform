import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-text">English Adventure</div>

      <div className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/levels">Уровни</Link>
      </div>
    </div>
  );
}