"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Picture({ question_img_name }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(question_img_name);
  }, []);

  return (
    <>
      {image && (
        <Image
          src={require(`@/input/images/${image}`)}
          alt={`question image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "100%" }}
          unoptimized
        />
      )}
    </>
  );
}
