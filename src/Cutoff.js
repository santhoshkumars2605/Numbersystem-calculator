import React from "react";
import { useState } from "react";
import './Nums.css'
function Cutoff()
{
    const [maths,mathmark] = useState(0);
    const [physics,phymark] = useState(0);
    const [chemistry,chemmark] = useState(0);
    const [biology,biomark] = useState(0);
    const [cutoff,cutoffchange] = useState(" ");
    const resulttnea=(e) => {
        e.preventDefault();
        var math = parseInt(maths);
        var phy = parseInt(physics);
        var chem = parseInt(chemistry);
        var res = math+((phy+chem)/2);
        cutoffchange(res);
    }
    const resultbio=(e) => {
        e.preventDefault();
        var bio = parseInt(biology);
        var phy = parseInt(physics);
        var chem = parseInt(chemistry);
        var res1 = bio+((phy+chem)/2);
        cutoffchange(res1);
    }
    const reset=()=>{

        mathmark(" ");
        phymark(" ");
        chemmark(" ");
        biomark(" ");
        cutoffchange(" ");
    }
    return(
        <>
            <form style={{color:"black"}}>
            <div className="app">
            <div className="container">
                <center><h3>Cuttoff Calculator</h3></center> <br />
            <input type="text" className="form-control" onChange={(e)=> mathmark(e.target.value)} placeholder="Enter Maths Marks"></input> <br />
            <input type="text" className="form-control" onChange={(e)=>phymark(e.target.value)} placeholder="Enter Physiscs Mark"></input> <br />
            <input type="text" className="form-control" onChange={(e)=>chemmark(e.target.value)} placeholder="Enter Chemistry Mark"></input> <br />
            <input type="text" className="form-control" onChange={(e)=>biomark(e.target.value)} placeholder="Enter Biology Mark"></input> <br />
            <input type="text" className="textbox"  placeholder="Result" value = {cutoff} style={{color:"black"}} /> 
            <div className="cutt"> <br />
                <button className="d-grid gap-2 col-6 mx-auto btn btn-info" onClick={resulttnea} style={{color:"black"}}>TNEA</button> <br />
                <button className="d-grid gap-2 col-6 mx-auto btn btn-info" onClick={resultbio} style={{color:"black"}}>Medical</button> <br />    
                <button className="btn btn-info" onClick={reset} style={{color:"black"}}>RESET</button> <br /> <br />
            </div>
           
            </div>
            </div>
            </form>
        </>
    );
}

export default Cutoff;