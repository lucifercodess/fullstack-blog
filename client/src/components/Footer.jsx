import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500 bottom-0 left-0 w-full items-center fixed">
      <div className="bottom-0 left-0 w-full items-center ">
        <div className="flex justify-center items-center gap-10">
          <div>
            <Link
              to={"/"}
              className="self-center text-sm sm:text-xl font-bold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-blue-500 to-pink-500 rounded-lg text-white">
                Ayush's
              </span>
              blog
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <p>Made with ❤️ by Ayush</p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
