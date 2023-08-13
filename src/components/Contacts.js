const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="font-bold dark:text-white border-b-2 mb-3 flex items-center pb-2">
        Contact
      </div>
      <div>
        <div className="pb-5 overflow-x-hidden overflow-y-auto" style={{ height: "70vh" }}>
          <form action="" className="px-2 mb-4">
            <div className="mb-4">
              <label htmlFor="" className="block">
                <span className="text-gray-700 dark:text-gray-400">
                  Full Name
                </span>
              </label>
              <input
                required
                type="text"
                className="mt-1 dark:bg-gray-800 dark:border-gray-800 dark:text-white block w-full border-2 p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block">
                <span className="text-gray-700 dark:text-gray-400">Email</span>
              </label>
              <input
                required
                type="email"
                className="mt-1 dark:bg-gray-800 dark:border-gray-800 dark:text-white block w-full border-2 p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block">
                <span className="text-gray-700 dark:text-gray-400">
                  Message
                </span>
              </label>
              <textarea
                required
                name=""
                id=""
                cols="15"
                rows="10"
                className="mt-1 dark:bg-gray-800 dark:border-gray-800 dark:text-white  block w-full border-2 p-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              className="bg-blue-700 dark:bg-green-700 text-white font-bold px-4 py-2 uppercase rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
          <div className="mt-1 text-center dark:text-white">
            <h4 className="text- text-center dark:text-gray-400">
              My Social Media
            </h4>
            <ul className="flex justify-center items-center dark:text-gray-400">
              <li className="">
                <a href="https://github.com/alldinosaur" target="_blank">
                  <svg
                    className="svg-inline--fa fa-github fa-w-16 inline-block mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="#0096c7"
                    viewBox="0  0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>
              <li className="">
                <a href="https://linkedin.com/alldinosaur" target="_blank">
                  <svg
                    className="svg-inline--fa fa-linkedin fa-w-16 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#0096c7"
                    viewBox="0  0 18 18"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
              <li className="">
                <a href="mailto:aldiakbar373@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="#0096c7"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Contacts;
