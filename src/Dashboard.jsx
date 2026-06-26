import React from "react";
import { auth } from "./firebase"; 
import { signOut } from "firebase/auth"; 
import { useNavigate } from "react-router-dom"; 

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate("/authentication"); 
    } catch (error) {
      console.error("Logout unsuccessful ", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-green-600 mb-4"> Dashboard </h1>

        <p className="text-gray-700 mb-6">
          Congratulations! You are successfully authenticated and
          navigated to another protected page.
        </p>

        <button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition duration-200 shadow-sm"> Logout</button>
      </div>
    </div>
  );
}
