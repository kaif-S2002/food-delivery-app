"use client";
import { SessionProvider, session } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
