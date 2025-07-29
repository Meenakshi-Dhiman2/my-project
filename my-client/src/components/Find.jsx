import axios from "axios";
import { useState } from "react";
import '../style/Find.css';

export function Find() {
    const [id, setId] = useState("");
    const [employee, setEmployee] = useState(null);

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    async function getData(e) {
        try {
            const response = await axios.get(`${BASE_URL}/api/employees/${id}`);
            setEmployee(response.data);
        } catch (err) {
            setEmployee(null);
            alert("Employee Not Found: " + (err.response?.data?.message || err.message));
        }
    }

    return (
        <div className="Find-container">
            <h3>Find Record By ID</h3>
            <hr />
            <input
                type="text"
                placeholder="Enter ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <br /><br />
            <button onClick={getData}>Find Data</button>
            <br />
            {employee && (
                <div>
                    <h4>Employee Details</h4>
                    <hr />
                    <p>Emp No is: {employee.empNo}</p>
                    <p>Emp Name is: {employee.empName}</p>
                    <p>Emp Sal is: {employee.empSal}</p>
                </div>
            )}
        </div>
    );
}
