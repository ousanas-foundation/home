import React from "react";
import DaoNavbar from "../DaoNavbar";

function DaoLayout(props){
    return(
        <div className="Layout">
             <DaoNavbar />
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}
export default DaoLayout;