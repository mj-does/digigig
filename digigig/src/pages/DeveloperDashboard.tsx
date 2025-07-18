import React, { useEffect, useState } from "react";
import { getContractWithSigner } from "../contracts/contractConnection";

const DeveloperDashboard: React.FC = () => {
    const [myProjects, setMyProjects] = useState<any[]>([]);

    const fetchMyProjects = async () => {
        try {
            const contract = await getContractWithSigner();
            const projectCounter = await contract.projectCounter();

            const projects = [];
            for (let i = 1; i <= projectCounter.toNumber(); i++) {
                const project = await contract.getProject(i);
                projects.push(project);
            }
            setMyProjects(projects);
        } catch (error) {
            console.error("Error fetching developer projects:", error);
        }
    };

    useEffect(() => {
        fetchMyProjects();
    }, []);

    return (
        <div>
            <h1>Developer Dashboard</h1>
            <ul>
                {myProjects.map((project, index) => (
                    <li key={index}>
                        Project #{index + 1} - Status: {Object.keys(project.status)[0]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeveloperDashboard;
