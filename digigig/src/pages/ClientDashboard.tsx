import React, { useEffect, useState } from "react";
import { getContractWithSigner } from "../contracts/contractConnection";

const ClientDashboard: React.FC = () => {
    const [projectCount, setProjectCount] = useState<number>(0);

    const fetchProjectCount = async () => {
        try {
            const contract = await getContractWithSigner();
            const count = await contract.projectCounter();
            setProjectCount(count.toNumber());
        } catch (error) {
            console.error("Error fetching project count:", error);
        }
    };

    useEffect(() => {
        fetchProjectCount();
    }, []);

    return (
        <div>
            <h1>Client Dashboard</h1>
            <p>Current Project Count: {projectCount}</p>
            {/* Add more client-side features */}
        </div>
    );
};

export default ClientDashboard;
