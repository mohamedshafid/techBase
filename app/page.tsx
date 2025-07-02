"use client";

import React, { useEffect } from "react";
import { InputField } from "@/components";
import { GraduationCap } from "lucide-react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      "#form-ref",
      { opacity: 0, y: 50 },
      { opacity: 100, y: 0, duration: 1 }
    );
  }, []);

  return (
    <main className="bg-[#e9f4ff] w-full h-screen flex items-center justify-center">
      <div>
        <div className="flex flex-col items-center mb-6">
          <GraduationCap
            size={30}
            className="text-white bg-accent w-14 h-14 p-2 rounded-full mb-5"
          />
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-[15px] font-normal text-grayish">
            Sign in to access EduFin Manager
          </p>
        </div>
        <form
          action=""
          className="bg-white p-8 rounded-lg w-[450px]"
          id="form-ref"
        >
          <div className="form-div">
            <label htmlFor="email" className="form-label">
              Email / Username
            </label>
            <br />
            <InputField
              type="email"
              placeholder="Enter your email or username"
              id="email"
            />
          </div>
          <div className="form-div">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <br />
            <InputField
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          <div className="flex-between  form-div">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me"
                className="w-5 h-5"
              />
              <br />
              <label htmlFor="remember_me" className="form-label">
                Remember Me
              </label>
            </div>
            <p className="links">Forgot Password?</p>
          </div>
          <button className="w-full py-2 rounded-lg bg-accent text-white">
            Sign In
          </button>

          <div className="w-full flex items-center gap-2 my-5">
            <span className="h-[1px] bg-grayish flex-1" />
            <p className="text-sm text-grayish">Or Continue with</p>
            <span className="h-[1px] bg-grayish flex-1" />
          </div>

          <div className="w-full flex items-center gap-2">
            <button className="py-2 px-5 rounded-lg border border-grayish flex-1 text-grayish">
              Google
            </button>
            <button className="py-2 px-5 rounded-lg border border-grayish flex-1 text-grayish">
              Microsoft
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center mt-5">
          <p className="text-gray-700 text-sm">
            Don't have an account?
            <span className="links"> Contact Administrator</span>
          </p>

          <div className="flex items-center gap-4 mt-3">
            <p className="text-grayish text-sm">Privacy Policy</p>
            <p className="text-grayish text-sm">Terms of Services</p>
            <p className="text-grayish text-sm">Support</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
