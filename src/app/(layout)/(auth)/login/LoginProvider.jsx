"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Divider, TextField } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginProvider = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // Submit Login Form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;

    const email = target.email.value;
    const password = target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 2000,
      });
      router.push("/");
    } else {
      toast.error(`Login Error: ${res?.error || "Invalid Credentials"}`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // Google Login
  const handleGoogleMethod = async () => {
    const res = await signIn("google", { callbackUrl: "/callback" });
  };

  return (
    <div className="w-full flex flex-col items-center sm:gap-5 gap-2 px-5 py-10">
      <div className="flex flex-col gap-1 items-center md:mt-8 mt-4">
        <h3 className="md:text-4xl text-2xl italic font-serif font-semibold">
          Login
        </h3>
        <p className="text-base font-medium text-purple-500">
          Login to access and manage your products
        </p>
      </div>

      <Divider
        className="lg:w-3/5 md:w-7/12 sm:w-9/12 w-full mx-auto!"
        orientation="horizontal"
        variant="middle"
        flexItem
      />

      <div className="flex flex-col gap-4 lg:w-2/5 md:w-6/12 sm:w-8/12 w-full">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-4 mt-4 w-full"
        >
          <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
            <TextField
              name="email"
              className="w-full"
              type="email"
              label="Email"
              variant="filled"
              required
            />
          </div>

          <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
            <div className="w-full relative">
              <TextField
                name="password"
                className="w-full"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                required
              />
              {!showPassword ? (
                <MdVisibilityOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-3 text-2xl z-40 cursor-pointer"
                />
              ) : (
                <MdVisibility
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-3 text-2xl z-40 cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <Button
              type="submit"
              className="w-full mx-auto py-2 rounded-md border-2 transition-all duration-300 hover:shadow-md text-white! shadow-gray-400/90 bg-linear-to-tr! from-purple-500 to-gray-500 hover:to-cyan-600"
            >
              <p className="text-lg font-semibold py-1">Login</p>
            </Button>
          </div>
        </form>

        <p className="text-xl font-bold text-center">or</p>

        <button
          onClick={handleGoogleMethod}
          className="w-full mx-auto border-2 border-sky-500 bg-white rounded-md  transition hover:shadow-md hover:scale-105  text-xl font-semibold shadow-gray-400/90 hover:border-cyan-600 py-2 flex items-center justify-center gap-2 text-black cursor-pointer"
        >
          <FcGoogle className="text-2xl" />
          Google
        </button>

        <p className="font-medium text-lg flex items-center gap-1">
          New User?
          <Link
            className="text-sky-500 hover:text-emerald-700 duration-300 font-bold"
            href={"/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginProvider;
