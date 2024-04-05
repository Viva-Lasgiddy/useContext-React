import React from "react";
import { useContext } from "react";
import { nameContext } from "../App";



const CompC = () =>{

    let a = useContext(nameContext)


    return(
        <div className="box">
            <h1>Component C</h1>
            <h2> Goodbye {a}</h2>
        </div>
    )
}

export default CompC