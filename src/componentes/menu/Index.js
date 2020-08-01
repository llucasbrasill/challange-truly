import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
export default function Menu() {
  return (
    <>
      <nav>
        <ul className="Menu">
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/ticket">Tickets</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
