const Experience = () => {
    return (
      <div className="About">
        <div className="font-bold dark:text-white border-b-2 mb-3 flex items-center pb-2">
          Experience
        </div>
        <div>
          <div className="pb-5 overflow-x-hidden overflow-y-auto border-b-2">
            <div className="font-medium dark:text-white">
              <h4>Software Developer (Internship)</h4>
              <h5>Telkom Indonesia</h5>
            </div>
            <div className="mb-2"><p>July - August 2023</p></div>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300 pb-1">Improve some features in an internal web application using Laravel. The improvements that I work with is about authorization, dashboard visualization, etc. I also contribute to the new project that still in development process at the company.</p>
            <p><b className="font-medium dark:text-white">Related Skills: </b>PHP, Laravel, MySQL, REST APIs</p>
          </div>
          <div className="pb-5 overflow-x-hidden overflow-y-auto border-b-2">
            <div className="font-medium dark:text-white">
              <h4>Assistant Lecturer</h4>
              <h5>Sekolah Tinggi Teknologi Terpadu Nurul Fikri</h5>
            </div>
            <div className="mb-2"><p>February - June 2023</p></div>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300 pb-1">Teach 60 students in 3 classes about basic and advanced query databases using MySQL, create some study cases, also grade student's practicum assignments, quizzes, and exams. The result is the students can have high understand of the material with the proof of 93% (56 of 60) of the students pass all the test and exam.</p>
            <p><b className="font-medium dark:text-white">Related Skills: </b>MySQL, Database, Communication</p>
          </div>
        </div>
      </div>
    );
  };
  
export default Experience;
  