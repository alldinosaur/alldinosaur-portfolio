const Skills = () => {
  return (
    <div className="Skills">
      <div className="font-bold dark:text-white border-b-2 mb-3 flex items-center pb-2">
        Skills
      </div>
      <div>
        <div
          className="pb-5 overflow-x-hidden overflow-y-auto"
          style={{ height: "70vh" }}
        >
          <h3 className="mb-3 text-gray-500 dark:text-gray-300">
            [3] Programming Languages
          </h3>
          <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24 md:mt-0">
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/python.png"
                alt="python"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Python</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/php.png"
                alt="PHP"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">PHP</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/javascript.png"
                alt=""
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">javascript</p>
            </div>
          </div>
          <h3 className="mb-3 text-gray-500 mt-10 dark:text-gray-300">
            [5] Frameworks/Libraries
          </h3>
          <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/tensorflow.png"
                alt="bootstrap"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Tensoflow</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/pytorch.png"
                alt="bootstrap"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">PyTorch</p>
            </div> */}
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/react.png"
                alt="react"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">React</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/laravel.png"
                alt="LARAVEL"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Laravel</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/ci.png"
                alt="codeigniter"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Codeigniter</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/jquery.png"
                alt="jquery"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">JQuery</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/bootstrap.png"
                alt="bootstrap"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Bootstrap</p>
            </div>
          </div>
          <h3 className="mb-3 text-gray-500 mt-10 dark:text-gray-300">
            [3] Databases
          </h3>
          <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/mysql.png"
                alt="MYSQL"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">MYSQL</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/mongodb.png"
                alt="VS Code"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">MongoDB</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/postgresql.png"
                alt="VS Code"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">postgresql</p>
            </div>
          </div>
          <h3 className="mb-3 text-gray-500 mt-10 dark:text-gray-300">
            [2] Others
          </h3>
          <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/git.png"
                alt="git"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Git</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/tensorflow.png"
                alt="bootstrap"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Tensoflow</p>
            </div>
            {/* <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/pytorch.png"
                alt="bootstrap"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">PyTorch</p>
            </div> */}
            {/* <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/tableau.jpg"
                alt="tableau"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">Tableau</p>
            </div>
            <div className="hover:shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition-all duration-300 hover:rotate-6 shadow-xl rounded flex items-center p-4">
              <img
                src="/logo/spss.png"
                alt="spss"
                className="w-10 inline-block mr-2"
              />
              <p className="uppercase truncate">SPSS</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
