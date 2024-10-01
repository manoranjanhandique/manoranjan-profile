import dp from "../../public/images/manoranjan.png";

const About = () => {
    return (
      <section className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={dp}
              alt="Profile"
              className="rounded-full w-32 h-32 border-4 border-gray-300 shadow-md"
            />
          </div>
  
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
  
          {/* Description */}
          <p className="text-gray-600 text-center text-lg">
            Hi, I’m <span className="font-semibold text-gray-800">Manoranjan Handique</span>, a passionate full-stack developer, with expertise in backend development, frontend technologies, and DevOps. Currently working at TCS.
          </p>
  
          {/* Details Section */}
          <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Background</h3>
              <p className="text-gray-600">
                I hold a Master's degree in Computer Applications and have over 5 years of experience in software development. My journey has allowed me to work on various exciting projects, enhancing both my technical and leadership skills.
              </p>
            </div>
  
            {/* Column 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interests</h3>
              <p className="text-gray-600">
                I enjoy working with cutting-edge technologies and I am a lifelong learner, always seeking opportunities to expand my knowledge and stay up-to-date with the latest industry trends..In my free time, I like to explore new tech trends, contribute to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;