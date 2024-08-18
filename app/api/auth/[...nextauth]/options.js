import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/db";
import User from "@/models/user";
import bcrypt from "bcryptjs/dist/bcrypt";
import { NextResponse } from "next/server";

export const options = {
  providers: [
    GoogleProvider({
      name: "Google",
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          name: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          name: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        try {
          await connectDB();
          const { email, password } = credentials;
          const user = await User.findOne({ email });

          if (!user) {
            console.log("User not found");
            return null;
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            console.log("Invalid password");
            return null;
          }

          return user;
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new NextResponse({ error }, { status: 500 });
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      const isServer = typeof window === "undefined";
      const apiUrl = isServer ? process.env.NEXTAUTH_URL : "";

      if (!profile) {
        profile = user;
      }

      if (!profile) {
        console.error("Profile is undefined or null");
        return false;
      }

      const { name, email } = profile;
      const provider = account.provider;
      await connectDB();
      const authUser = await User.findOne({ email });

      if (!authUser) {
        try {
          const res = await fetch(`${apiUrl}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              provider,
            }),
          });
          return res.ok ? true : false;
        } catch (error) {
          console.log("Error during registering user !", error);
        }
      } else {
        return true;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
