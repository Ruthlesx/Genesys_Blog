import React from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import "@/app/globals.css";
import { navItems } from "./nav-items-data";



const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-item">
          <li className="nav-logo">
            <a>Genesys Blog</a>
          </li>

          {navItems.map((item, index) => (
            <NavItem title={item.title} url={item.url} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
