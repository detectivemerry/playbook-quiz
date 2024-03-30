"use client"

import { useContext } from 'react'
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

        if(question.question_id === maxNum) // last question
            router.push('/result')
        else
            router.push(`/question/${question.question_id + 1}`)
    } 
    
    return (
        <div>
            <div>
                <button className = "border-2 border-teal-500" onClick = {handleSubmit(ans_one)}>
                   {ans_one} 
                </button>
            </div>
            <div>
                <button className = "border-2 border-teal-500" onClick = {handleSubmit(ans_two)}>
                   {ans_two} 
                </button>
            </div>
        </div>
    )
}
