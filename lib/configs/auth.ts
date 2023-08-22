import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";
import bcrypt from "bcryptjs";

export const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter your credentials");
          return null;
        }

        await connectToDB();

        const currentUser = await User.findOne({ email: credentials.email });

        if (!currentUser) {
          throw new Error("No user found");
          return null;
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          currentUser.password
        );

        if (!passwordMatch) {
          throw new Error("Incorrect password");
          return null;
        }

        return currentUser;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser?._id.toString();
      return session;
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        try {
          await connectToDB();

          const userExists = await User.findOne({ email: profile.email });
          if (!userExists) {
            await User.create({
              userName: profile.name,
              email: profile.email,
              avatar: profile.picture || null,
              password: null,
            });
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};
