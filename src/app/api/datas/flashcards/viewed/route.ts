import { prisma } from "@/lib/prisma";
import { ViewedFlashcard ,ViewedDay} from '@/schemas/Flashcard'

import { NextResponse } from "next/server";



export const GetViewedFlashcardByDate = async () => {
  const listOfViewedDates = await prisma.viewedDate.findMany({include:{ViewedFlashcard:true}}).then((viewedDate) => {
    const viewedDateListParsed:ViewedDay[] = viewedDate.map((views) => {
      const ViewedFlashcard:ViewedFlashcard[] = views.ViewedFlashcard.map((flashcards) => {
        return {
          flashcardId:flashcards.flashcardId,
          id:flashcards.id,
          isCorrect:flashcards.isCorrect,
          viewedDayId:flashcards.viewedDateId
        } 
      })

      return {
        date:views.date,
        id:views.id,
        viewedFlascards:ViewedFlashcard
      }
      
    })
    return viewedDateListParsed
  })

  return listOfViewedDates
    
}
export async function GET(){
    const response = await GetViewedFlashcardByDate()
    return NextResponse.json(response)

}