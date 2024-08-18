import connectDB from "@/utils/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password, provider, name } = await req.json();

  if (provider !== undefined) {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      await User.create({ name, email, provider });
      return new Response(JSON.stringify({ message: "Login successful" }), {
        status: 200,
      });
    }
  } else {
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required !" }),
        { status: 400 }
      );
    }

    try {
      await connectDB();
      const user = await User.findOne({ email });

      if (!user) {
        return new Response(JSON.stringify({ message: "User not found !" }), {
          status: 404,
        });
      }

      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {
        return new Response(
          JSON.stringify({ message: "Incorrect password !" }),
          {
            status: 401,
          }
        );
      }
      return new Response(JSON.stringify({ message: "Login successful" }), {
        status: 200,
      });
    } catch (error) {
      console.error("Error during login:", error);
      return new Response(
        JSON.stringify({ message: "Internal server error !" }),
        {
          status: 500,
        }
      );
    }
  }
}
