import Answer from "./Answer";

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

    <main>
      <div>
        Prompt : {question.prompt}
      </div>
      <div>
        <Answer key = {params.id} question = {question} maxNum = {maxNum}/>
      </div>
    </main>
  )
}
