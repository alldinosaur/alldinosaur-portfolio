const About = () => {
  return (
    <div className="About">
      <div className="font-bold dark:text-white border-b-2 mb-3 flex items-center pb-2">
        About
      </div>
      <div>
        <div className="pb-5 overflow-x-hidden overflow-y-auto">
          <div className="flex justify-center mb-5 mt-5">
            <img
              src="/images/aldi.png"
              alt=""
              className="w-48 rounded border-2 border-gray-800 dark:border-white"
            />
          </div>
          <div className="mb-2 font-medium dark:text-white">
            <h5>About Me</h5>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I'm an undergraduated Information Technology student at STT Nurul Fikri. I have interested learning Software Development, especially in Website. I've proficient using programming language such as Python, PHP and Javascript for create an application or website. I also use framework like Codeigniter or Laravel to create a fullstack website application. I also have a big interest in learning anything related to Artificaial Intelligence or AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
