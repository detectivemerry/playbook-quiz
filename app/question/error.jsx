"use client"; // Error components must be Client Components
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center m-32 gap-12">
      <div>
        <h2>Something went wrong!</h2>
      </div>
      <div>
        <button
          className="bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700 hover:text-gray-700 hover:bg-white"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
      <div>
        or
      </div>
      <div>
        <Link href="/">
          <button className="bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700 hover:text-gray-700 hover:bg-white">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
