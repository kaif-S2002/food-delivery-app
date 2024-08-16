"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(false);
  const [userSession, setUserSession] = useState(false);
  const router = useRouter();
  const session = useSession();
  const status = session.status;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      setFetching(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        const form = e.target;
        form.reset();
        alert(data.message);
        router.push("/login");
        const jsonData = `{ "name": "${name}", "email": "${email}" }`;
        const userData = JSON.parse(jsonData);
        localStorage.setItem("User data", JSON.stringify(userData));
      } else {
        setError(data.message || "Error during registration !");
      }
    } catch (error) {
      setError("Error during registration !");
      console.log("Error during registration:", error);
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
      {!userSession ? (
        <>
          <div className=" flex justify-center items-center h-screen w-screen text-2xl font-semibold">
            Loading...
          </div>
        </>
      ) : (
        <div
          id="userLogin"
          className={`login-wrapper flex flex-col justify-center items-center h-fit py-32 w-full overflow-hidden max-sm:py-48`}
        >
          <h1 className=" text-2xl font-bold mb-8 tracking-wider">SIGN UP</h1>
          <p className=" text-xs text-red-600 tracking-wide absolute top-40 mt-2">
            {error && error}
          </p>
          <form
            onSubmit={handleSubmit}
            onChange={(e) => (!e.target.value ? "" : setError(""))}
            className={` flex flex-col justify-center items-center gap-5 h-fit w-56 relative`}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              disabled={fetching ? true : false}
              className={`placeholder:text-sm  border border-black shadow-md w-full p-1 pl-2 rounded-md`}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              disabled={fetching ? true : false}
              className={`placeholder:text-sm  border border-black shadow-md w-full p-1 pl-2 rounded-md`}
            />
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              placeholder="Password"
              disabled={fetching ? true : false}
              className={`placeholder:text-sm  border border-black shadow-md w-full p-1 pl-2 rounded-md`}
            />
            <button
              type="submit"
              disabled={fetching ? true : false}
              className={`login-submit-btn text-white text-sm bg-black font-bold shadow-md w-full p-2 rounded-md  ${
                !fetching ? "active:scale-95 " : "hover:cursor-wait"
              } ease-in-out duration-75 mt-1`}
            >
              Sign up
            </button>
          </form>
          <p className=" text-xs mt-5">
            Already have an account?{" "}
            <Link href={"/login"} className=" font-semibold text-blue-700">
              Sign in
            </Link>
          </p>
          <p className=" text-sm font-bold mt-2 translate-y-2.5 z-10 bg-white px-1">
            Or
          </p>
          <hr className=" bg-black h-0.5 w-60" />

          <div className=" flex flex-col gap-4 mt-6">
            <button
              type="submit"
              name="googleLogin"
              id="googleLogin"
              onClick={() =>
                signIn("google", { callbackUrl: "/login" })(signIn === true)
                  ? alert("Login successful")
                  : ""
              }
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
              type="submit"
              name="githubLogin"
              id="githubLogin"
              onClick={() => signIn("github", { callbackUrl: "/login" })}
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

export default Register;
