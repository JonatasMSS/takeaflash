'use server'
import { prisma } from "@/lib/prisma";
import { request } from "http";
import { z } from "zod";



interface addFlashProps{
    email:string
    title:string
    content:string
    tag:{
        name:string
        color:string
    }
}


export async function addFlashcard({email,content,tag,title}:addFlashProps) {

    
    
    const {id} = await prisma.user.findFirstOrThrow({where:{
        email
    }});   


    let newTag = await prisma.tag.findFirst({where:{name:tag.name}})
    if(!newTag){
        newTag = await prisma.tag.create({
            data:{
                color:tag.color,
                name:tag.name.toLocaleLowerCase(),
                userId:id
            }
        })
    }
    const flashcard = await prisma.flashcard.create({
        data:{
            content,
            title,
            tagId:newTag.id,
            userId:id,    
        }
    })

    return flashcard
    
}