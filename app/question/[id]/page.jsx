import { getDataFromXlsx } from "@/app/lib/data";
import Answer from "./Answer";

export default async function page({params}) {

    const questions = await getDataFromXlsx();
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

