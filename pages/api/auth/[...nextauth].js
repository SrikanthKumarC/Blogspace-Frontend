import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '485158293992-07p16ljv04ahgc7m0uhbk45b8af6a660.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET
}
export default NextAuth(authOptions)