import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userData = {
      name: params.get("name"),
      email: params.get("email"),
      picture: params.get("picture"),
    };

    if (!userData.email) {
      navigate("/"); // Redirect if no user data
    } else {
      setUser(userData);
    }
  }, [location, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <img src={user.picture} alt="User" style={{ borderRadius: "50%" }} />
      <br />
      <button onClick={() => navigate("/")} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
