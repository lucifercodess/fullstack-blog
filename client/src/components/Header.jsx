import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center text-sm sm:text-xl font-bold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-blue-500 to-pink-500 rounded-lg text-white">
          Ayush's
        </span>
        blog
      </Link>
      <form action="">
        <TextInput
          type="text"
          placeholder="search"
          rightIcon={FaSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden " color="gray" pill>
        <FaSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button color="gray" pill className="sm:inline">
          <FaMoon />
        </Button>
        <Link to={"/sign-in"} className="px-3 " >
          <Button color="gray" pill gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
          <Navbar.Link  active={path === '/about'} as={'div'}>
            <Link to={"/about"}>About</Link>
          </Navbar.Link>
          <Navbar.Link  active={path === '/about'} as={'div'}>
            <Link to={"/home"}>Home</Link>
          </Navbar.Link>
          <Navbar.Link  active = {path === '/projects'} as={'div'}>
            <Link to={"/projects"}>projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
