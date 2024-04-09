"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Picture({ question_img_name }) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImage(question_img_name);
  }, []);
  
  function onImageLoad(){
    console.log("image has been loaded bzzt bzzt")
    setLoading(false);
    setImage(question_img_name);
  }

  return (
    <>
      {image ? (
        <Image
          src={require(`@/input/images/${image}`)}
          //src = {"/input/GIF4_Q3_Parrot.gif"}
          alt={`question image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "100%" }}
          unoptimized
          onLoad = {() => onImageLoad()}
        />
      ) : 
      <div>
        <b>Loading...</b>
      </div>}
    </>
  );
}
