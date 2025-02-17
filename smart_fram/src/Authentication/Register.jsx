import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Authentication/AuthSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (!email || !password || !username || !userType) {
      alert("All fields are required!");
      return;
    }
  
    const userData = {
      email: email.trim(),
      password: password.trim(),
      username: username.trim(),
      user_type: userType,
    };
  
    console.log("Sending Data:", userData); // Debugging: Check in browser console
  
    try {
      // Dispatch register action
      const response = await dispatch(registerUser(userData));
  
      // If registration is successful and no errors
      if (response.payload && !response.error) {
        console.warn("Registration Successful. Redirecting to login page...");
        navigate("/login"); // Correct navigation path to /login
      }
    } catch (err) {
      console.error("Registration failed", err);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select User Type</option>
            <option value="farmer">Farmer</option>
            <option value="customer">Customer</option>
          </select>
          <button
            type="submit"
            className={`w-full py-2 ${loading ? "bg-gray-400" : "bg-blue-500"} text-white rounded`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <div className="mt-4 text-center">
            <span>Already have an account? </span>
            <a href="/login" className="text-blue-500">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
