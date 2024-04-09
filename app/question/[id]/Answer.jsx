"use client"

import { useContext, useEffect } from 'react'
import { AppContext } from '@/app/context/App.context';
import { useRouter } from 'next/navigation';

export default function Answer({ question, maxNum }) {
    const { ans_one, ans_one_type, ans_two, ans_two_type } = question;

    const context = useContext(AppContext);
    const router = useRouter();

    const handleSubmit = (ans) => (e) => {
        e.preventDefault();
        if(ans === ans_one)
            context.setAnswers((prevAns) => [...prevAns, ans_one_type])

        else 
            context.setAnswers((prevAns) => [...prevAns, ans_two_type])

        if(question.question_id === maxNum + 1) // last question
            router.push('/result')
        else
            router.push(`/question/${question.question_id + 1}`)
    } 
    // reset answers if at question 1
    useEffect(() => {
        if(question.question_id === 1)
            context.setAnswers([]);
    }, [])
    
    return (
        <div className = "mx-3 flex flex-col gap-6 font-bold">
            <div>
                <button className = "bg-white text-black p-2 border-2 border-sky-950 rounded-3xl text-left px-5 shadow-2xl" onClick = {handleSubmit(ans_one)}>
                   {ans_one} 
                </button>
            </div>
            <div>
                <button className = "bg-white text-black p-2 border-2 border-sky-950 p-2 rounded-3xl text-left px-5 shadow-2xl" onClick = {handleSubmit(ans_two)}>
                   {ans_two} 
                </button>
            </div>
        </div>
    )
}
