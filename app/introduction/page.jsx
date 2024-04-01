import Link from "next/link"

export default function page() {
  return (
    <main className="">
      <div className = "flex flex-col items-center justify-center text-center h-screen gap-10">
        <div className = "flex flex-col border-2 border-black py-6 gap-2 mx-6 rounded-lg px-2 lg:px-12">
            <p>Step into the shoes of a cafe barista-server at Beanstalk Cafe!</p>
            <p>You're not just crafting drinks and serving up food, you're crafting unforgettable experiences and serving up joy.</p>
            You're the face of the cafe, dedicated to providing a delightful service experience to every customer.
        </div>
        <div className = "">
          <Link href = "/question/1">
            <button className = "bg-gray-700 text-white p-2 rounded-lg border-2 border-gray-700 hover:text-gray-700 hover:bg-white">
              Enter the cafe!
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
