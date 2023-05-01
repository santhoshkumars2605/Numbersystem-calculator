import React from "react";
import { useState } from "react";
function Indc()
{
    const[count,setCount] = useState(0);
    const[dec,decimal1] = useState(0);
    const[con,cont] = useState("");
    
    const decimal=(e)=>{
        var bin = parseInt(dec);
        // var b = bin;
        // var t,i,j;
        // var arr = new Array(100);
        var con1= bin.toString(2);
        // while(b>0){
        //     t = b%10;
        //     arr[i] = t;
        //     i = i+1;
        //     t = t/10;
        // }
        // for(j=0;i<arr.length;i++){
        //     con1+=arr[j]+"";
        // }
        cont(con1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <br></br>
            Enter decimal:<input type = "text" onChange={(e)=>decimal1(e.target.value)}></input>
            <button onClick={decimal}>Binary</button>
            <input type="text" value={con}></input>
        </>
    );
}
export default Indc;