import Link from "next/link"
import Image from "next/image"
import gif from "@/input/images/GIF2_Q1_BaristaServer.gif"
import Picture from "../question/[id]/Picture";

export default async function page() {

  async function getQuestions() {
    const questions = await fetch("http://localhost:3000/api/questions", {
      method: "GET",
      next: { revalidate: 0 },
    })
      .then((res) => {
        if (!res.ok) throw Error("Error connecting to server.");
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });

    return questions.questions;
  }
    //<main className="">
    //  <div className = "flex flex-col items-center justify-center text-center h-screen gap-10">
    //    <div className = "flex flex-col border-2 border-black py-6 gap-2 mx-6 rounded-lg px-2 lg:px-12">
    //      <div className = "flex justify-center items-center mb-4 h-64">
    //        <Image
    //          src={gif}
    //          alt={`Intro page`}
    //          width={0}
    //          height={0}
    //          sizes="100vw"
    //          style={{ width: "auto", height: "100%" }}
    //          unoptimized
    //        />
    //      </div>
    //        <p>Step into the shoes of a cafe barista-server at Beanstalk Cafe!</p>
    //        <p>You are the face of the cafe, dedicated to providing a delightful service experience to every customer.</p>
    //    </div>
    //    <div className = "">
    //      <Link href = "/question/1">
    //        <button className = "bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700 hover:text-gray-700 hover:bg-white">
    //          Enter the cafe!
    //        </button>
    //      </Link>
    //    </div>
    //  </div>
    //</main>

    const questions = await getQuestions();
    const maxNum = questions.length;
    const prompt = "Step into the shoes of a cafe barista-server at Beanstalk Cafe! You are the face of the cafe, dedicated to providing a delightful service experience to every customer.";
  return (

      <main className="flex flex-col text-center items-center h-screen">
        <div className="flex justify-center m-3 my-8">
          1 / {maxNum + 1}
        </div>
          <div className="flex justify-center h-2/5 w-full lg:w-2/5">
            <Picture question_img_name = {"GIF2_Q1_BaristaServer.gif"} />
          </div>
        <div className="p-6 py-6 font-bold text-left">{prompt}</div>
        <div className="">
          <Link href = "/question/2">
            <button className="bg-emerald-700 text-white p-2 rounded-lg hover:text-gray-700 hover:bg-emerald-50">
              <b>Enter the cafe!</b>
            </button>
          </Link>
        </div>
      </main>
  )
}
