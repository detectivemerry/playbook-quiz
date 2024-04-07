import Answer from "./Answer";
import Image from "next/image"
import Picture from "./Picture";

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

export async function generateStaticParams() {
  const questions = await getQuestions();
  const params = questions.map((q) => ({
    id: String(q.question_id),
  }));

  return params;
}

export const dynamicParams = true;

export default async function page({ params }) {
  try {
    const questions = await getQuestions();
    const maxNum = questions.length;
    const question = questions.find((q) => q.question_id == params.id);

    return (
      <main className="flex flex-col text-center items-center h-screen">
        <div className="flex justify-center m-3 my-8">
          {params.id} / {maxNum + 1}
        </div>
          <div className="flex justify-center h-2/5 w-full lg:w-2/5">
            <Picture question_img_name = {question.question_img_name} />
          </div>
        <div className="p-6 py-6 font-bold text-left text-xl">{question.prompt}</div>
        <div className="">
          <Answer key={params.id} question={question} maxNum={maxNum} />
        </div>
      </main>
    );
  } catch (error) {
    throw new Error(error);
  }
}
