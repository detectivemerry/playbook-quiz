import { getDataFromXlsx } from "@/app/lib/data";
import Picture from "./Picture";
import Answer from "./Answer";

export default async function page({params}) {

    const questions = await getDataFromXlsx();
    const maxNum = questions.length;
    const question = questions.find((q) => q.question_id == params.id);

    return (
      <main className="flex flex-col text-center items-center h-screen">
        <div className="flex justify-center m-3 my-8">
          <b>{params.id} / {maxNum + 1}</b>
        </div>
          <div className="flex justify-center h-2/5 w-full lg:w-2/5 border-2 border-sky-950 rounded-lg bg-white p-2 ">
            <Picture question_img_name = {question.question_img_name} />
          </div>
        <div className="p-6 py-6 font-bold text-left text-xl">{question.prompt}</div>
        <div className="">
          <Answer key={params.id} question={question} maxNum={maxNum} />
        </div>
      </main>
    );
}

