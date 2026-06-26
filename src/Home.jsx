import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleNavigate = () => {
  navigate("/dashboard");
};


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4 text-center">
          Welcome to Authentication
        </h1>

        <p className="text-gray-700 leading-7 mb-4">
          This is a protected page. Only authenticated users can access
          this content. Firebase Authentication is being used to manage
          user login and registration. After successfully signing in,
          users can explore different pages and features of the
          application.
        </p>

        <p className="text-gray-700 leading-7 mb-6">
          React Router handles navigation between pages while Firebase
          verifies whether a user is logged in or not. If a user tries
          to access this page without authentication, they are
          automatically redirected to the login page.
        </p>

       <div className="flex justify-center">
         <button
           onClick={handleNavigate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"> Go To Dashboard</button> 
       </div>
       <p className="text-center text-sm text-red-600 mt-4">
   You must sign in or create an account to access the Dashboard. If you are not authenticated, you will be redirected to the Login page.
</p>
       
      </div>
    </div>
  );
}