"use client"

import React from 'react'
import { useContext } from 'react'
import { AppContext } from '@/app/context/App.context';

export default function ProgressBar() {
    const context = useContext(AppContext);
    const maxQuestionNo = context.answers.length

  return (
    <div>
        
    </div>
  )
}
