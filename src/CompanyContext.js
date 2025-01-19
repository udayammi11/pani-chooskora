import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
    const [company, setCompany] = useState({ name: "", dp: "" });

    // Fetch from backend
    useEffect(() => {
        axios.get("http://localhost:5001/api/company")
            .then((response) => setCompany(response.data))
            .catch((error) => console.error("Error fetching company data:", error));
    }, []);

    // Update company details
    const updateCompany = async (newName, newDp) => {
        try {
            await axios.post("http://localhost:5001/api/company", { name: newName, dp: newDp });
            setCompany({ name: newName, dp: newDp });
        } catch (error) {
            console.error("Error updating company:", error);
        }
    };

    return (
        <CompanyContext.Provider value={{ company, updateCompany }}>
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => useContext(CompanyContext);