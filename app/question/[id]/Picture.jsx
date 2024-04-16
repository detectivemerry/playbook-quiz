import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
export default async function Picture({ question_img_name }) {
  const src = `/images/Empathetic.png`;

  //const buffer = await fs.readFile(`./public$`);

  //const { base64 } = await getPlaiceholder(buffer);

  return (
    <>
      <Image
        src = {`/images/${question_img_name}`}
        alt={`question image`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "100%" }}
        placeholder="blur"
        blurDataURL={`/images/Loading.png`}
        priority={true}
      />
    </>
  );
}
