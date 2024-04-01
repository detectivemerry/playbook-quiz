"use client";

import React, { useState } from "react";
import { AppContext } from "./context/App.context";

export function Providers({ children }) {
    const [answers, setAnswers] = useState([]);
     
    return (
        <AppContext.Provider value={{ answers, setAnswers}}>
        { children }
        </AppContext.Provider>
    );
}