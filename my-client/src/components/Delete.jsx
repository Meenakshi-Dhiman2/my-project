import axios from "axios";
import { useState } from "react";
import '../style/Delete.css';

export function Delete() {
    const [id, setId] = useState("");

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    async function deleteData(e) {
        e.preventDefault();
        try {
            const response = await axios.delete(`${BASE_URL}/api/employees/${id}`);
            alert(response.data.message);
        } catch (err) {
            alert("Record Not Found: " + (err.response?.data?.message || err.message));
        }
    }

    return (
        <div className="Delete-container">
            <h3>Delete Record By ID</h3>
            <hr />
            <form onSubmit={deleteData}>
                <input
                    type="text"
                    placeholder="Enter ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit">Remove Data</button>
            </form>
        </div>
    );
}
