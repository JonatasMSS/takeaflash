
import { prisma } from "@/lib/prisma";
import { ViewedDate, ViewedFlashcard } from '@/schemas/Flashcard'
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";



export const GetViewedFlashcards = async (email:string) => {

  const userID = (await prisma.user.findUniqueOrThrow({ where: { email } })).id;

        const vieweds:ViewedDate[] = await prisma.viewedDate.findMany({where:{
            userId:userID
        },include:{
            viewedFlashcards:true
        }}).then((viewedList) => {
            const mapped:ViewedDate[] = viewedList.map((viewedDate) => {

                const flashcards:ViewedFlashcard[] = viewedDate.viewedFlashcards.map((viewedFlashcards) => {
                    return {
                     flashcardId:viewedFlashcards.flashcardId,
                     id:viewedFlashcards.id,
                     isCorrect:viewedFlashcards.isCorrect,
                     viewedDateId:viewedFlashcards.viewedDateId!
                    }
                })

                return{
                    id:viewedDate.id,
                    date:viewedDate.date,
                    userId:viewedDate.userId,
                    viewedFlashcards:flashcards
                }
            })
            
            return mapped

        })

        return vieweds
}

export async function GET(request:NextRequest){
    const {searchParams} = new URL(request.url)
    const email = searchParams.get('email')
    const response = await GetViewedFlashcards(email!)
    return NextResponse.json(response)

}