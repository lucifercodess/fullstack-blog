import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formdata, setformdata] = useState({});
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value.trim() });
    // console.log(formdata)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:4009/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata), // sends the form data as a string
      });
      const data = await res.json();
      if (data.code === 0) {
        return setError(data.errorMessage);
      }
      setLoading(false);
      console.log(data);
      toast.success(data.message);
      navigate("/sign-in");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-3xl mx-auto gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to={"/"} className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-blue-500 to-pink-500 rounded-lg text-white">
              Ayush's
            </span>
            blog
          </Link>
          <p className="text-sm mt-5">
            This is a Blog Website. you can signup using your email and
            password, you can also signup with google{" "}
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="your username" />
              <TextInput
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="your email" />
              <TextInput
                type="email"
                placeholder="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="your password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={Loading}
            >
              {Loading ? (
                <>
                  <Spinner size="sm" /> <span>Loading...</span>
                </>
              ) : (
                "sign up"
              )}
            </Button>
          </form>
          <div className="mt-4 flex gap-2">
            <p>Already have an Account?</p>
            <Link to="/sign-in" className="text-blue-600">
              Login
            </Link>
          </div>
          {error && (
            <Alert type="error" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
