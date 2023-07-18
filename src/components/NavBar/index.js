import React, { useState } from 'react'
import "./index.css"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsMusicNote, BsShareFill } from "react-icons/bs"
import { Link, NavLink } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { LiaGripLinesSolid } from 'react-icons/lia'

const headerLinks = [
    { tabName: "PORTFOLIO", linkTo: "/", id: "1" },
    { tabName: "ABOUT", linkTo: "/About", id: "2" },
    { tabName: "CONTACT", linkTo: "/Contact", id: "3" },

];

const Navbar = () => {

    const [navIsOpend, setNavIsOpend] = useState(false)
    return (
        <>
            <div className="navbar-main-container">
                <div className="header-main-div">
                    <div>
                        <h1 className='nav-bar-logo-title'>Jinimol Sundar Raj</h1>
                    </div>
                    <div className="nav-bar-right-div">
                        <div className="nav-bar-menu-items-div">
                            {headerLinks.map((each) => (
                                <NavLink
                                    exact
                                    className={({ isActive }) =>
                                        isActive ? "headerActiveTab" : "head-options"
                                    }
                                    to={each.linkTo}
                                >
                                    {each.tabName}
                                </NavLink>
                            ))}
                            {/* <Link to="/"> <p>PORTFOLIO</p></Link>
                        <Link to="/About"> <p>ABOUT</p></Link>
                        <Link to="/Contact"> <p>CONTACT</p></Link> */}
                        </div>
                        <div className='nav-bar-icons-div'>
                            <AiOutlineTwitter />
                            <BsMusicNote />
                            <AiFillInstagram />
                            <BsShareFill />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile nav bar */}
            <div className='mobile-nav-bar'>
                <div >
                    <LiaGripLinesSolid onClick={() => setNavIsOpend(true)} className='nav-open-icon' />
                </div>
                <div className='mobile-nav-logo-div'>
                    <h2 className='nav-bar-logo-title'>Jinimol Sundar Raj</h2>
                </div>
                {navIsOpend === true && <div className='mobile-nav-opend'>
                    <div>
                        <RxCross2 className='mobile-nav-cross-icon' onClick={() => setNavIsOpend(false)} />
                        <div className='mobile-nav-items'>
                            {headerLinks.map((each) => (
                                <NavLink onClick={() => setNavIsOpend(false)}
                                    exact
                                    className={({ isActive }) =>
                                        isActive ? "headerActiveTab" : "head-options"
                                    }
                                    to={each.linkTo}
                                >
                                    {each.tabName}
                                </NavLink>
                            ))} </div>
                        <div className='nav-bar-icons-div'>
                            <AiOutlineTwitter />
                            <BsMusicNote />
                            <AiFillInstagram />
                            <BsShareFill />
                        </div>
                    </div>
                </div>}

            </div>
        </>
    )
}

export default Navbar