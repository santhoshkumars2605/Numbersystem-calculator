import React from "react";
import { useState } from "react";
import './Nums.css';
function Num()
{
   
    const[number,setNumber] = useState("");
    const[converstion,setCon] = useState("");
    // const[button,setButton] = useState("");
    const[result ,setResult] = useState("");
    const Settext = (e)=>{
        setResult("")
        setNumber("")
        setCon(e.target.value)
    }
    function Main(e){
        e.preventDefault()
        const decimal=(e)=>{
            var bin = parseInt(number);
            if(isNaN(bin)) setResult("Enter valid Number")
            else{
            var con1= bin.toString(2);
            setResult(con1)
            }
        }
        const octal=(e)=>{
            var o = parseInt(number);
            if(isNaN(o)) setResult("Enter valid Number")
            else{
            var c = o.toString(8);
            setResult(c);
            }
        }
        const hexa=(e)=>{
            var h = parseInt(number);
            if(isNaN(h)) setResult("Enter valid Number")
            else {
            var r = h.toString(16);
            setResult(r);
            }
        }
        const binary=(e)=>{
            var b = parseInt(number,2);
            if(isNaN(b)) setResult("Enter valid Number")
            else
            setResult(b);
        }
        const decimaloct=(e)=>{

            var o = parseInt(number,8);
            if(isNaN(o)) setResult("Warning value is "+number+" should be lesser for octal")
            else
            setResult(o);
            
        }
        const decmialhexa=(e)=>{
            var h = parseInt(number,16);
            setResult(h);
        }
       if(converstion === "Decimal to binary") decimal()
       else if(converstion === "Decimal to octal") octal()
       else if(converstion === "Decimal to hexadecimal") hexa()
       else if(converstion === "Binary to decimal") binary()
       else if(converstion === "Octal to decimal") decimaloct()
       else if(converstion === "Hexadecimal to decimal") decmialhexa()
       else console.log("Somethin Wrong")
        
        

    }
    return(
        <>
            <br />
            <div className="content1">
            <center><h3>NumberSystem Calculator</h3></center> <br />
            <div className="options">
                <select name="calculator" className="selectclass" onChange={Settext}>
                    <option value="Select Number Coverstion">Select Number Conversion</option>
                    <option value="Decimal to binary">Decimal to binary</option>
                    <option value="Decimal to octal">Decimal to octal</option>
                    <option value="Decimal to hexadecimal">Decimal to hexadecimal</option>
                    <option value="Binary to decimal">Binary to decimal</option>
                    <option value="Octal to decimal">Octal to decimal</option>
                    <option value="Hexadecimal to decimal">Hexadecimal to decimal</option>
                </select>
            </div>
            <br />
            <div className="formcontent">
                <form>
                    <div className="inputbox"><input value={number} type="text" onChange={(e)=> setNumber(e.target.value)} className="form-control number" placeholder="Enter the Number"/></div>
                    <br />
                    <center><button className="btn btn-info" onClick={(e)=> Main(e)}>Submit</button></center> <br />
                    <div className="resultnum"><h5 style={{color:"black"}}>{result}</h5></div>
                </form>
            </div>
            </div>
            {/* <div className="tot">
                <div className="container-md">
                    <div className="row">
                        <div className="col-md 6 col-sm-12">
                            <div className="bin">
                                <h3>Decimal to binary</h3>
                                <label className="form-label">Enter decimal: </label>
                                <input type = "text" className="form-control" onChange={(e)=>decimal1(e.target.value)}></input><br></br>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button onClick={decimal} id="btn" className = "btn btn-info">Binary</button>
                                </div>
                                <label className="form-label"></label>
                                <input type="text" className="form-control" value={con} disabled></input>
                                <h3>Decimal to Octal</h3>
                                <label className="form-label">Enter decimal:</label>
                                <input type = "text" className="form-control" onChange={(e)=>octal1(e.target.value)}></input><br></br>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-info" id="btn" onClick={octal}>Octal</button>
                                </div>
                                <label className="form-label"></label>
                                <input type="text" className="form-control" value={con1} disabled></input>
                                <h3>Decimal to Hexadecimal</h3>
                                <label className="form-label">Enter decimal:</label>
                                <input type = "text" className="form-control" onChange={(e)=>hexa1(e.target.value)}></input><br></br>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <Button variant = "info" id="btn" onClick={hexa}>Hexadecimal</Button>
                                </div>
                                <label className="from-label"></label>
                                <input type="text" className="form-control" value={con2} disabled></input>
                                <br></br>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bin">
                                <h3>Decimal to binary</h3>
                                <label className="form-label">Enter Binary: </label>
                                <input type = "text" className="form-control" onChange={(e)=>decbin(e.target.value)}></input><br></br>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button onClick={binary} id="btn" className = "btn btn-info">Decimal</button>
                                </div>
                                <label className="form-label"></label>
                                <input type="text" className="form-control" value={var1} disabled></input>

                                <h3>Octal to Decimal</h3>
                                <label className="form-label">Enter Octal: </label>
                                <input type = "text" className="form-control" onChange={(e)=>decoct(e.target.value)}></input><br></br>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button onClick={decimaloct} id="btn" className = "btn btn-info">Decimal</button>
                                </div>
                                <label className="form-label"></label>
                                <input type="text" className="form-control" value={var2} disabled></input>

                                <h3>Hexadecimal to Decimal</h3>
                                <label className="form-label">Enter Hexadecimal: </label>
                                <input type = "text" className="form-control" onChange={(e)=>dechex(e.target.value)}></input><br></br>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button onClick={decmialhexa} id="btn" className = "btn btn-info">Decimal</button>
                                </div>
                                <label className="form-label"></label>
                                <input type="text" className="form-control" value={var3} disabled></input><br></br>
                            </div>
                          
                        </div>
                    </div>
                    <center><button className="btn btn-success" onClick={reset}>Reset</button></center>
                </div>
            </div> */}
        </>
    );
}
export default Num;