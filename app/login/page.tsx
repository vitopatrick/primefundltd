"use client";
import LoginForm from "@/components/login-form/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function LoginPage() {
  return (
    // Page wrapper
    <div className="flex h-full items-center">
      <div className="hidden  bg-sky-500 p-4 h-full flex-1 lg:flex items-center">
        <h4 className="font-headerTwo text-5xl font-bold underline text-white">
          We Believe in Simplicity is <br />
          sophistication
        </h4>
      </div>
      <div className="w-full p-5 flex-1">
        <LoginForm />
      </div>
      <ToastContainer theme="colored" className="toast" />
    </div>
  );
}
