


import { NextAuthOptions, User} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from './prisma'
import { AdapterUser } from 'next-auth/adapters'


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
            clientId:"292749188184-k5ku3art0rrmni4ibhc19n9lff65h7u3.apps.googleusercontent.com",
            clientSecret:"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",
            
        })
    ],
    debug:true,
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async signIn({user}){
           return getOrCreateUser(user)
        },
        
       
    },
    
}