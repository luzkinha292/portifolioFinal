import { useEffect, useState } from "react";
import Home from "./Home";
import Login from '../Login';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulate user authentication status
        const mockAuthCheck = () => {
            // Replace this with your own logic for checking user authentication status
            const authenticatedUser = { name: "John Doe" }; // or null if not authenticated
            setUser(authenticatedUser);
        };

        mockAuthCheck();
    }, []);

    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;
