import { Link } from "react-router-dom";
import insta from "../../public/images/insta.png"
import linkedin from "../../public/images/linked_in.png"
import github from "../../public/images/github.png"
import x from "../../public/images/x.png"
const Contact=()=>{
    return (
      <div className="max-w-6xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mt-8 border">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Contact Me</h2>
        <p className="mb-6 italic font-serif">
          Let's build something amazing together – connect with me!
        </p>

        {/* Container for form and contact info */}
        <div className="grid grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mx-auto bg-white p-6 max-w-sm border-gray-200 rounded-lg shadow-md text-xl">
            <div className="mb-4">
              <h3 className="text-lg font-bold">Email</h3>
              <p className="text-gray-600 italic">
                manoranjanhandique@gmail.com
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Address</h3>
              <p className="text-gray-600">Bengaluru</p>
              <p className="text-gray-600">Karnataka</p>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-center">Follow Me</h3>
              <ul className="flex space-x-4 mt-6 justify-between">
                <li>
                <Link to="#">
                    <img src={github} alt="Instagram" className="w-10 h-10 cursor-pointer transition-transform duration-300 transform hover:scale-110"></img>
                  </Link>
                </li>
                <li>
                <Link to="#">
                    <img src={linkedin} alt="Instagram" className="w-10 h-10 cursor-pointer transition-transform duration-300 transform hover:scale-110"></img>
                  </Link>
                </li>
                <li>
                  {/* <a href="#" className="text-pink-600 hover:underline">
                    Instagram
                  </a> */}
                  <Link to="#">
                    <img src={insta} alt="Instagram" className="w-10 h-10 cursor-pointer transition-transform duration-300 transform hover:scale-110"></img>
                  </Link>
                </li>
                <li>
                <Link to="#">
                    <img src={x} alt="Instagram" className="w-10 h-10 cursor-pointer transition-transform duration-300 transform hover:scale-110"></img>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;