


import {ISODateString, NextAuthOptions, User} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from './prisma'
import { AdapterUser } from 'next-auth/adapters'


interface Session{
    user?: {
        id?:string | null
        name?: string | null
        email?: string | null
        image?: string | null
      }
      expires: ISODateString
}


const getOrCreateUser =  async (user: User | AdapterUser) => {
    
    let users = await prisma.user.findFirst({where:{
        email:user.email!,
    }})
    if(!users){
        users = await prisma.user.create({
            data:{
                email:user.email!,
                username:user.name!,
                id:user.id

            }
        })
    }
    return true

}

export const authConfig:NextAuthOptions = {

    providers:[
        GoogleProvider({
            clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
            
        })
    ],
    callbacks:{
        async signIn({user}){
           return getOrCreateUser(user)
        },
        
       
    },
    
}