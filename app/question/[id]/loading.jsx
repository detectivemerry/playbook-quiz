import React from 'react'

export default function Loading() {
  return (
    <main className="">
      <div className = "flex flex-col items-center justify-center text-center h-screen gap-10">
        <div className = "flex flex-col py-6 gap-2 mx-6 rounded-lg p-12 lg:px-12">
          <div className = "font-bold text-xl">
            Loading next question... 
          </div>
        </div>
      </div>
    </main>

  )
}
