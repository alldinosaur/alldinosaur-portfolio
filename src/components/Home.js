import Sidebar from "./Sidebar.js";
import Skills from "./Skills.js";
import About from "./About.js";
import Contacts from "./Contacts.js";
import Projects from "./Projects.js";
import Experience from "./Experience.js";

import { Link, Route, Switch } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [toggle, setToggle] = useState(false)

  // const handleToggle = () => {
  //   setToggle(da)
  // }

  return (
    <div className="bg-gray-300 dark:bg-gray-800 h-screen flex justify-center items-center" onClick={() => setToggle(!toggle)}>
      <div className="container">
        <button id="dropdownDefault" onClick={() => setToggle(!toggle)} data-dropdown-toggle="dropdown" className="sm:block md:hidden bg-white  dark:bg-slate-400 rounded-sm m-2 dark:hover:bg-slate-200 focus:ring-4 focus:outline-none dark:focus:ring-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div id="dropdown" className={`${toggle ? '' : 'hidden'} md:hidden z-60 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700  absolute`}>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
              <Link to='/about' onClick={() => setToggle(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</Link>
            </li>
            <li>
              <Link to='/experience' onClick={() => setToggle(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Experience</Link>
            </li>
            <li>
              <Link to='/skills' onClick={() => setToggle(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Skills</Link>
            </li>
            <li>
              <Link to='/projects' onClick={() => setToggle(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</Link>
            </li>
            <li>
              <Link to='/contacts' onClick={() => setToggle(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2">
          <div className="bg-gray-50 dark:bg-gray-900 dark:text-white rounded shadow-2xl p-5 transition-all duration-300 hidden md:block">
            {/* /Sidebar */}
            <Sidebar></Sidebar>
          </div>
          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-900 dark:text-white rounded transition-all duration-300 shadow-2xl md:block p-5 col-span-2 ">
            <Switch>
              <Route exact path="/">
                <About></About>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/experience">
                <Experience></Experience>
              </Route>
              <Route path="/skills">
                <Skills></Skills>
              </Route>
              <Route path="/projects">
                <Projects></Projects>
              </Route>
              <Route path="/contacts">
                <Contacts></Contacts>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
