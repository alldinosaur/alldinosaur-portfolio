const Projects = () => {
  return (
    <div className="Projects">
      <div className="font-bold dark:text-white border-b-2 mb-3 flex items-center pb-2">
        Projects
      </div>
      <div>
        <div
          className="pb-5 overflow-x-hidden overflow-y-auto"
          style={{ height: "70vh" }}
        >
          <h3 className="mb-3 text-gray-500 dark:text-gray-300">[4] Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 shadow-xl rounded d-flex overflow-hidden">
              <div className="font-bold text-md py-2 px-4 text-gray-800 dark:text-white">
                Coding Camp
              </div>
              <p className="px-4 py-2 dark:text-white text-sm">
                A website for people who want to learn coding from basic, with 1 on 1 mentoring session and future job opportunity for people that already complete the bootcamp.
              </p>
              <p className="px-4 py-2 dark:text-white text-sm mb-10">
                <b>Tech:</b> Laravel, MySQL, Tailwind, Socialite
              </p>
              <div className="mt-8 flex justify-around border-t-2 px-4 pb-4 pt-2">
                <a target="_blank" rel="noreferrer" href="https://github.com/alldinosaur/coding-camp">
                  <button className="flex items-center text-[#0096c7] hover:underline">
                    <svg
                      className="text-red-500 svg-inline--fa fa-github fa-w-16 inline-block mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0096c7"
                      width="24"
                      height="24"
                      viewBox="0  0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </button>
                </a>
              </div>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 shadow-xl rounded d-flex overflow-hidden">
              <div className="font-bold text-md py-2 px-4 text-gray-800 dark:text-white">
                SPK Beasiswa
              </div>
              <p className="px-4 py-2 dark:text-white text-sm">
                A website application that can support decision-making for stakeholders to decide whether the student is eligible for the scholarship.
              </p>
              <p className="px-4 py-2 dark:text-white text-sm mb-10">
                <b>Tech:</b> Codeigniter, MySQL, Bootstrap
              </p>
              <div className="mt-8 flex justify-around border-t-2 px-4 pb-4 pt-2">
                <a target="_blank" rel="noreferrer" href="https://github.com/alldinosaur/spk-beasiswa">
                  <button className="flex items-center text-[#0096c7] hover:underline">
                    <svg
                      className="text-red-500 svg-inline--fa fa-github fa-w-16 inline-block mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0096c7"
                      width="24"
                      height="24"
                      viewBox="0  0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </button>
                </a>
              </div>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 shadow-xl rounded d-flex overflow-hidden">
              <div className="font-bold text-md py-2 px-4 text-gray-800 dark:text-white">
                Petrashop
              </div>
              <p className="px-4 py-2 dark:text-white text-sm">
                A web application that can used to forecast the revenue of the shop. It used single exponential smoothing algorithm to forecast the revenue.
              </p>
              <p className="px-4 py-2 dark:text-white text-sm mb-10">
                <b>Tech:</b> Codeigniter, MySQL, Bootstrap.
              </p>
              <div className="mt-8 flex justify-around border-t-2 px-4 pb-4 pt-2">
                <a target="_blank" rel="noreferrer" href="https://github.com/alldinosaur/si-peramalan-penjualan">
                  <button className="flex items-center text-[#0096c7] hover:underline">
                    <svg
                      className="text-red-500 svg-inline--fa fa-github fa-w-16 inline-block mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0096c7"
                      width="24"
                      height="24"
                      viewBox="0  0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </button>
                </a>
              </div>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 shadow-xl rounded d-flex overflow-hidden">
              <div className="font-bold text-md py-2 px-4 text-gray-800 dark:text-white">
                Sistem Informasi Wisata Kota Depok
              </div>
              <p className="px-4 py-2 dark:text-white text-sm">
                A information website that give information about place in Depok city that can visit by family or friends for vacation or just to enjoy some food.
              </p>
              <p className="px-4 py-2 dark:text-white text-sm mb-10">
                <b>Tech:</b> Codeigniter, MySQL, Bootstrap.
              </p>
              <div className="mt-8 flex justify-around border-t-2 px-4 pb-4 pt-2">
                <a target="_blank" rel="noreferrer" href="https://github.com/alldinosaur/siwikode">
                  <button className="flex items-center text-[#0096c7] hover:underline">
                    <svg
                      className="svg-inline--fa fa-github fa-w-16 inline-block mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0  0 24 24"
                      fill="#0096c7"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
