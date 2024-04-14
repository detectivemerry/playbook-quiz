"use client"; // Error components must be Client Components
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-white">
      <div className = "flex flex-col items-center justify-center text-center h-screen gap-10">
        <div className = "flex flex-col  py-6 gap-2 mx-6 rounded-lg lg:px-12">
          <div className = "font-bold">
            <h2>Something went wrong!</h2>
          </div>
        </div>
        <div className = "flex flex-col gap-2">
          <div>
            <button
              className="bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700"
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>
          </div>
          <div>
            <Link href="/">
              <button className="bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
