import { getDataFromXlsx } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {
        const questions = await getDataFromXlsx();
        if(questions.length > 0)
            return NextResponse.json({questions : questions}, {status : 200})
        else
            return NextResponse.json({status : 500})

    } 
    catch(error){
        return NextResponse.json({status : 500})
    }

}