import Link from "next/link"
import Picture from "../question/[id]/Picture";
import { getDataFromXlsx } from "../lib/data";

export default async function page() {

    const questions = await getDataFromXlsx();
    const maxNum = questions.length;
    const prompt = "Step into the shoes of a cafe barista-server at Beanstalk Cafe! You are the face of the cafe, dedicated to providing a delightful service experience to every customer.";
  return (

      <main className="flex flex-col text-center items-center h-screen">
        <div className="flex justify-center m-3 my-8">
          1 / {maxNum + 1}
        </div>
          <div className="flex justify-center h-2/5 w-full lg:w-2/5 border-2 border-sky-950 rounded-lg bg-white">
            <Picture question_img_name = {"GIF2_Q1_BaristaServer.gif"} />
          </div>
        <div className="p-6 py-6 font-bold text-left">{prompt}</div>
        <div className="">
          <Link href = "/question/2">
            <button className="bg-white text-black p-2 border-2 border-sky-950 p-2 rounded-lg shadow-2xl">
              <b>Enter The Cafe!</b>
            </button>
          </Link>
        </div>
      </main>
  )
}
