import React from "react";
import { useState } from "react";
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
            <form className="from-groups">
            <label>Enter MathsMark: <input type="text" className="from-control" onChange={(e)=> mathmark(e.target.value)}></input></label>
            <label>Enter physicsMark: <input type="text" onChange={(e)=>phymark(e.target.value)}></input></label>
            <label>Enter ChemistryMark: <input type="text" onChange={(e)=>chemmark(e.target.value)}></input></label>
            <label>Enter BiologyMark: <input type="text" onChange={(e)=>biomark(e.target.value)}></input></label>
            <button onClick={resulttnea}>TNEA</button>
            <button onClick={resultbio}>Medical</button>
            <button onClick={reset}>RESET</button>
            <input type="text" value = {cutoff}></input>
            </form>
            
        </>
    );
}

export default Cutoff;