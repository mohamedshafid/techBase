"use server";
import { cookies } from "next/headers";

export const loginAction = async (data: any) => {
  try {
    const email = data.email;
    const password = data.password;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      (await cookies()).set("admin", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      return {
        success: true,
        message: "Login successful",
      };
    }
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "Invalid email or password",
    };
  }
};
