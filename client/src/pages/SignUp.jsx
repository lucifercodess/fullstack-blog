import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-3xl mx-auto gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link
            to={"/"}
            className="text-4xl font-bold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-blue-500 to-pink-500 rounded-lg text-white">
              Ayush's
            </span>
            blog
          </Link>
          <p className="text-sm mt-5">This is a Blog Website. you can signup using your email and password, you can also signup with google </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="your username"/>
              <TextInput type = 'text' placeholder="username" id = "username"/>
            </div>
            <div>
              <Label value="your email"/>
              <TextInput type = 'text' placeholder="email" id = "email"/>
            </div>
            <div>
              <Label value="your password"/>
              <TextInput type = 'text' placeholder="password" id = "password"/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              Sign Up
            </Button>
          </form>
          <div className="mt-4 flex gap-2">
            <p>Already have an Account?</p>
            <Link to = "/sign-in" className="text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
