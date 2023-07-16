/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
        AUTH_URL:process.env.AUTH_URL
    }
}

module.exports = nextConfig
