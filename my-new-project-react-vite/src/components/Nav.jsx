import React from "react";
import QUESTSTEM from "../QUESTSTEM.jpg"

function Nav(){
    return(
        <div className="nav">
            {/* <h1>TechQuest</h1> */}
            <img src={QUESTSTEM} className="logo" alt="" />
            <div>
                <ul>
                    <li>
                         <a href="http://">HOME</a>
                    </li>
                    <li>
                        <a href="http://">ABOUT US</a>
                    </li>
                    <li>
                        <a href="http://">SERVICES</a>
                    </li>
                    <li>
                        <a href="http://">CONTACT US</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="http://"><i className="fa-brands fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="http://"><i className="fa-brands fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="http://"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="http://"><i className="fa-brands fa-x-twitter"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Nav;