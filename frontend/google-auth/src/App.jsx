import React from "react";

function App() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/google"; // Redirect to backend
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login with Google</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Sign in with Google
      </button>
    </div>
  );
}

export default App;
