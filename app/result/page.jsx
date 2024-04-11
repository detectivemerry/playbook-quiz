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
        <div className="flex flex-col items-center h-[85vh]">
          {image && (
            <Image
              src={`/images/${image}`}
              alt={`Image of result`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
            />
          )}
        </div>
        <div className="flex-col items-center my-6">
          <div className="flex justify-center">
            <Link href="/">
              <button className="bg-white text-black border-2 border-sky-950 p-2 rounded-lg shadow-2xl">
                <b>Try the quiz again!</b>
              </button>
            </Link>
          </div>
          <div className="flex justify-center py-3">
            <button
              className="bg-white text-black p-2 border-2 border-sky-950 rounded-lg shadow-2xl"
              onClick={toggleShowPDF}
            >
              {showPDF ? (
                <><b>Hide ECDA Service Playbook</b></>
              ) : (
                <><b>Show ECDA Service Playbook</b></>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {showPDF && (
            <embed
              src="https://drive.google.com/file/d/1_5oWdt1KPAQczsrOni7A3tyvENmEyYkx/preview?usp=sharing"
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
