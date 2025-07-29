import React,{useState} from "react";
 import './add.css';
import axios from 'axios';

export default function Add(){
    // const [userid, setUserId]= useState("");
    const [empNo, setEmpNo]= useState("");
    const [empName, setEmpName]= useState("");
    const [empSal, setEmpSal]= useState("");

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    async function addHandler(e)
    {
        e.preventDefault();
        try
        {
           const response = await axios.post(`${BASE_URL}/api/employees`,
            {empNo,empName,empSal});
            //alert(JSON.stringify(response.data,null,2));
            alert(response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }
    return (
        <div className="Add-container">
            <h1>Employee Details</h1>
            <form onSubmit={addHandler}>
                
                <input
                type="text"
                placeholder="Employee No"
                value={empNo}
                onChange={(e)=> setEmpNo(e.target.value)}/>
                <br></br>


                <input
                type="text"
                placeholder="Employee Name"
                value={empName}
                onChange={(e)=> setEmpName(e.target.value)}/>
                <br></br>


                <input
                type="salary"
                placeholder="Salary"
                value={empSal}
                onChange={(e)=> setEmpSal(e.target.value)}/>

                <br></br>
                <input type="submit" value="Submit"/>


            </form>
        </div>
    )





}
