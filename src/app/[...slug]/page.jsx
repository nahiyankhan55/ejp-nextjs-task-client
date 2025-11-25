"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { TbFaceIdError } from "react-icons/tb";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20">
      <TbFaceIdError className="text-7xl text-red-500"></TbFaceIdError>
      <h1 className="sm:text-4xl text-2xl text-red-600 font-bold mb-4 mt-5">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The page you are looking for doesn't exist.
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/")}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default ErrorPage;
