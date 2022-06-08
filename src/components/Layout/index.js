import React from "react";
import MainNavbar from '../Navbar'

function MainLayout(props){
    return(
        <div className="Layout">
             <MainNavbar />
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}
export default MainLayout;