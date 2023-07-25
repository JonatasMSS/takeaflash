
import { prisma } from "@/lib/prisma";
import { Flashcard, Tag } from "@/schemas/Flashcard";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


const GetFlashcards = async ({email}:{email:string}) => {

    const {id} = await prisma.user.findFirstOrThrow({where:{
        email
    }})
    const Flashcards:Flashcard[] = await prisma.flashcard.findMany({where:{
        userId: id
    },include:{
        tag:true
    }}).then((flashcards) => {
        const flashcardsParsed:Flashcard[] = flashcards.map((flashcards) => {
            
            const tagParsed:Tag = {
                color:flashcards.tag.color,
                id:flashcards.tag.id,
                name:flashcards.tag.name
            }

            return {
                content:flashcards.content,
                id:flashcards.id,
                tag:tagParsed,
                title:flashcards.title,
                userId:flashcards.userId
            }
        })

        return flashcardsParsed
    })

    return Flashcards
}

export async function GET(request:NextRequest){
    const {searchParams} = new URL(request.url)
    const email = searchParams.get('email')


    const flashcards = await GetFlashcards({email:email!})
    return NextResponse.json(flashcards)

}

