import { useCompany } from "./CompanyContext";

const HomePage = () => {
    const { company } = useCompany();

    return (
        <div>
            <h1>Welcome to {company.name}</h1>
            <img src={company.dp} alt="Company Logo" width="100" />
        </div>
    );
};

export default HomePage;