


import {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


export const authConfig:NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!
        })
    ]   
}