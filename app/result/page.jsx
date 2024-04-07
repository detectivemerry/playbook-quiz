"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "@/app/context/App.context";
import Link from "next/link";

export default function Result() {
  try {
    const context = useContext(AppContext);
    const [image, setImage] = useState("");
    const [showPDF, setShowPDF] = useState(false);

    function mode(arr) {
      return arr
        .sort(
          (a, b) =>
            arr.filter((v) => v === a).length -
            arr.filter((v) => v === b).length
        )
        .pop();
    }

    useEffect(() => {
      const type = mode(context.answers);
      setImage(type + ".png");
    }, [context.answers]);

    function toggleShowPDF(e) {
      e.preventDefault();
      setShowPDF((prev) => !prev);
    }

    return (
      <div>
        <div className="bg-gray-700 lg:flex lg:flex-col lg:items-center">
          {image && (
            <Image
              src={require(`@/input/images/${image}`)}
              alt={`Image of result`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "80%" }}
            />
          )}
        </div>
        <div className="flex-col items-center my-6">
          <div className="flex justify-center">
            <Link href="/">
              <button className="bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700 hover:text-gray-700 hover:bg-white">
                Try the quiz again!
              </button>
            </Link>
          </div>
          <div className="flex justify-center py-6">
            <button
              className="bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700 hover:text-gray-700 hover:bg-white"
              onClick={toggleShowPDF}
            >
              {showPDF ? (
                <>Hide ECDA Service Playbook</>
              ) : (
                <>Show ECDA Service Playbook</>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {showPDF && (
            <embed
              src="https://drive.google.com/file/d/1VCbA7vmqg5iyF6flmk0Rdllx-Tj6jjzT/preview?usp=sharing"
              frameborder="0"
              width="100%"
              height="1000px"
            />
          )}
        </div>
      </div>
    );
  } catch (error) {
    throw new Error("internal server error");
  }
}
