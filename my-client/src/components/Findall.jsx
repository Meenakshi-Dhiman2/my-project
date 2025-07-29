import axios from "axios";
import { useState } from "react";
import '../style/Findall.css';

export function Findall() {
    const [employees, setEmployees] = useState([]);

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    async function findAllHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`${BASE_URL}/api/employees`);
            setEmployees(response.data);
        } catch (err) {
            alert("Error fetching records: " + (err.response?.data?.message || err.message));
        }
    }

    return (
        <div className="Findall-container">
            <h2>Employee Records</h2>
            <hr />
            <form onSubmit={findAllHandler}>
                <button type="submit">Get All Record</button>
            </form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>No</th>
                            <th>Name</th>
                            <th>Sal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? (
                            employees.map(emp => (
                                <tr key={emp._id}>
                                    <td>{emp._id}</td>
                                    <td>{emp.empNo}</td>
                                    <td>{emp.empName}</td>
                                    <td>{emp.empSal}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No Record</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
