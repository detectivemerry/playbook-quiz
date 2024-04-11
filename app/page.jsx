import Image from "next/image";
import Link from "next/link";
import { inter, quicksand } from "@/app/fonts";

export default async function Home() {
  //const [answers, setAnswers] = useState([]);
  //const [questions, setQuestions] = useState([]);

  return (
    <main className="bg-amber-50">
      <div className="flex flex-col items-center justify-center text-center h-screen gap-10 ">
        <div className="flex flex-col border-2 border-black py-6 gap-2 mx-6 rounded-lg lg:px-12 bg-white">
          <div className={`font-bold text-2xl ${quicksand.className}`}>
            What Beverage Are You?
          </div>

          <div className="flex justify-center items-center -mb-8 -mt-2 h-64">
            <Image
              src={`/images/GIF1_IntroPage.gif`}
              alt={`Intro page`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
              unoptimized
            />
          </div>
          <div>
            A light-hearted quiz to reveal your unique service personality and
            uncover the ways you make customers smile!
          </div>
        </div>
        <div className="">
          <Link href="/introduction">
            <button className="bg-white text-black p-2 border-2 border-sky-950 p-2 rounded-lg shadow-2xl">
              <b> Start The Test!</b>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
