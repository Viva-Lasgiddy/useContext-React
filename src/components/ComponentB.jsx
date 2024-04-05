import React from "react";
import { useContext } from "react";
import { nameContext } from "../App";

import CompC from "./ComponentC";



const CompB = () =>{

    let b = useContext(nameContext)


    return(
        <div className="box">
            <h1>Component B</h1>
            <h2>Go Home {b}</h2>
            
            <CompC/>
        </div>
    )
}

export default CompB