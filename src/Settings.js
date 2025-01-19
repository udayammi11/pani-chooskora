import { useCompany } from "./CompanyContext";
import { useState } from "react";

const Settings = () => {
    const { company, updateCompany } = useCompany();
    const [newName, setNewName] = useState(company.name);
    const [newDp, setNewDp] = useState(company.dp);

    const handleUpdate = () => {
        updateCompany(newName, newDp);
    };

    return (
        <div>
            <h2>Current: {company.name}</h2>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input type="text" value={newDp} onChange={(e) => setNewDp(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default Settings;