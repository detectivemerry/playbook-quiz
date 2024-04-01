import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  //const [answers, setAnswers] = useState([]);
  //const [questions, setQuestions] = useState([]); 

  return (
    <main className="">
      <div className = "flex flex-col items-center justify-center text-center h-screen gap-10">
        <div className = "flex flex-col border-2 border-black py-6 gap-2 mx-6 rounded-lg lg:px-12">
          <div className = "font-bold">
            What Beverage Are You? Uncover Your Service Personality!
          </div>
          <div>
            A light-hearted quiz to reveal your unique service personality and uncover the ways you make customers smile!
          </div>
        </div>
        <div className = "">
          <Link href = "/introduction">
            <button className = "bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700 hover:text-gray-700 hover:bg-white">
              Start the test!
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
