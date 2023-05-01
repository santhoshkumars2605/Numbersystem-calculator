import React from "react";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nums.css';
function Num()
{
    const[dec,decimal1] = useState(0);
    const[oct,octal1] = useState(0);
    const[hex,hexa1] = useState(0);
    const[bi,decbin] = useState(0);
    const[oc,decoct] = useState(0);
    const[hx,dechex] = useState(0);
    const[con,cont] = useState("");
    const[con1,cont1] = useState("");
    const[con2,cont2] = useState("");
    const[var1,vari1] = useState("");
    const[var2,vari2] = useState("");
    const[var3,vari3] = useState("");
    
    const decimal=(e)=>{
        var bin = parseInt(dec);
        var con1= bin.toString(2);
        cont(con1)
    }
    const octal=(e)=>{
        var o = parseInt(oct);
        var c = o.toString(8);
        cont1(c);
    }
    const hexa=(e)=>{
        var h = parseInt(hex);
        var r = h.toString(16);
        cont2(r);
    }
    const binary=(e)=>{
        var b = parseInt(bi,2);
        vari1(b);
    }
    const decimaloct=(e)=>{
        var o = parseInt(oc,8);
        vari2(o);
        
    }
    const decmialhexa=(e)=>{
        var h = parseInt(hx,16);
        vari3(h);
    }
    const reset=()=>{
        decimal1(" ");
        octal1(" ");
        hexa1(" ");
        decbin(" ");
        decoct(" ");
        dechex(" ");
        cont(" ");
        cont1(" ");
        cont2(" ");
        vari1(" ");
        vari2(" ");
        vari3(" ");
    }
    return(
        <>
            <Navbar bg="info" variant="info" expand="md">
                <Container>
                    <Navbar.Brand href="#home">SK's Calc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                    <Navbar.Collapse>   
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/">DecodeMsg</Nav.Link>
                        <Nav.Link href="/numeric">NumberSystemCalculator</Nav.Link>
                    </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
            <div className="tot">
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
            </div>
        </>
    );
}
export default Num;