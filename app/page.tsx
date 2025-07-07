"use client";
import React, { useEffect, useState } from "react";
import { InputField } from "@/components";
import { CheckCheck, GraduationCap, Loader } from "lucide-react";
import gsap from "gsap";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/schemas/schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { loginAction } from "@/actions/auth.action";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import clsx from "clsx";

type authFormData = z.infer<typeof authSchema>;

const Home = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<authFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: authFormData) => {
    try {
      const response = await loginAction(data);
      if (response?.success) {
        setIsSuccess(true);
        setTimeout(() => {
          reset();
          setIsSuccess(false);
          router.push("/dashboard");
        }, 1500);
      } else {
        toast.error(response?.message || "Login failed. Please try again.");
        console.error("Login failed:", response?.message);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    gsap.fromTo(
      "#form-ref",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
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
          onSubmit={handleSubmit(onSubmit)}
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
              register={register("email")}
            />
            {errors.email && <p className="error">{errors.email?.message}</p>}
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
              register={register("password")}
            />
            {errors.password && (
              <p className="error">{errors.password?.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={clsx(
              "w-full py-2 rounded-lg transition-colors duration-500 text-white",
              {
                "bg-green-500": isSuccess,
                "bg-accent": !isSuccess && !isSubmitting,
                "cursor-not-allowed bg-accent": isSubmitting,
              }
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader className="animate-spin mx-auto" />
            ) : isSuccess ? (
              <div className="w-full flex justify-center items-center gap-2">
                <CheckCheck />
                Success
              </div>
            ) : (
              "Sign In"
            )}
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
