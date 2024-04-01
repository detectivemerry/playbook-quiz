import Answer from "./Answer";
import ProgressBar from "./ProgressBar";

async function getQuestions(){
  const questions = await fetch("http://localhost:3000/api/questions", {
    method : "GET",
    next : {revalidate : 0}
  })
  .then((res) => {
    if(!res.ok)
      throw Error("Error connecting to server.")
    return res.json();
  })
  .then((data) => {
    return data
  })
  .catch((error) => {
    console.error(error);
  })

  return questions.questions;
}

export async function generateStaticParams(){
  const questions = await getQuestions();
  const params = questions.map((q) => ({
    id : String(q.question_id)
  }))

  return params
}

export const dynamicParams = true;

export default async function page({params}) {

  const questions = await getQuestions();
  const maxNum = questions.length;
  const question = questions.find((q) => q.question_id == params.id) 

  return (

    <main className = "flex flex-col text-center h-screen">
      <div className = "flex justify-center m-3 my-12">
        {params.id} / {maxNum}
      </div>
      <div className = "border-2 border-black h-2/5">
        Picture
      </div>
      <div className = "p-3 py-12">
        {question.prompt}
      </div>
      <div classname = "">
        <Answer key = {params.id} question = {question} maxNum = {maxNum}/>
      </div>
    </main>
  )
}
