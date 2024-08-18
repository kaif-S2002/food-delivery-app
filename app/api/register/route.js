import connectMongoDB from "@/utils/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const validateEmail = (email) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValidEmail = email.match(mailFormat);
    return isValidEmail ? true : false;
  };

  try {
    const { name, email, password, provider } = await req.json();
    console.log("Request details:", {
      name,
      email,
      password,
      provider,
    });

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required !" }),
        { status: 400 }
      );
    }

    await connectMongoDB();
    const existingUser = await User.findOne({ email });
    console.log("Existing user:", existingUser);

    if (!validateEmail(email)) {
      console.log("validating email");
      return new Response(
        JSON.stringify({ message: "Please enter valid email !" }),
        { status: 400 }
      );
    } else if (password.length < 6) {
      console.log("checking password length");
      return new Response(
        JSON.stringify({
          message: "Password length must be at least 6 characters !",
        }),
        { status: 400 }
      );
    }

    if (
      !existingUser ||
      (existingUser.email !== email && existingUser.name === name)
    ) {
      if (password) {
        console.log("Creating user with password");
        const hashedPassword = await bcrypt.hash(password, 5);
        // await User.collection.dropIndex("username_1");
        await User.create({
          name,
          email,
          password: hashedPassword,
        });
        return new NextResponse(
          JSON.stringify({ message: "User registered successfully" }),
          { status: 201 }
        );
      } else {
        console.log("Creating user without password");
        await User.create({ name, email, provider });
        return new NextResponse(
          JSON.stringify({ message: "User registered successfully" }),
          { status: 201 }
        );
      }
    } else {
      console.log("User already exists");
      return new NextResponse(
        JSON.stringify({ message: "User already exists !" }),
        { status: 409 }
      );
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error while registering user !" }),
      { status: 500 }
    );
  }
}
