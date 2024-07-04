// @ts-nocheck
import React from 'react'
import './navbar.css';
import { IoBag } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    return (
        <section id='Navbar'>
            <div className="navContainer">
                <ul>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Kids</a></li>
                    <li><a href="">New & Featured</a></li>
                    <li><a href="">Gift</a></li>
                </ul>

                <div className="hamburger">
                    <RxHamburgerMenu />
                </div>

                <h2>Tulos</h2>

                <div className="navIcons">
                    <IoBag />
                    <CiSearch />
                    <a href="">Login</a>
                </div>
            </div>
        </section>
    )
}

export default Navbar