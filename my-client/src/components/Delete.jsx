import axios from "axios";
import { useState } from "react"
import '../style/Delete.css';

export function Delete(){
    const[id,setId]=useState("");
    
    async function deleteData(e)
    {
        e.preventDefault();
        try
        {
const response = await axios.delete(`http://localhost:3000/api/employees/${id}`);
alert(response.data.message);
        }
        catch(err)
        {
            alert("Record Not FOund : " + err);

        }
    };
    return(
        <div className="Delete-container">
            <h3>Delete Record By ID</h3>
            <hr/>
            <form onSubmit={deleteData}>
            <input type="text" placeholder="Enter Id" value={id} onChange={e => setId(e.target.value)} required/>
            <br/><br/>
            <button type="submit">Remove Data ❌</button>
            </form>
        </div>
    )
}
