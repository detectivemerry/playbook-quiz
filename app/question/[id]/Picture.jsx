import Image from "next/image";

export default function Picture({ question_img_name }) {
  return (
    <>
      <Image
        src = {`/images/${question_img_name}`}
        alt={`question image`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "100%" }}
      />
    </>
  );
}
