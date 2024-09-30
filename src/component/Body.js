import dp from "../../public/images/manoranjan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const ProfilePic=()=>{
    return (
        <div className="w-48 h-64 border-2 border-gray-300 rounded-md overflow-hidden shadow-xl">
            <img className="w-full h-full object-cover" src={dp} alt="Loading"></img>
        </div>
    );

}
const SocialLinks=()=>{
    return (
        <span className="">
        <ul className="flex space-x-6 p-2 justify-center">
        <li>
            <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
            Linked In
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faGithub} className="mr-1" />
            GitHub
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faInstagram} className="mr-1" />
            Instagram
            </a>
        </li>
        <li>
            <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faStackOverflow} className="mr-1" />
            Naukri
            </a>
        </li>
        </ul>
    </span>
    );
}

const Body=()=>{
    const words = ["Frontend","|","Backend","|","DevOps"];
    return (
      <div className="h-[620px] flex items-center justify-center bg-blue-100">
        <ProfilePic/>
        <div className="border-blue-100 p-4 w-[750px]">
          <h1 className="text-5xl font-bold text-gray-800">Hi, I am Manoranjan Handique</h1>
          <div className="relative h-12 flex items-center space-x-4 mt-3 mb-6">
            {words.map((word, wordIndex) => (
              <div key={wordIndex} className="flex">
                {word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    style={{
                      display: "inline-block",
                      transform: "translateX(-100%)",
                      animation: `slideIn 0.5s ease ${
                        charIndex * 0.1
                      }s forwards`,
                    }}
                    className="text-4xl font-bold text-indigo-600 font-serif">
                    {char}
                  </span>
                ))}
              </div>
            ))}

            {/* Inline CSS for keyframes */}
            <style>{`
              @keyframes slideIn {
                to {
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>
          <p className="text-xl italic text-gray-600 mt-4 inline-block">I am fullstack developer. I am currently working at Tata Consultancy Service(TCS), Bengaluru.</p>
          <SocialLinks/>
        </div>
      </div>
    );
}

export default Body;