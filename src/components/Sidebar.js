import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="Sidebar">
      <div className="grid justify-items-center relative">
        <img
          src="/images/aldi.png"
          alt=""
          className="w-1/3 rounded-full mb-4 border-2 border-gray-400 dark:border-white"
        />
        <div className="text-xl font-bold text-center">Aldi Akbar Alimi</div>
        <p className="text-center">Web Developer</p>
        <div className="text-center mt-5 w-full py-2 border-t-2">
          <ul>
            <li>
              <Link to="/about">
                <button
                  className={` ${splitLocation[1] === "about" || splitLocation[1] === ""
                      ? "bg-gray-300"
                      : ""
                    } py-2 transition duration-200 ease-in-out btn btn-gray w-full hover:bg-gray-300 rounded`}
                >
                  ABOUT
                </button>
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <button
                  className={` ${splitLocation[1] === "experience" ? "bg-gray-300" : ""
                    } py-2 transition duration-200 ease-in-out btn btn-gray w-full hover:bg-gray-300 rounded`}
                >
                  EXPERIENCE
                </button>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <button
                  className={`
                    ${splitLocation[1] === "skills" ? "bg-gray-300" : ""
                    } py-2 transition duration-200 ease-in-out btn btn-gray w-full mt-2 hover:bg-gray-300 rounded`}
                >
                  SKILLS
                </button>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <button
                  className={`
                    ${splitLocation[1] === "projects" ? "bg-gray-300" : ""
                    } py-2 transition duration-200 ease-in-out btn btn-gray w-full mt-2 hover:bg-gray-300 rounded`}
                >
                  PROJECTS
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <button
                  className={`
                    ${splitLocation[1] === "contacts" ? "bg-gray-300" : ""
                    } py-2 transition duration-200 ease-in-out btn btn-gray w-full mt-2 hover:bg-gray-300 rounded`}
                >
                  CONTACTS
                </button>
              </Link>
            </li>
          </ul>
          <div className="text-center mt-5 w-full py-2 border-b-2">
            <small className="mt-5 text-gray-300 mt-4">Made with ♥ by Me</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
