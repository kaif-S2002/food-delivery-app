"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Loading from "../loading";

const UserLogin = () => {
  const router = useRouter();
  const session = useSession();
  const status = session.status;
  const [userSession, setUserSession] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const isServer = typeof window === "undefined";
    const apiUrl = isServer ? process.env.NEXTAUTH_URL : "";

    try {
      setFetching(true);
      const response = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const form = e.target;
        form.reset();
        await signIn("credentials", { email, password, callbackUrl: "/" });
        alert(data.message);
      } else {
        setError(data.message || "Error during login !");
      }
    } catch (error) {
      setError("Error during login. Please try again.");
      console.error("Error during login:", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (status === "loading") {
      setUserSession(false);
    } else if (status === "authenticated") {
      router.push("/");
    } else {
      setUserSession(true);
    }
  }, [status]);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <div
          id="userLogin"
          className="login-wrapper flex flex-col justify-center items-center h-fit py-32 w-full overflow-hidden max-sm:py-48"
        >
          <h1 className=" text-2xl font-bold mb-8 tracking-wider">LOGIN</h1>
          <p className=" text-xs text-red-600 tracking-wide absolute top-40 mt-2">
            {error && error}
          </p>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center items-center gap-5 h-fit w-56 relative"
          >
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              onChange={error === "" ? () => "" : () => setError("")}
              className={`placeholder:text-sm border border-black shadow-md w-full p-1 pl-2 rounded-md `}
            />
            <input
              type="password"
              name="Password"
              id="Password"
              placeholder="Password"
              onChange={error === "" ? () => "" : () => setError("")}
              className={`placeholder:text-sm border border-black shadow-md w-full p-1 pl-2 rounded-md `}
            />
            <button
              type="submit"
              className="login-submit-btn text-white text-sm bg-black font-bold shadow-md w-full p-2 rounded-md  active:scale-95 ease-in-out duration-75 mt-1"
            >
              Login
            </button>
          </form>
          <Link
            href={"#"}
            className=" text-xs mt-2 translate-x-14 font-medium hover:text-blue-700"
          >
            Forgot password?
          </Link>
          <p className=" text-xs mt-5">
            Don't have an account?{" "}
            <Link href={"/register"} className=" font-semibold text-blue-700">
              Sign up
            </Link>
          </p>
          <p className=" text-sm font-bold mt-2 translate-y-2.5 z-10 bg-white px-1">
            Or
          </p>
          <hr className=" bg-black h-0.5 w-60" />

          <div className=" flex flex-col gap-4 mt-6">
            <button
              id="googleLogin"
              name="googleLogin"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className=" flex justify-center items-center gap-3 w-56 text-xs font-semibold tracking-wide border border-black shadow-md p-1.5 rounded-md active:scale-95 ease-in-out duration-75"
            >
              <Image
                src="/images/googleicon.png"
                alt="google-icon"
                width={20}
                height={20}
              />
              Sign in with Google
            </button>

            {/* <button
              id="githubLogin"
              name="githubLogin"
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className=" flex justify-center items-center gap-3 w-56 text-xs font-semibold tracking-wide border border-black shadow-md p-1.5 rounded-md active:scale-95 ease-in-out duration-75"
            >
              <Image
                src="/images/githubicon.png"
                alt="github-icon"
                width={20}
                height={20}
              />
              Sign in with Github
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default UserLogin;
