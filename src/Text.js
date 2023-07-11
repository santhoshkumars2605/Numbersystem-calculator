import React, { useState } from "react";
import './Text.css';
// import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
function Text()
{
    const[txt,name] = useState(0);
    const[resl,result] = useState("");
    const[arr,arr1] = useState("");
    var list = [];

    var isAlpha = function(ch){
        return typeof ch === "string" && ch.length === 1
               && ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"));
    }
    
    const decode=()=>{
        var res="";
        var l;
        var k=0;
        for(let i=0;i<txt.length;i++)
        {
           if(isAlpha(txt[i])){ 
                l = txt[i].charCodeAt(0);
                l = String(l)
                list[k] = l;
                k = k+1;
                res = res+l+" ";
                
           }
        }
        result(res);
        var m,r;
        var str="";
        for(let j=0;j<list.length;j++)
        {
            if(list[j] === " "){
                continue
            }
            else{
                m = parseInt(list[j]);
                r = m.toString(2);
                str = str+r+" "; 
            }     
        }
        arr1(str);

    }
    return(
        <>
        <div className="app">
            <div className="container">
                <center><h3>Decode your message</h3></center><br />
                <input type= "text" placeholder="Enter the Text" className="form-control" onChange={(e)=>name(e.target.value)}></input><br></br>
                <div class="d-grid gap-2 col-6 mx-auto"><button className="btn btn-info" onClick={decode}>Encode</button></div><br></br>
                <input type="text" className="form-control" value={resl} placeholder = "Ascii value"></input><br></br>
                <input type="text" className="form-control" value={arr} placeholder = "Binary value "></input>
            </div>
        </div>
        {/* <div className="app">
            <div className="container">
                <label className="form-label" id="txt">Enter the Text:</label>
                <input type= "text" placeholder="Text formate" className="form-control" onChange={(e)=>name(e.target.value)}></input><br></br>
                <div class="d-grid gap-2 col-6 mx-auto"><button className="btn btn-info" onClick={decode}>Decode</button></div><br></br>
                <input type="text" className="form-control" value={resl} placeholder = "Ascii value"></input><br></br>
                <input type="text" className="form-control" value={arr} placeholder = "Binary value "></input>
            </div>
        </div> */}
        </>

    );
}
export default Text;