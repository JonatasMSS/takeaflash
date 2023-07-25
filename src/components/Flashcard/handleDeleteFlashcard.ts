'use server'
import { prisma } from "@/lib/prisma";



export async function DeleteFlashcardFromDatabase(name:string){

    await prisma.flashcard.delete({where:{
        title:name
    }})

}