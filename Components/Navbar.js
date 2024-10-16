import React from 'react'
import Link from 'next/link';
import NavItem from './NavItem'
import "@/app/globals.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-item">
          <li className="nav-logo">
            <a>Genesys Blog</a>
          </li>

          

            <NavItem title={"News"} url={"/News"} />
            <NavItem title={"Politics"} url={"/Politics"} />
            <NavItem title={"Entertainment"} url={"/Entertainment"} />
            <NavItem title={"Technology"} url={"/Technology"} />
            <NavItem title={"Sports"} url={"/Sports"} />
            <NavItem title={"Education"} url={"/Education"} />

         


            <NavItem title={"Login"} url={"/Login"} />

          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar