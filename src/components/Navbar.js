import React, {useState, useEffect} from "react";

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import "./Navbar.css"

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowSize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowSize);

        return () => window.removeEventListener("resize", handleWindowSize);
    }, []);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    // const closeMenu = () => {
    //     setNavbarOpen(false);
    // }

    const menuIcon = { color: "#7b7b7b", width: "20px", height: "20px" };

    return (
        <>
            <nav className="navBar">
            <button className="menuButton" onClick={handleToggle} >
                {navbarOpen ? (
                    <MdClose style={menuIcon} />
                ) : (
                    <FiMenu style={menuIcon} />
                )}
            </button>
            
            {/* <div className= {`menuNav ${navbarOpen ? " showMenu" : ""} flex-container`}>
            <ul className="flex-container">
                <li>Home</li>
                <li>Page 1</li>
                <li>Page 2</li>
            </ul>
            </div> */}

            <div className= {`menuNav ${navbarOpen ? " showMenu" : ""} flex-container`}>
                <div className="link"> Hello </div>
                <div className="link"> Page 1 </div>
                <div className="link"> Page 2 </div>
            </div>

            </nav>
        </>
    )
}
export default Navbar