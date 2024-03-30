import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  //const [answers, setAnswers] = useState([]);
  //const [questions, setQuestions] = useState([]); 

  return (
    <main className="">
      Main page
      <div>
        <Link href = "/question/1">
          <button>
            Start the test!
          </button>
        </Link>
      </div>
    </main>
  );
}
