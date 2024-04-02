import { getDataFromXlsx } from "@/app/lib/data";
import Answer from "./Answer";

export default async function page({params}) {

    const questions = await getDataFromXlsx();
    const maxNum = questions.length;
    const question = questions.find((q) => q.question_id == params.id) 

    return(
    <main className = "flex flex-col text-center items-center h-screen">
      <div className = "flex justify-center m-3 my-6">
        {params.id} / {maxNum}
      </div>
      <div className = "border-2 border-black h-2/5 w-full lg:w-2/5">
        Picture
      </div>
      <div className = "p-3 py-12">
        {question.prompt}
      </div>
      <div className = "">
        <Answer key = {params.id} question = {question} maxNum = {maxNum}/>
      </div>
    </main>
    )

  }

