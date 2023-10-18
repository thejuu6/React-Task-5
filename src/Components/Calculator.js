import React, {Component} from "react";
import { useState} from "react";

function Calculator() {
    const [birthdate,setDate]=useState();
    function calage()
    {
        
        const today=new Date();
        const birthDate=new Date(birthdate);
        const agedays=today-birthDate;
        const Ageday=Math.floor(agedays/(1000 * 60 * 60 * 24));
        const Ageyears=Math.floor(Ageday/365);
        const AgeMonths=Math.floor((Ageday%365)/30);
        const Agedays=Math.floor((Ageday%365)%30);
        document.getElementById("age").innerHTML="you are "+Ageyears+"Years,"+AgeMonths+"Months,"+Agedays+"Days old";
    }
     return(
        <div>
            <h1>Age Calculator</h1>
            <h3>Enter your date of birth</h3>
            <input type="date" onChange={e=>setDate(e.target.value)} name="dob" id="dob"/><br/><br></br>
            <button onClick={calage} style={{backgroundColor:'blue' }}>Calculate Age</button><br></br>
            <div id="age"></div>
        </div>
     );
}

export default Calculator;