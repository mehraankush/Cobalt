import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import SlackProvider from "next-auth/providers/slack";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? "",
        }),
        SlackProvider({
            clientId: process.env.SLACK_CLIENT_ID ?? "",
            clientSecret: process.env.SLACK_CLIENT_SECRET || ""
        })
    ],
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };